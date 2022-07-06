import { filmsInMain } from "./data.js";
import { loadTopComment, loadTopView, loadFilm, setOnClickForFilmTopCmt, setOnClickForFilmTopView, changeUserContainer, setCategory } from "./function.js";
const filmsContainer = document.getElementById('filmCateforyContainer');
const asideContainer = document.getElementById('aside');
const arrItemCategory = document.querySelectorAll(".item-category");
const userContainer = document.querySelector(".usercontainer");
var indexUser = localStorage.getItem("indexCurrentUser");
if (indexUser == null) {
    localStorage.setItem("indexCurrentUser", -1);
    indexUser = localStorage.getItem("indexCurrentUser");
}
var btnLogout;
loadTopView(asideContainer);
loadTopComment(asideContainer);
setOnClickForFilmTopCmt();
setOnClickForFilmTopView();
loadFilm(filmsContainer, filmsInMain, 'detail', 'detail');
setCategory(arrItemCategory);
console.table(filmsInMain);

console.log(indexUser);

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