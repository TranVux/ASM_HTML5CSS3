import { filmsTrend } from "./data.js";
import { loadFilm, loadFilmCategory, setCategory, changeUserContainer } from "./function.js";
const container = document.getElementById('filmCategoryContainer');
const trendContainer = document.getElementById('filmTrendCategory');
const category = sessionStorage.getItem('category');
const pageNumber = document.querySelector('.page');
const arrItemCategory = document.querySelectorAll(".item-category");
const userContainer = document.querySelector(".usercontainer");
var indexUser = localStorage.getItem("indexCurrentUser");
var btnLogout;
setCategory(arrItemCategory);
loadFilmCategory(container, category);
if (container.childElementCount == 0) {
    pageNumber.innerHTML = '';
    const img = document.createElement('img');
    const text = document.createElement('p');
    const containerAlert = document.createElement('div');
    container.style.gridTemplateColumns = "1fr";
    containerAlert.className = 'alert-container';
    text.innerText = 'Website hiện chưa cập nhật phim của thể loại ' + category + '. Xin lỗi bạn vì sự bất tiện này.'
    text.classList = 'empty-text';
    img.src = 'assets/images/cartoon-owls-sad.png';
    img.classList = 'empty-img';
    containerAlert.appendChild(text);
    containerAlert.appendChild(img);
    container.appendChild(containerAlert);
}
if (container.childElementCount < 6) {
    pageNumber.innerHTML = '';
}
loadFilm(trendContainer, filmsTrend, 'trend', 'trend');


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
