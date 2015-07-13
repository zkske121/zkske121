define('js/module/0410', function(require, exports, module) {
    var $ = require('jquery'),
        doT = require('doT'),
        tpl_menu = require('../../../ui/tab_menu.tpl'),
        tpl_list = require('../../../ui/tab_list.tpl'),
        fn_menu = doT.template(tpl_menu),
        fn_list = doT.template(tpl_list);

    function Tab(id, json) {
        this.container = $('#' + id);
        this.container.html(fn_menu(json));
        this.menu = $('nav .nav_a', '#' + id);
        this.list = $('.list', '#' + id);
        this.data = json;
    };

    Tab.prototype = {
        constructor: Tab,
        init: function() {
            that = this;

            $.each(that.menu, function(i, item) {

            		(function(tab, current){

                        //可以使用事件冒泡,添加一次执行函数
                        /*$('span', item).one('mouseenter', function() {
                            current.html(fn_list(tab.data[i].list));
                            console.log('once');
                        });*/

            			$(item).mouseenter(function() {
            			    if ($(this).attr('data-img') == 'wait') {
            			        current.html(fn_list(tab.data[i].list));
            			        $(item).attr('data-img', 'done');
            			    }

                            current.show().siblings().hide();
            			});

            		})(that, that.list.eq(i));

            });

            return that;
        }
    };

    var data = [{
        id: 'java',
        name: 'java',
        list: [
            'image/img145_01.jpg',
            'image/img145_01.jpg',
            'image/img145_01.jpg',
            'image/img145_01.jpg',
            'image/img145_01.jpg',
            'image/img145_01.jpg',
            'image/img145_01.jpg',
            'image/img145_01.jpg',
            'image/img145_01.jpg',
            'image/img145_01.jpg'
        ]
    }, {
        id: 'c',
        name: 'c++',
        list: [
            'image/img145_02.jpg',
            'image/img145_02.jpg',
            'image/img145_02.jpg',
            'image/img145_02.jpg',
            'image/img145_02.jpg',
            'image/img145_02.jpg',
            'image/img145_02.jpg',
            'image/img145_02.jpg',
            'image/img145_02.jpg',
            'image/img145_02.jpg'
        ]
    }, {
        id: 'net',
        name: '.net',
        list: [
            'image/img145_05.jpg',
            'image/img145_05.jpg',
            'image/img145_05.jpg',
            'image/img145_05.jpg',
            'image/img145_05.jpg',
            'image/img145_05.jpg',
            'image/img145_05.jpg',
            'image/img145_05.jpg',
            'image/img145_05.jpg',
            'image/img145_05.jpg'
        ]
    }, {
        id: 'javascript',
        name: 'javascript',
        list: [
            'image/img145_06.jpg',
            'image/img145_06.jpg',
            'image/img145_06.jpg',
            'image/img145_06.jpg',
            'image/img145_06.jpg',
            'image/img145_06.jpg',
            'image/img145_06.jpg',
            'image/img145_06.jpg',
            'image/img145_06.jpg',
            'image/img145_06.jpg'
        ]
    }, {
        id: 'go',
        name: 'go',
        list: [
            'image/img145_07.jpg',
            'image/img145_07.jpg',
            'image/img145_07.jpg',
            'image/img145_07.jpg',
            'image/img145_07.jpg',
            'image/img145_07.jpg',
            'image/img145_07.jpg',
            'image/img145_07.jpg',
            'image/img145_07.jpg',
            'image/img145_07.jpg'
        ]
    }];


    $(function() {
	    exist.isExist($(window).scrollTop(), $(window).scrollTop() + $(window).height());
    });

    $(window).on('resize scroll', function(e) {

        var winTop = $(window).scrollTop(),
            winEnd = winTop + $(window).height();

        exist.timer && clearTimeout(exist.timer);
        // exist.timer = setTimeout(function() {
        //     exist.isExist(winTop, winEnd);
        // }, 500);

        exist.timer = setTimeout(exist.isExist.bind(exist, winTop, winEnd), 200);

    });

    var exist = (function($) {
        var timer = null,
            temp = [].slice.call($('.container'));
            ret = {};

            for(var i=0, len=temp.length-1; i<=len; i++) {
                ret[i] = temp[i];
            }

        var isExist = function(winTop, winEnd) {

            for(var i in ret){
                var item = ret[i],
                    eleTop = item.offsetTop,
                    eleEnd = eleTop + item.offsetHeight;

                if (((eleTop > winTop && eleTop <= winEnd) || (eleEnd > winTop && eleEnd <= winEnd) )) {
                    $(item).css('background', 'none');
                    new Tab($(item).attr('id'), data).init();
                    delete ret[i];
                }
            }
           
        };

        return {
            timer: timer,
            isExist: isExist
        };
    })($);

});
