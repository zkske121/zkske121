<div class="d_choice">
    <div class="d_close"></div>
    <div class="c_title">请选择尺寸</div>
    <div class="c_pic">
        <img src="{{=it.current.pic}}" title="{{=it.current.color}}" alt="{{=it.current.color}}">
    </div>
    <div class="c_item">
               <span class="i_title">{{=it.current.smName}}</span>
        <span class="i_color">颜色</span>
        <ul class="i_color_item">
                {{for(var key in it.products) { }}
           		<li data-index="{{=key}}"><img src="{{=it.products[key].pic}}" title="{{=it.products[key].color}}" alt="{{=it.products[key].color}}"></li>
                {{ } }}
            <div class="i_color_curr"></div>
        </ul>
        <span class="i_spec">规格</span>
        <ul class="i_spec_item">
             {{for(var key in it.current.spec) { }}
                <li data-index="{{=key}}"><span title="{{=it.current.spec[key].specName}}">{{=it.current.spec[key].specName}}</span></li>
             {{ } }}
            <div class="i_spec_curr"></div>
        </ul>
        <span class="i_count">数量</span>
        <span class="i_calc" id="calc_minus">-</span>
        <input class="i_count_val" id="count_val" type="text" value="1">
        <span class="i_calc" id="calc_add">+</span>
        <div class="i_tip">
            已预订数量<span id="i_book">0</span>件剩余数量<span id="i_inventory">0</span>件
        </div>
    </div>
    <div class="c_bottom">
        <div class="c_submit"><span>加入购物车</span></div>
    </div>
</div>

<!-- tpl_spec -->
{{for(var key in it) { }}
        <li data-index="{{=key}}"><span title="{{=it[key].specName}}">{{=it[key].specName}}</span></li>
{{ } }}
<div class="i_spec_curr"></div>