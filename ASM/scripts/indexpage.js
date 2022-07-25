import { filmsInMain } from "./data.js";
import { loadTopComment, loadTopView, loadFilm, setOnClickForFilmTopCmt, setOnClickForFilmTopView, changeUserContainer, setCategory, slideHeaderCenter } from "./function.js";
import { pathNameUserPage, pathNameDetailPage } from "./constants.js";
const filmsContainer = document.getElementById('filmCateforyContainer');
const asideContainer = document.getElementById('aside');
const arrItemCategory = document.querySelectorAll(".item-category");
const userContainer = document.querySelector(".usercontainer");
const userMobileContainer = document.querySelector("#useMobileContainer");
const btnLogoutMobile = document.querySelector("#bntLogoutMobile");
const headerCenter = document.querySelector("#headerCenter");
const filmNameHeaderCenter = document.querySelector(".film-name");
const filmSubHeaderCenter = document.querySelector(".film-sub_header-center");
const btnHeaderCenter = document.getElementById("btnHeaderCenter");
console.log(filmNameHeaderCenter);
console.log(filmSubHeaderCenter);
console.log(headerCenter);
var indexUser = localStorage.getItem("indexCurrentUser");
if (indexUser == null) {
    localStorage.setItem("indexCurrentUser", -1);
    indexUser = localStorage.getItem("indexCurrentUser");
}
var btnLogout;
slideHeaderCenter(headerCenter, filmNameHeaderCenter, filmSubHeaderCenter, btnHeaderCenter);
btnHeaderCenter.addEventListener('click', () => {
    let index = btnHeaderCenter.getAttribute("data-indexfilm");
    console.log('successfully, index is: ', index);
    sessionStorage.setItem('indexFilm', index);
    sessionStorage.setItem('typeOfData', 'detail');
    location.pathname = pathNameDetailPage;
});

loadTopView(asideContainer);
loadTopComment(asideContainer);
setOnClickForFilmTopCmt();
setOnClickForFilmTopView();
loadFilm(filmsContainer, filmsInMain, 'detail', 'detail');
setCategory(arrItemCategory);
console.table(filmsInMain);

console.log(indexUser);

changeUserContainer(userContainer, userMobileContainer, indexUser);
userMobileContainer.addEventListener("click", () => {
    location.pathname = pathNameUserPage;
})
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


