import { arrBackground, filmsInMain, showTimes, topComment, topView } from "./data.js";
import { pathNameDetailPage, pathnameIndexPage, pathNameWatchPage } from "./constants.js";

export function loadTopView(container) {
    container.innerHTML += `
        <div class="film-top-header" id="filmTopViewHeader">Top phim nhiều lượt xem</div>
    `;
    topView.map((film) => {
        var temp;
        if (film.top1) {
            temp = `
            <div class="film-top1-container top1view">
                <img src="${film.thumbnail}" alt="" class="film-top1-image">
                <span class="film-top1-name">
                    ${film.filmName}
                    <button class="watch-btn btn">Xem ngay</button>
                </span>
                <div class="film-view">
                    <i class="fas fa-eye"></i> ${film.view}
                </div>
            </div>
            <div class="film-top-container topview mobile-respon">
                <img src="${film.thumbnail}" alt=""
                    class="film-top-img">
                <div class="film-top-title">
                    <span class="name">${film.filmName}
                        <span class="sub"><br>${film.subTitle}</span>
                    </span>
                    <span class="view">${film.view} lượt xem</span>
                </div>
            </div>
            `
        } else {
            temp = `
            <div class="film-top-container topview">
                <img src="${film.thumbnail}" alt="" class="film-top-img">
                <div class="film-top-title">
                    <span class="name">${film.filmName}
                        <span class="sub"><br> ${film.subTitle}</span>
                    </span>
                    <span class="view">${film.view} lượt xem</span>
                </div>
            </div>
            `
        }
        container.innerHTML += temp;
    });
}

export function loadTopComment(container) {
    container.innerHTML += `
        <div class="film-top-comment-header film-top-header" id="filmTopViewHeader">Top phim nhiều bình luận</div>
    `;
    topComment.map(film => {
        var temp;
        if (film.top1) {
            temp = `
            <div class="film-top1-container top1cmt">
                <img src="${film.thumbnail}" alt="" class="film-top1-image">
                <span class="film-top1-name">
                    ${film.filmName} <br>
                    <button class="watch-btn btn">Xem ngay</button>
                </span>
                <div class="film-cmt">
                    <i class="far fa-comment"></i> ${film.comment}
                </div>
            </div>
            <div class="film-top-container topcmt mobile-respon">
                <img src="${film.thumbnail}" alt="" class="film-top-img">
                <div class="film-top-title">
                    <span class="name">${film.filmName}
                        <span class="sub"><br>${film.subTitle}</span>
                    </span>
                    <span class="view">${film.comment} lượt bình luận</span>
                </div>
            </div>
            `
        } else {
            temp = `
            <div class="film-top-container topcmt">
                <img src="${film.thumbnail}" alt="" class="film-top-img">
                <div class="film-top-title">
                    <span class="name">${film.filmName}
                        <span class="sub"><br>${film.subTitle}</span>
                    </span>
                    <span class="view">${film.comment} lượt bình luận</span>
                </div>
            </div>
        `
        }
        container.innerHTML += temp;
    });
}

export function setOnClickForFilmTopCmt() {
    const filmTop1Cmt = document.querySelector('.top1cmt');
    const filmTopCmt = document.querySelectorAll('.topcmt');
    filmTop1Cmt.addEventListener("click", () => {
        sessionStorage.setItem('indexFilm', 0);
        sessionStorage.setItem('typeOfData', 'topCmt');
        location.pathname = pathNameDetailPage;
    });
    filmTopCmt.forEach((element, index) => {
        element.addEventListener("click", () => {
            sessionStorage.setItem('indexFilm', index);
            sessionStorage.setItem('typeOfData', 'topCmt');
            location.pathname = pathNameDetailPage;
            console.log(2);
        });
    });
}

export function setOnClickForFilmTopView() {
    const filmTop1View = document.querySelector('.top1view');
    const filmTopView = document.querySelectorAll('.topview');
    filmTop1View.addEventListener("click", () => {
        sessionStorage.setItem('indexFilm', 0);
        sessionStorage.setItem('typeOfData', 'topView');
        location.pathname = pathNameDetailPage;

    });
    filmTopView.forEach((elementFilm, index) => {
        elementFilm.addEventListener("click", () => {
            sessionStorage.setItem('indexFilm', index);
            sessionStorage.setItem('typeOfData', 'topView');
            location.pathname = pathNameDetailPage;
        });
    });
}

