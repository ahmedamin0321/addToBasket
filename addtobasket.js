(function ($) {
    $.fn.addToBasket = function () {
        myTray=this;
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
            $(myBasket).find("option[value='"+text+"']").show();
        });
        $(myBasket).change(function(){
            var text=$(this).val();
            $(this).find(':selected').hide().removeAttr('selected');
            $(myTray).find("option[value='"+text+"']").show();
        });
    };
}(jQuery));