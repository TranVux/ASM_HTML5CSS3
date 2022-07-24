// Nút mở menu
var nav_btn = document.querySelector('.header-nav-btn');
// Menu
var nav_menu = document.querySelector(".nav-menu_mobile");
// Lớp phủ phía sau menu được kích hoạt sau khi bấm vào nav_btn
var bg_layer = document.querySelector(".gb-layer");
// nút thể loại
var btn_category = document.getElementById("btnCategory");
// thẻ chứa các thể loại phim
var categoryListContainer = document.querySelector(".category-mobile");
// có chức năng bật menu khi bấm vào và tắt khi bấm vào 1 lần nữa
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
// sẽ bật ra tab thể loại phim khi bấm vào và tắt khi bấm vào lần nữa
btn_category.addEventListener("click", () => {
    nav_btn.classList = "header-nav-btn exit";
    categoryListContainer.classList = "category-mobile show";
});

var myCanvas = document.getElementById("myCanvas");
myCanvas.width = 70;
myCanvas.height = 70;
var ctx = myCanvas.getContext('2d');
var image = new Image();
image.src = "./assets/images/image2.png";
image.onload = () => {
    ctx.beginPath();
    ctx.drawImage(image, 10, 10);
}
myCanvas.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.onscroll = () => {
    console.log(window.innerHeight);
    console.log(document.body.scrollTop);
    console.log(document.documentElement.scrollTop);
    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
        myCanvas.style.visibility = 'visible';
        myCanvas.style.opacity = 1;
    } else {
        myCanvas.style.visibility = 'hidden';
        myCanvas.style.opacity = 0;
    }
}