export function loadFilmDetail(mainContainer, beforeElement, { thumbnail, filmName, subTitle, urlVideo, desc, bookmark, episode, backgroundImg, type, slugs }) {
    if (localStorage.currentSlug != null) {
        localStorage.setItem("currentSlug", slugs[0]);
        console.log(slugs);
    }
    var filmElement = document.createElement('div');
    var temp = `
        <div class="film-detail">
            <div class="film-title-pr">
                <div class="film-detail-bookmark">
                    <i class="${bookmark ? 'fas' : 'far'} fa-bookmark bookmark-icon-detail"></i>
                </div>
                <div class="title-pr">
                    <div class="name-film-pr">
                        ${filmName}
                    </div>
                    <div class="film-category__epsoide">
                        <p class="film-epsoide-pr">${episode}</p>
                        <div class="film-category-pr">${type}</div>
                    </div>
                </div>
            </div>
            <div class="film-img-pr" style="background-image: url('${backgroundImg}');" >
                <div class="thumbnail">
                    <img src="${thumbnail}"
                        alt="" class="thumbnail-film">
                </div>
                <div class="dec">
                    <p class="title-dec">Nội dung phim</p>
                    <a href="">
                        <p class="name-film-dec">${filmName}</p>
                    </a>
                    <p class="article-dec">${desc}</p>
                    <button class="trailer"><a target="_blank" rel="noopener noreferre"
                            href="${urlVideo}">Xem trailer</a></button>
                    <button class="choice-epsoide" id="watchFilm">Xem phim</button>
                </div>
            </div>
            <div class="comment-field">
                <div class="fb-comments" data-href="https://tranvux.github.io/AVFilm-demo/film-detail.html"
                    data-width="100%" data-numposts="10">
                </div>
            </div>
        </div>
    `;
    filmElement.innerHTML += temp;
    mainContainer.insertBefore(filmElement, beforeElement);
}

export function loadFilmWatchDetail(mainContainer, beforeElement, { filmName, bookmark, episode, type, slugs }) {
    if (localStorage.currentSlug == null) {
        localStorage.setItem("currentSlug", slugs[0]);
    }
    var filmElement = document.createElement('div');
    var temp = `
        <div class="film-detail">
            <div class="film-title-pr">
                <div class="film-detail-bookmark">
                    <i class="${bookmark ? 'fas' : 'far'} fa-bookmark bookmark-icon-detail"></i>
                </div>
                <div class="title-pr">
                    <div class="name-film-pr">
                        ${filmName}
                    </div>
                    <div class="film-category__epsoide">
                        <p class="film-epsoide-pr">${episode}</p>
                        <div class="film-category-pr">${type}</div>
                    </div>
                </div>
            </div>
            <div class="choice_episode_field">
                <div class="choice_episode-title">Chọn tập: </div>
                <div id="episode-container">
                </div>
            </div>
            <div class="comment-field">
                <div class="fb-comments"
                    data-href="https://tranvux.github.io/AVFilm-demo/film-detail.html" data-width="100%"
                    data-numposts="10">
                </div>
            </div>
        </div>
    `;
    filmElement.innerHTML += temp;
    mainContainer.insertBefore(filmElement, beforeElement);
    // here is fill amount of episodes into the container
    let episodeContainer = document.querySelector("#episode-container");
    slugs.map((slug, index) => {
        episodeContainer.innerHTML += `<div class="a-episode" data-slug="${slug}">${index + 1}</div>`
    });
    // here set the event onClick for an episode container
    let episodeArr = document.querySelectorAll(".a-episode");
    if (episodeArr != null) {
        episodeArr.forEach(episode => {
            episode.addEventListener("click", () => {
                setCurrentSlugVideo(episode.getAttribute("data-slug"));
            });
        })
    }
}

export function setCurrentSlugVideo(slug) {
    localStorage.setItem("currentSlug", slug);
    location.pathname = pathNameWatchPage;
}

