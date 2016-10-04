$(document).ready(function() {
    $('#menu ul').hide();
    $('#menu ul').children('.current').parent().show();

    $('#menu li a').click(function () {
        var checkElement = $(this).next();
        //if (checkElement.is('ul') && checkElement.is(':visible')) {
        //    return false;
        //}
        //if (checkElement.is('ul') && !checkElement.is(':visible')) {
        //    $(this).parent().siblings().find('ul:visible').slideUp('normal');
        //    checkElement.slideDown('normal');
        //    return false;
        //}

        if (checkElement.is('ul')) {
            $(this).find('.down-up').toggleClass('fa-angle-down fa-angle-up');
            checkElement.slideToggle();
            return false;
        }
    });
    
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $("#menu-toggle-2").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled-2");
        $(this).toggleClass("toggle-button");
        //$('#menu ul').hide();
    });
});