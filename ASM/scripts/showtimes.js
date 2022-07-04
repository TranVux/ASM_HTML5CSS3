import { loadFilmShowTime, setCategory } from "./function.js";
const arrItemCategory = document.querySelectorAll(".item-category");
const arrContainer = document.querySelectorAll(".film-category-container");

setCategory(arrItemCategory);
loadFilmShowTime(arrContainer);
