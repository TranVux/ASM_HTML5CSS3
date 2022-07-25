import { filmsTrend } from "./data.js";
import { loadFilm, loadFilmCategory, setCategory, changeUserContainer, slideHeaderCenter } from "./function.js";
import { pathNameUserPage, pathNameDetailPage } from "./constants.js";
const container = document.getElementById('filmCategoryContainer');
const trendContainer = document.getElementById('filmTrendCategory');
const category = sessionStorage.getItem('category');
const pageNumber = document.querySelector('.page');
const arrItemCategory = document.querySelectorAll(".item-category");
const userContainer = document.querySelector(".usercontainer");
const userMobileContainer = document.querySelector("#useMobileContainer");
const btnLogoutMobile = document.querySelector("#bntLogoutMobile");
const headerCenter = document.querySelector("#headerCenter");
const filmNameHeaderCenter = document.querySelector(".film-name");
const filmSubHeaderCenter = document.querySelector(".film-sub_header-center");
const btnHeaderCenter = document.getElementById("btnHeaderCenter");
var indexUser = localStorage.getItem("indexCurrentUser");
var btnLogout;
setCategory(arrItemCategory);
loadFilmCategory(container, category);
if (container.childElementCount == 0) {
    // set số cột cho "film-category-container" là 1
    container.style.gridTemplateColumns = "1fr";
    // làm trống thẻ phân trang
    pageNumber.innerHTML = '';
    // tạo thẻ img,  1 thẻ p và 1 thẻ div để chứa tất cả dòng thông báo
    const img = document.createElement('img');
    const text = document.createElement('p');
    const containerAlert = document.createElement('div');
    // set class cho thẻ chứa thông báo là "alert-container"
    containerAlert.className = 'alert-container';
    // set chữ hiện thị trong thẻ p
    text.innerText = 'Website hiện chưa cập nhật phim của thể loại ' + category + '. Xin lỗi bạn vì sự bất tiện này.'
    text.classList = 'empty-text';
    // set hình ảnh cho thẻ img
    img.src = 'assets/images/cartoon-owls-sad.png';
    img.classList = 'empty-img';
    // Thêm thẻ p và thẻ img vào trong thẻ "alert-container"
    containerAlert.appendChild(text);
    containerAlert.appendChild(img);
    // thêm "alert-container" vào trong "film-catefory-container"
    container.appendChild(containerAlert);
}
if (container.childElementCount < 6) {
    pageNumber.style.display = "none";
}
loadFilm(trendContainer, filmsTrend, 'trend', 'trend');

changeUserContainer(userContainer, userMobileContainer, indexUser);

userMobileContainer.addEventListener("click", () => {
    location.pathname = pathNameUserPage;
});

if (indexUser != -1) {
    btnLogout = document.getElementById("btnLogout");
    btnLogout.addEventListener("click", logout);
    btnLogoutMobile.addEventListener("click", logout);
}

function logout() {
    console.log('logout successfully!');
    localStorage.setItem("indexCurrentUser", -1);
    indexUser = localStorage.getItem("indexCurrentUser");
    changeUserContainer(userContainer, userMobileContainer, indexUser);
}
slideHeaderCenter(headerCenter, filmNameHeaderCenter, filmSubHeaderCenter, btnHeaderCenter);
btnHeaderCenter.addEventListener('click', () => {
    let index = btnHeaderCenter.getAttribute("data-indexfilm");
    console.log('successfully, index is: ', index);
    sessionStorage.setItem('indexFilm', index);
    sessionStorage.setItem('typeOfData', 'detail');
    location.pathname = pathNameDetailPage;
});