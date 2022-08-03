import { changeUserContainer, loadFlmBookmark } from "./function.js";
import { pathnameLoginPage, pathNameUserPage } from "./constants.js";

const userContainer = document.querySelector(".usercontainer");
const userMobileContainer = document.querySelector("#useMobileContainer");
const btnLogoutMobile = document.querySelector("#bntLogoutMobile");
const filmBookmarkContainer = document.getElementById("filmBookmarkContainer");
const email = document.getElementById("email");
const fullname = document.getElementById("fullname");
var indexUser = localStorage.getItem("indexCurrentUser");
const listUser = localStorage.getItem("listUser");
var btnLogTowWayInfo = document.getElementById("btnLogTowWayInfo");
var btnLogout;

changeUserContainer(userContainer, userMobileContainer, indexUser);


if (indexUser != -1) {
    filmBookmarkContainer.style.whiteSpace = "nowrap";
    loadFlmBookmark(filmBookmarkContainer);
    setInfo();
    btnLogout = document.getElementById("btnLogout");
    btnLogTowWayInfo.innerText = "Đăng Xuất";
    btnLogTowWayInfo.addEventListener("click", logout);
    btnLogout.addEventListener("click", logout);
} else {
    btnLogTowWayInfo.innerText = "Đăng nhập";
    btnLogTowWayInfo.addEventListener("click", handleGoToLoginPage);
    notify(filmBookmarkContainer);
}


function setInfo() {
    fullname.value = JSON.parse(listUser)[indexUser].lastName + " " + JSON.parse(listUser)[indexUser].firstName;
    console.log(JSON.parse(listUser)[indexUser].lastName + " " + JSON.parse(listUser)[indexUser].firstName);
    email.value = JSON.parse(listUser)[indexUser].email;
    console.log(JSON.parse(listUser)[indexUser].email);
}

var btnNext = document.getElementById("btnNext");
var btnPrevious = document.getElementById("btnPrevious");

if (filmBookmarkContainer.childElementCount <= 3) {
    btnNext.style.display = 'none';
    btnPrevious.style.display = 'none';
}

btnNext.addEventListener('click', () => {
    filmBookmarkContainer.scrollLeft += 195;
})

btnPrevious.addEventListener('click', () => {
    filmBookmarkContainer.scrollLeft -= 195;
})

btnLogoutMobile.addEventListener("click", logout);

function logout() {
    console.log('logout successfully!');
    localStorage.setItem("indexCurrentUser", -1);
    indexUser = localStorage.getItem("indexCurrentUser");
    changeUserContainer(userContainer, userMobileContainer, indexUser);
    btnLogTowWayInfo.innerText = "Đăng nhập";
    btnLogTowWayInfo.addEventListener("click", handleGoToLoginPage);
    fullname.value = '';
    email.value = '';
    filmBookmarkContainer.innerHTML = '';
    filmBookmarkContainer.style.whiteSpace = "normal";
    notify(filmBookmarkContainer);
}

function handleGoToLoginPage() {
    location.pathname = pathnameLoginPage;
}

function notify(container) {
    const img = document.createElement('img');
    const text = document.createElement('p');
    const containerAlert = document.createElement('div');
    containerAlert.className = 'alert-container';
    text.innerText = 'Đăng nhập thì sẽ xuất hiện những phim đã lưu nha!'
    text.classList = 'empty-text';
    img.src = 'assets/images/cartoon-owls-sad.png';
    img.classList = 'empty-img';
    containerAlert.appendChild(text);
    containerAlert.appendChild(img);
    container.appendChild(containerAlert);
}
userMobileContainer.addEventListener("click", () => {
    location.pathname = pathNameUserPage;
});