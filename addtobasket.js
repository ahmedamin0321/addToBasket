(function ($) {
    $.fn.addToBasket = function (options=null) {
        myTray=this;
        myTray.attr({
            multiple:'multiple',
            size:15,
            class:'form-control'
        });
        if(options!==null){
            let dropdown=options.dropdown;
            for(var i=1;i<=dropdown.items;i++){
                var value="item"+i;
                var text=dropdown.text;
                if(dropdown.textIterator===true)
                    text=text+i;
                this.append("<option value='"+value+"'>"+text+"</option>");
            }
        }
        myBasket=("#basket");
        myTray.wrap('<div class="col-md-2 trayContainer"></div>');

        $(".trayContainer").clone().prop('class', 'col-md-2 basketContainer').insertAfter(".trayContainer");
        $('.basketContainer').children('select').prop('id', 'basket').children().hide();

        $(myTray).add(myBasket).children('option').mouseenter(function () {
            $(this).css('color', 'blue');
        }).mouseleave(function () {
            $(this).css('color', 'black');
        });
        
        $(myTray).change(function(){
            var text=$(this).val();
            $(this).find(':selected').hide().removeAttr('selected');
            text.forEach(function(val){
                $(myBasket).find("option[value='"+val+"']").show();
            });
        });
        $(myBasket).change(function(){
            var text=$(this).val();
            $(this).find(':selected').hide().removeAttr('selected');
            text.forEach(function(val){
                $(myTray).find("option[value='"+val+"']").show();
            });
            
        });
    };
}(jQuery));