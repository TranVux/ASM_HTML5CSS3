import { loadFilmShowTime, setCategory, setOnClickForFilmShowTime, changeUserContainer } from "./function.js";
const arrItemCategory = document.querySelectorAll(".item-category");
const arrContainer = document.querySelectorAll(".film-category-container");

const userContainer = document.querySelector(".usercontainer");
const userMobileContainer = document.querySelector("#useMobileContainer");
const btnLogoutMobile = document.querySelector("#bntLogoutMobile");
var indexUser = localStorage.getItem("indexCurrentUser");
var btnLogout;

setCategory(arrItemCategory);
loadFilmShowTime(arrContainer);
setOnClickForFilmShowTime();


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
