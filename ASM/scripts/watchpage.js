import { filmsInMain, topComment, topView, filmsTrend, showTimes } from "./data.js";
import { loadTopView, setOnClickForFilmTopView, changeUserContainer, setCategory, loadFilmWatchDetail, loadVideoFilm } from "./function.js";
import { pathNameUserPage } from "./constants.js";
const asideContainer = document.getElementById('aside');
const detailFilm = document.getElementById('articleDetailFilm');
const relativeFilm = document.getElementById('titleRelatedFilms');
const indexFilm = sessionStorage.getItem('indexFilm');

const userContainer = document.querySelector(".usercontainer");
const userMobileContainer = document.querySelector("#useMobileContainer");
const btnLogoutMobile = document.querySelector("#bntLogoutMobile");
const videoFilmContainer = document.querySelector(".video-film-container");
const typeOfData = sessionStorage.getItem('typeOfData');
var indexUser = localStorage.getItem("indexCurrentUser");
var btnLogout;

changeUserContainer(userContainer, userMobileContainer, indexUser);
switch (typeOfData) {
    case 'detail':
        loadFilmWatchDetail(detailFilm, relativeFilm, filmsInMain[indexFilm]);
        break;
    case 'topView':
        loadFilmWatchDetail(detailFilm, relativeFilm, topView[indexFilm]);
        break;
    case 'topCmt':
        loadFilmWatchDetail(detailFilm, relativeFilm, topComment[indexFilm]);
        break;
    case 'trend':
        loadFilmWatchDetail(detailFilm, relativeFilm, filmsTrend[indexFilm]);
        break;
    case 'showtime':
        loadFilmWatchDetail(detailFilm, relativeFilm, showTimes[indexFilm]);
        break;
    default:
        throw new Error('Invalid type of list');
}
loadVideoFilm(videoFilmContainer, localStorage.currentSlug);
// here set background of current episode
var arrEpisode = document.querySelectorAll(".a-episode");
arrEpisode.forEach(episode => {
    if (episode.getAttribute("data-slug") == localStorage.currentSlug) {
        episode.classList.add("current-episode");
        return;
    }
});

loadTopView(asideContainer);
setOnClickForFilmTopView();
const arrItemCategory = document.querySelectorAll(".item-category");
setCategory(arrItemCategory);

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
