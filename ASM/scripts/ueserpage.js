import { changeUserContainer, loadFlmBookmark } from "./function.js";
const pathnameLoginPage = '/ASM_HTML5CSS3/ASM/login.html'
// const pathnameIndexPage = '/ASM/login.html'
const userContainer = document.querySelector(".usercontainer");
const filmBookmarkContainer = document.getElementById("filmBookmarkContainer");
const email = document.getElementById("email");
const fullname = document.getElementById("fullname");
var indexUser = localStorage.getItem("indexCurrentUser");
const listUser = localStorage.getItem("listUser");
var btnLogTowWayInfo = document.getElementById("btnLogTowWayInfo");
var btnLogout;

changeUserContainer(userContainer, indexUser);
if (indexUser != -1) {
    setInfo();
    btnLogout = document.getElementById("btnLogout");
    btnLogTowWayInfo.innerText = "Đăng Xuất";
    btnLogTowWayInfo.addEventListener("click", logout);
    btnLogout.addEventListener("click", logout);
} else {
    btnLogTowWayInfo.innerText = "Đăng nhập";
    btnLogTowWayInfo.addEventListener("click", handleGoToLoginPage)
}

loadFlmBookmark(filmBookmarkContainer);

function setInfo() {
    fullname.value = JSON.parse(listUser)[indexUser].lastName + " " + JSON.parse(listUser)[indexUser].firstName;
    console.log(JSON.parse(listUser)[indexUser].lastName + " " + JSON.parse(listUser)[indexUser].firstName);
    email.value = JSON.parse(listUser)[indexUser].email;
    console.log(JSON.parse(listUser)[indexUser].email);
}

var btnNext = document.getElementById("btnNext");
var btnPrevious = document.getElementById("btnPrevious");

btnNext.addEventListener('click', () => {
    filmBookmarkContainer.scrollLeft += 195;
})

btnPrevious.addEventListener('click', () => {
    filmBookmarkContainer.scrollLeft -= 195;
})

function logout() {
    console.log('logout successfully!');
    localStorage.setItem("indexCurrentUser", -1);
    indexUser = localStorage.getItem("indexCurrentUser");
    changeUserContainer(userContainer, indexUser);
    btnLogTowWayInfo.innerText = "Đăng nhập";
    btnLogTowWayInfo.addEventListener("click", handleGoToLoginPage);
    fullname.value = '';
    email.value = '';
}

function handleGoToLoginPage() {
    location.pathname = pathnameLoginPage;
}