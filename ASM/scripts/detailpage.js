import { setCategory } from "./function.js";
import { filmsInMain, filmsTrend, showTimes, topComment, topView } from "./data.js";
import { loadTopComment, loadTopView, loadFilmDetail, setOnClickForFilmTopCmt, setOnClickForFilmTopView, loadFilmCategory, changeUserContainer } from "./function.js";
const asideContainer = document.getElementById('aside');
const detailFilm = document.getElementById('articleDetailFilm');
const relativeFilm = document.getElementById('titleRelatedFilms');
const indexFilm = sessionStorage.getItem('indexFilm');
const typeOfData = sessionStorage.getItem('typeOfData');

const userContainer = document.querySelector(".usercontainer");
var indexUser = localStorage.getItem("indexCurrentUser");
var btnLogout;

changeUserContainer(userContainer, indexUser);

loadTopView(asideContainer);
loadTopComment(asideContainer);
setOnClickForFilmTopCmt();
setOnClickForFilmTopView();
const arrItemCategory = document.querySelectorAll(".item-category");
setCategory(arrItemCategory);
switch (typeOfData) {
    case 'detail':
        loadFilmDetail(detailFilm, relativeFilm, filmsInMain[indexFilm]);
        break;
    case 'topView':
        loadFilmDetail(detailFilm, relativeFilm, topView[indexFilm]);
        break;
    case 'topCmt':
        loadFilmDetail(detailFilm, relativeFilm, topComment[indexFilm]);
        break;
    case 'trend':
        loadFilmDetail(detailFilm, relativeFilm, filmsTrend[indexFilm]);
        break;
    case 'showtime':
        loadFilmDetail(detailFilm, relativeFilm, showTimes[indexFilm]);
        break;
    default:
        throw new Error('Invalid type of list');
}



if (indexUser != -1) {
    btnLogout = document.getElementById("btnLogout");
    btnLogout.addEventListener("click", () => {
        console.log('logout successfully!');
        localStorage.setItem("indexCurrentUser", -1);
        indexUser = localStorage.getItem("indexCurrentUser");
        changeUserContainer(userContainer, indexUser);
    });
}

