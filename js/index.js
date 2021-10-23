$(document).ready(
    function() {

        function callToActionScroll(selector) {
            $(selector).click(function(event) {
                event.preventDefault();
                let target = $(this).attr('href');
    
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 800);
            });  
        }

        callToActionScroll('a[href*=index-oferecemos]');
    }
);