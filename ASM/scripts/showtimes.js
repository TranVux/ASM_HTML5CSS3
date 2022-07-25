import { loadFilmShowTime, setCategory, setOnClickForFilmShowTime, changeUserContainer, slideHeaderCenter } from "./function.js";
import { pathNameUserPage, pathNameDetailPage } from "./constants.js";
const arrItemCategory = document.querySelectorAll(".item-category");
const arrContainer = document.querySelectorAll(".film-category-container");

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
loadFilmShowTime(arrContainer);
setOnClickForFilmShowTime();


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