export function loadVideoFilm(container, currentSlug) {
    if (currentSlug === undefined) {
        var temp = `Hiện website chưa cập nhật bộ phim này. Xin lỗi bạn vì sự bất tiện`;
        container.innerHTML += temp;
    } else {
        container.innerHTML = `
        <iframe width="1080" height="607.5" src="https://short.ink/${currentSlug}" frameborder="0" scrolling="0"
        allowfullscreen></iframe>
        `;
    }
}
export function loadFilm(container, listFilm, typeOfData, className) {
    listFilm.map((film) => {
        var temp = `
            <div class="film-container ${className}">
                <div class="film-view">
                    <i class="fas fa-eye"></i> ${film.view}
                </div>
                <div class="film-bookmark" id="film-bookmark">
                    <i class=" ${film.bookmark ? 'fas' : 'far'} fa-bookmark bookmark-icon"></i>
                </div>
                <img src="${film.thumbnail}"
                    alt="" class="film-img">
                <div class="film-title">
                    <p class="main-title">${film.filmName}</p>
                    <p class="sub">${film.subTitle}</p>
                </div>
                <div class="mask">
                    <i class="far fa-play-circle"></i>
                    <p class="info">Mô tả</p>
                    <p class="episode">${film.episode}</p>
                </div>
            </div>`
        container.innerHTML += temp;
    });
    const aFilmContainer = document.querySelectorAll(`.film-container.${className}`);
    aFilmContainer.forEach((element, index) => {
        element.addEventListener("click", () => {
            sessionStorage.setItem('indexFilm', index);
            sessionStorage.setItem('typeOfData', typeOfData);
            location.pathname = pathNameDetailPage;
        })
    });
}

export function loadFilmCategory(container, category) {
    const filmCateforyHeader = document.getElementById('filmCategoryHeader');
    filmCateforyHeader.innerText = sessionStorage.getItem('category');
    var arrIndex = [];
    filmsInMain.map((film, index) => {
        var temp;
        if (film.type.includes(category)) {
            temp = `
            <div class="film-container">
                <div class="film-view">
                    <i class="fas fa-eye"></i> ${film.view}
                </div>
                <div class="film-bookmark" id="film-bookmark">
                    <i class=" ${film.bookmark ? 'fas' : 'far'} fa-bookmark bookmark-icon"></i>
                </div>
                <img src="${film.thumbnail}"
                    alt="" class="film-img">
                <div class="film-title">
                    <p class="main-title">${film.filmName}</p>
                    <p class="sub">${film.subTitle}</p>
                </div>
                <div class="mask">
                    <i class="far fa-play-circle"></i>
                    <p class="info">Mô tả</p>
                    <p class="episode">${film.episode}</p>
                </div>
            </div>`
            container.innerHTML += temp;
            arrIndex.push(index);
        }
    });
    const aFilmContainer = document.querySelectorAll('.film-container');
    aFilmContainer.forEach((element, index) => {
        element.addEventListener("click", () => {
            sessionStorage.setItem('indexFilm', arrIndex[index]);
            sessionStorage.setItem('typeOfData', 'detail')
            location.pathname = pathNameDetailPage;
        })
    });
}

export function setCategory(arrItemCategory) {
    arrItemCategory.forEach(item => {
        item.addEventListener('click', () => {
            sessionStorage.setItem('category', item.innerText);
        });
    });
}

export function loadFilmShowTime(container) {
    showTimes.map((film, index) => {
        var temp = `
        <div class="film-container" name="${index}">
            <div class="film-epsoide">Tập ${film.newEpisode}</div>
            <div class="film-view">
                <i class="fas fa-eye"></i> ${film.view}
            </div>
            <div class="film-bookmark" id="film-bookmark">
            <i class=" ${film.bookmark ? 'fas' : 'far'} fa-bookmark bookmark-icon"></i>
        </div>
            <img src="${film.thumbnail}" alt="" class="film-img">
            <div class="film-title">
                <p class="main-title">${film.filmName}</p>
                <p class="sub">${film.subTitle}</p>
            </div>
            <div class="mask">
                <i class="far fa-play-circle"></i>
                <p class="info">Mô tả</p>
                <p class="episode">${film.episode}</p>
            </div>
        </div>
        `;
        switch (film.date) {
            case 'monday':
                container[0].innerHTML += temp;
                break;
            case 'tuesday':
                container[1].innerHTML += temp;
                break;
            case 'wednesday':
                container[2].innerHTML += temp;
                break;
            case 'thursday':
                container[3].innerHTML += temp;
                break;
            case 'friday':
                container[4].innerHTML += temp;
                break;
            case 'saturday':
                container[5].innerHTML += temp;
                break;
            case 'sunday':
                container[6].innerHTML += temp;
                break;
            default:
                throw new Error('Invalid date of showtimes');
        }
    });
}

export function setOnClickForFilmShowTime() {
    const arrFilmShowTime = document.querySelectorAll(".film-container");
    arrFilmShowTime.forEach(film => {
        film.addEventListener('click', () => {
            const indexFilm = film.getAttribute("name");
            sessionStorage.setItem('indexFilm', indexFilm);
            sessionStorage.setItem('typeOfData', 'showtime')
            location.pathname = pathNameDetailPage;
        });
    })
}

