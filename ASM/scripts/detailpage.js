import { setCategory } from "./function.js";
import { filmsInMain, filmsTrend, topComment, topView } from "./data.js";
import { loadTopComment, loadTopView, loadFilmDetail, setOnClickForFilmTopCmt, setOnClickForFilmTopView, loadFilmCategory } from "./function.js";
const asideContainer = document.getElementById('aside');
const detailFilm = document.getElementById('articleDetailFilm');
const relativeFilm = document.getElementById('titleRelatedFilms');

const indexFilm = sessionStorage.getItem('indexFilm');
const typeOfData = sessionStorage.getItem('typeOfData');

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
    default:
        throw new Error('Invalid type of list');
}


