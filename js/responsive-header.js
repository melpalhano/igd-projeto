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

const itensMenu = document.querySelectorAll(".nav-menu-item");

itensMenu.forEach(function(itemAtual) {
    itemAtual.addEventListener('click', function() {
        itensMenu.forEach(function(item) {
            item.querySelector('a').classList.remove('active');
        });
        itemAtual.querySelector('a').classList.add('active');
    });
});