$(document).ready(
    function () {
        $('.nav-hamburguer').click(function () {
            $('.nav-menu').slideToggle();
        });

        $('.item-dropdown').click(function() {
            $('.nav-dropdown').slideToggle();
        });
                
        $(window).resize(function () {
            if ($(window).width() > 992) {
                $('ul').removeAttr('style')
            }
        });
    },
    setActivePage(activePage)
);