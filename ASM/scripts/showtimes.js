import { loadFilmShowTime, setCategory, setOnClickForFilmShowTime, changeUserContainer } from "./function.js";
const arrItemCategory = document.querySelectorAll(".item-category");
const arrContainer = document.querySelectorAll(".film-category-container");

const userContainer = document.querySelector(".usercontainer");
var indexUser = localStorage.getItem("indexCurrentUser");
var btnLogout;

setCategory(arrItemCategory);
loadFilmShowTime(arrContainer);
setOnClickForFilmShowTime();


changeUserContainer(userContainer, indexUser);

if (indexUser != -1) {
    btnLogout = document.getElementById("btnLogout");
    btnLogout.addEventListener("click", () => {
        console.log('logout successfully!');
        localStorage.setItem("indexCurrentUser", -1);
        indexUser = localStorage.getItem("indexCurrentUser");
        changeUserContainer(userContainer, indexUser);
    });
}
