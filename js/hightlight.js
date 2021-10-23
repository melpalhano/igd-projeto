function setActivePage(pageName){

    var tudo = document.getElementById("header");
    var links = tudo.getElementsByClassName(pageName);
    if (links[0].className == pageName){
        if (!links[0].classList.contains("active")){
            links[0].classList.add("active");
        }
    }
}