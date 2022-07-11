var nav_btn = document.querySelector('.header-nav-btn');
var nav_menu = document.querySelector(".nav-menu_mobile");
var bg_layer = document.querySelector(".gb-layer");
var btn_category = document.getElementById("btnCategory");
var categoryListContainer = document.querySelector(".category-mobile");
function turnOnOffMenuMobile() {
    if (nav_btn.classList == "header-nav-btn exit") {
        categoryListContainer.classList = "category-mobile";
        nav_btn.classList = "header-nav-btn active";
    } else {
        nav_btn.classList.toggle("active");
        nav_menu.classList.toggle("show");
        bg_layer.classList.toggle("show")
    }
}
nav_btn.onclick = function () {
    turnOnOffMenuMobile();
}
bg_layer.onclick = function () {
    turnOnOffMenuMobile();
}
btn_category.addEventListener("click", () => {
    nav_btn.classList = "header-nav-btn exit";
    categoryListContainer.classList = "category-mobile show";
})