export function changeUserContainer(userContainer, mobileUserContainer, indexUser) {
    userContainer.innerHTML = '';
    mobileUserContainer.innerHTML = "";
    if (indexUser != -1) {
        var currentUser = JSON.parse(localStorage.getItem("listUser"))[indexUser];
        var userName = currentUser.firstName;
        userContainer.innerHTML += `
            <img src="assets/images/avt.jpg" alt="" class="user-img">
            <span class="user-name">${userName}</span>
            <ul class="user-list">
                <li class="list-item">
                    <a href="#"><i class="fas fa-user item-icon"></i></a>
                    <a href="user.html">Quản lý tài khoản</a>
                </li>
                <li class="list-item">
                    <a href="#"><i class="fas fa-bookmark item-icon"></i></a>
                    <a href="#">Phim đã lưu</a>
                </li>
                <li class="list-item">
                    <a href="#"><i class="fas fa-sign-out-alt item-icon"></i></a>
                    <a href="#" id="btnLogout">Đăng xuất</a>
                </li>
            </ul>
        `;
        mobileUserContainer.innerHTML += `
            <img src="assets/images/avt.jpg" alt="" class="avt">
            <div class="user-name-mobile">${userName}</div>
        `
    } else {
        userContainer.innerHTML += `
            <span class="user-name none-login">Tài khoản</span>
            <ul class="user-list list-none-login">
                <li class="list-item">
                    <a href="login.html"><i class="fas fa-sign-in-alt item-icon"></i></a>
                    <a href="login.html">Đăng nhập</a>
                </li>
                <li class="list-item">
                    <a href="register.html"><i class="fas fa-user-plus item-icon"></i></a>
                    <a href="register.html">Đăng ký</a>
                </li>
            </ul>
        `;
        mobileUserContainer.innerHTML += `
        <div class="user-name-mobile" id="btnUser">Tài khoản</div>
        `;
    }
}

export function loadFlmBookmark(container) {
    var count = 0;
    filmsInMain.map(film => {
        var temp;
        if (film.bookmark) {
            var temp = `
            <div class="film-container">
                <div class="film-view">
                    <i class="fas fa-eye"></i> ${film.view}
                </div>
                <div class="film-bookmark" id="film-bookmark">
                    <i class=" ${film.bookmark ? 'fas' : 'far'} fa-bookmark bookmark-icon"></i>
                </div>
                <img src="${film.thumbnail}"
                    alt="" class="film-img">
                <div class="film-title">
                    <p class="main-title">${film.filmName}</p>
                    <p class="sub">${film.subTitle}</p>
                </div>
                <div class="mask">
                    <i class="far fa-play-circle"></i>
                    <p class="info">Mô tả</p>
                    <p class="episode">${film.episode}</p>
                </div>
            </div>`
            container.innerHTML += temp;
            count++;
        }
    });
    const aFilmContainer = document.querySelectorAll(`.film-container`);
    aFilmContainer.forEach((element, index) => {
        element.addEventListener("click", () => {
            sessionStorage.setItem('indexFilm', index);
            sessionStorage.setItem('typeOfData', 'detail');
            location.pathname = pathNameDetailPage;
        })
    });
}

export function slideHeaderCenter(headerCenter, filmNameHeaderCenter, filmSubHeaderCenter, btnHeaderCenter) {
    var arrImage = [];
    for (let i = 0; i < arrBackground.length; i++) {
        let img = new Image();
        img.src = arrBackground[i].filmBackgroud;
        arrImage.push(img);
    }
    var index = 0;
    setInterval(() => {
        if (index >= arrImage.length) {
            index = 0;
        }
        headerCenter.style.backgroundImage = `url(${arrImage[index].src})`;
        filmNameHeaderCenter.innerHTML = arrBackground[index].filmName;
        filmSubHeaderCenter.innerHTML = arrBackground[index].filmSub;
        btnHeaderCenter.setAttribute("data-indexfilm", arrBackground[index].indexInMain);
        index++;
    }, 5000);
}

export function searchFilm(keyWord) {
    const aFilmContainer = document.querySelectorAll(`.film-container`);
    const arrFilmName = document.querySelectorAll(".film-title");
    aFilmContainer.forEach((element) => {
        element.style.display = "block";
    });
    arrFilmName.forEach((element, index) => {
        if (!(element.innerText.includes(keyWord))) {
            aFilmContainer[index].style.display = "none";
        }
    });
}
