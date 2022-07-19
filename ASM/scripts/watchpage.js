import { filmsInMain, topComment, topView, filmsTrend, showTimes } from "./data.js";
import { loadTopView, setOnClickForFilmTopView, changeUserContainer, setCategory, loadFilmWatchDetail, loadVideoFilm, setCurrentSlugVideo } from "./function.js";
import { pathNameUserPage } from "./constants.js";
const asideContainer = document.getElementById('aside');
const detailFilm = document.getElementById('articleDetailFilm');
const relativeFilm = document.getElementById('titleRelatedFilms');
const indexFilm = sessionStorage.getItem('indexFilm');
const watchContainer = document.querySelector("#watchContainer");
const userContainer = document.querySelector(".usercontainer");
const userMobileContainer = document.querySelector("#useMobileContainer");
const btnLogoutMobile = document.querySelector("#bntLogoutMobile");
const videoFilmContainer = document.querySelector(".video-film-container");
const typeOfData = sessionStorage.getItem('typeOfData');
const btnNext = document.querySelector("#btnNext");
const btnPrevious = document.querySelector("#btnPrevious");
const btnToggleLight = document.querySelector("#btnToggleLight");
const mark = document.querySelector(".mark");
const deviantSize = window.screen.width * 1 - 1080;

var currentEpisodeIndex;
var indexUser = localStorage.getItem("indexCurrentUser");
var btnLogout;
changeUserContainer(userContainer, userMobileContainer, indexUser);
switch (typeOfData) {
    case 'detail':
        loadFilmWatchDetail(detailFilm, relativeFilm, filmsInMain[indexFilm]);
        break;
    case 'topView':
        loadFilmWatchDetail(detailFilm, relativeFilm, topView[indexFilm]);
        console.log('top view');
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
arrEpisode.forEach((episode, index) => {
    if (episode.getAttribute("data-slug") == localStorage.currentSlug) {
        episode.classList.add("current-episode");
        currentEpisodeIndex = index;
        return;
    }
});

btnNext.addEventListener("click", () => {
    console.log(currentEpisodeIndex);
    console.log(arrEpisode.length);
    if (currentEpisodeIndex >= arrEpisode.length - 1) return;
    setCurrentSlugVideo(arrEpisode[currentEpisodeIndex + 1].getAttribute("data-slug"));
})
btnPrevious.addEventListener("click", () => {
    console.log(currentEpisodeIndex);
    console.log(arrEpisode.length);
    if (currentEpisodeIndex == 0) return;
    setCurrentSlugVideo(arrEpisode[currentEpisodeIndex - 1].getAttribute("data-slug"));
})

btnToggleLight.addEventListener("click", () => {
    console.log(mark);
    mark.classList.toggle("turn_on");
    if (mark.classList.contains("turn_on")) {
        btnToggleLight.innerHTML = `<i class="fas fa-lightbulb" style="color: white;"></i> Turn on`

    } else {
        btnToggleLight.innerHTML = `<i class="fas fa-lightbulb" style="color: #E8AA42;"></i> Turn off`
    }
})

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


resizeWatchContaner();
window.onresize = () => {
    resizeWatchContaner();
}

function resizeWatchContaner() {
    if (window.innerWidth <= 1080) {
        console.log(true);
        watchContainer.setAttribute("style", `--widthOfVideo: ${window.innerWidth - 5}px`);
    } else {
        watchContainer.setAttribute("style", `--widthOfVideo: 1080px`)
    }
}