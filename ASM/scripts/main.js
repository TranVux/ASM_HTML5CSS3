var nav_btn = document.querySelector('.header-nav-btn');
var nav_menu = document.querySelector(".nav-menu_mobile");
var bg_layer = document.querySelector(".gb-layer");
function turnOnOffMenuMobile() {
    nav_btn.classList.toggle("active");
    nav_menu.classList.toggle("show");
    bg_layer.classList.toggle("show")
}
nav_btn.onclick = function () {
    turnOnOffMenuMobile();
}
bg_layer.onclick = function () {
    turnOnOffMenuMobile();
}



