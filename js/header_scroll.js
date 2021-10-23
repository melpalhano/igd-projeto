var prevY = window.pageYOffset;
window.onscroll = function () {
    if (window.outerWidth < 768){
        return false;
    }
    var currentY = window.pageYOffset;
    if (currentY < prevY) {
        document.querySelector("header").style.top = "0";
    }
    else {
        document.querySelector("header").style.top = "-100px";
    }
    prevY = currentY;
}