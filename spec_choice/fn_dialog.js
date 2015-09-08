var fn_dialog = (function() {
    var tpl_tip = '<div class="d_warn"><div class="d_close"></div><strong>{{=it}}</strong></div>';
    var tpl_fn_dialog = [
        '        <div class="d_location">',
        '            <div class="d_content">',
        '            </div>',
        '            <div class="d_bg"></div>',
        '        </div>'
    ].join("");
    var tpl_choice = ['<div class="d_choice">',
        '    <div class="d_close"></div>',
        '    <div class="c_title">请选择尺寸</div>',
        '    <div class="c_pic">',
        '        <img src="{{=it.current.pic}}" title="{{=it.current.color}}" alt="{{=it.current.color}}">',
        '    </div>',
        '    <div class="c_item">',
        '               <span class="i_title">{{=it.current.smName}}</span>',
        '        <span class="i_color">颜色</span>',
        '        <ul class="i_color_item">',
        '                {{for(var key in it.products) { }}',
        '                   <li data-index="{{=key}}"><img src="{{=it.products[key].pic}}" title="{{=it.products[key].color}}" alt="{{=it.products[key].color}}"></li>',
        '                {{ } }}',
        '            <div class="i_color_curr"></div>',
        '        </ul>',
        '        <span class="i_spec">规格</span>',
        '        <ul class="i_spec_item">',
        '             {{for(var key in it.current.spec) { }}',
        '                <li data-index="{{=key}}"><span>{{=it.current.spec[key].specName}}</span></li>',
        '             {{ } }}',
        '            <div class="i_spec_curr"></div>',
        '        </ul>',
        '        <span class="i_count">数量</span>',
        '        <span class="i_calc" id="calc_minus">-</span>',
        '        <input class="i_count_val" id="count_val" type="text" value="1">',
        '        <span class="i_calc" id="calc_add">+</span>',
        '        <div class="i_tip">',
        '            已预订数量<span id="i_book">0</span>件剩余数量<span id="i_inventory">0</span>件',
        '        </div>',
        '    </div>',
        '    <div class="c_bottom">',
        '        <div class="c_submit"><span>加入购物车</span></div>',
        '    </div>',
        '</div>'
    ].join("");
    var tpl_spec = ['{{for(var key in it) { }}',
        '        <li data-index="{{=key}}"><span title="{{=it[key].specName}}">{{=it[key].specName}}</span></li>',
        '{{ } }}',
        '<div class="i_spec_curr"></div>'
    ].join("");

    if (!$('.fn_dialog', 'body').length) {
        var fn_dialog = doT.template(tpl_fn_dialog);
        $('<div>').addClass('fn_dialog')
            .html(fn_dialog())
            .appendTo($('body'));
    }

    var $fn_dialog = $('.fn_dialog'),
        $container = $fn_dialog.find('.d_content'),
        $d_bg = $fn_dialog.find('.d_bg');

    //规格选择
    var choice = (function($dialog) {
        var fn_callback = function() {},
            inventory = 10,
            data_pros = {
                current: null,
                products: null,
                index: null
            };

        /**
         * 选择颜色
         * 切换title, pic, 规格, 隐藏inventory
         * 
         */
        $(document).on('click', '.i_color_item li', function() {
            selectColor(this);
            setSpec(this);
            
            $dialog.find('.i_tip').hide();
            
            var curr = data_pros.products[$(this).data('index')];

            $dialog.find('.c_pic img').attr('src', curr.pic)
                .attr('title', curr.color)
                .attr('alt', curr.color);

            $dialog.find('.i_title').text(curr.smName);
        });

        //选择规格
        $(document).on('click', '.i_spec_item', function(e) {
            var item = $(e.target).parent('li')[0];
            var $spec_curr = $dialog.find('.i_spec_curr');

            if(!item) {
                return;
            }

            $spec_curr.show().css({
                left: item.offsetLeft,
                top: item.offsetTop,
                width: $(item).width() - 2
            }).data('index', $(item).data('index'));

            var data_spec = data_pros.products[$dialog.find('.i_color_curr').data('index')].spec[$(item).data('index')] || {};
            inventory = data_spec.qty;
            $('.i_tip').show();
            setInventory();
        });

        /*数量-*/
        $(document).on('click', '#calc_minus', function() {
            var $count_val = $('#count_val'),
                tmp = $count_val.val();
            $count_val.val(tmp > 1 ? --tmp : 1);
            setInventory();
        });

        /*数量+*/
        $(document).on('click', '#calc_add', function() {
            var $count_val = $('#count_val'),
                tmp = $count_val.val();
            $count_val.val(tmp < inventory ? ++tmp : inventory);
            setInventory();
        });

        /*数量输入只能是2位数字*/
        $(document).on('change', '#count_val', function() {
            var tmp = this.value,
                $book = $('#i_book'),
                $inventory = $('#i_inventory');

            tmp = (/(.{3,})|\D/g).test(String(tmp)) || tmp > inventory || parseInt(tmp) == 0 ? 1 : tmp;
            this.value = tmp;
            setInventory();
        });

        /**
         * 提交,调用回调函数
         * qty,smSeq,is_mall,price 库存,商品id, 是否是商城,价格                       [description]
         */
        $(document).on('click', '.c_submit', function() {
            var color_curr = $dialog.find('.i_color_curr').data('index'),
                spec_curr = $dialog.find('.i_spec_curr').data('index'),
                curr = {};

            if (color_curr === undefined) {
                alert('请选择颜色!');
                return;
            }
            if (spec_curr === undefined) {
                alert('请选择规格!');
                return;
            }

            curr = data_pros.products[color_curr].spec[spec_curr];
            fn_callback($('#count_val').val(), curr.smSeq, curr.is_mall, curr.price);
            $dialog.hide();
        });

        //设置存货数量
        function setInventory() {
            var $count_val = $('#count_val'),
                $i_book = $('#i_book'),
                $i_inventory = $('#i_inventory'),
                tmp = inventory - $count_val.val();

            if(tmp >= 0) {
                $i_book.text($count_val.val());
                $i_inventory.text(tmp);
            } else {
                $count_val.val(1);
                setInventory();
            }
        }

        //选中颜色
        function selectColor(color) {
            $color_curr = $dialog.find('.i_color_curr');

            $color_curr.show().css({
                left: color.offsetLeft,
                top: color.offsetTop
            }).data('index', $(color).data('index'));
        }

        function setSpec(color) {
            $dialog.find('.i_spec_curr').data('index', '');

            var spec_html = doT.template(tpl_spec),
                data_spec = data_pros.products[$(color).data('index')].spec || {};

            $dialog.find('.i_spec_item').empty().html(spec_html(data_spec));
        }

        return function(json, fn) {
            if (!json || !fn) {
                return;
            }

            console.log(json);
            data_pros.products = json;
            for (var key in json) {
                if (json[key].selected) {
                    data_pros.current = json[key];
                    data_pros.index = key;
                }
            }

            var choice = doT.template(tpl_choice);
            $dialog.show();
            $container.empty().html(choice(data_pros));
            setPosition();
            fn && (fn_callback = fn);

            //颜色默认选中
            $dialog.find('.i_color_item li').each(function(i, item) {
                if (data_pros.index === $(item).data('index')) {
                    selectColor(item);
                }
            });
        }

    })($fn_dialog);

    //关闭
    $(document).on('click', '.d_close', function() {
        $fn_dialog.hide();
    });

    //提示框
    function warn(json) {
        var tip = doT.template(tpl_tip);
        $fn_dialog.show();
        $container.empty().html(tip(json));
        setPosition();
    }

    //位置置中
    function setPosition() {
        var c_width = $container[0].offsetWidth,
            c_height = $container[0].offsetHeight;

        $container.css({
            marginLeft: -1 * c_width / 2,
            marginTop: -1 * c_height / 2
        });

        $d_bg.css({
            width: c_width + 10,
            height: c_height + 10,
            marginLeft: -1 * (c_width + 10) / 2,
            marginTop: -1 * (c_height + 10) / 2
        });
    }

    return {
        warn: warn,
        choice: choice
    }

})($, doT);
