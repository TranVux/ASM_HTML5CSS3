const btnLogin = document.querySelector("#btnLogin");
const warning = document.querySelector(".warning");
const pathnameIndexPage = '/ASM_HTML5CSS3/ASM/index.html'
// const pathnameIndexPage = '/ASM/index.html'
var indexUser;
var loginSuccess = false;
var listUser = localStorage.getItem("listUser");
if (listUser == null) {
    localStorage.setItem("listUser", JSON.stringify([]));
    listUser = localStorage.getItem("listUser");
}
var email = document.getElementById("email");
var password = document.getElementById("password");
btnLogin.addEventListener("click", () => {
    if (email.value.length > 0 && password.value.length > 0) {
        console.log(JSON.parse(listUser));
        let tempEmail = email.value;
        let tempPassword = password.value;
        JSON.parse(listUser).map((user, index) => {
            console.log(user.email, user.password);
            if (user.email == tempEmail && user.password == tempPassword) {
                console.log('đúng');
                loginSuccess = true;
                localStorage.setItem('indexCurrentUser', index);
                warning.innerText = 'Đăng nhập thành công!. Sẽ chuyển tới trang chính trong 4s';
                console.log(warning.innerText);
                warning.style.backgroundColor = '#A0D995';
                warning.style.borderColor = "#6CC4A1";
                warning.classList = "warning active";
                setTimeout(() => {
                    location.pathname = pathnameIndexPage;
                    return;
                }, 4500);
            }
        })
        if (!loginSuccess) {
            console.log('sai');
            warning.innerText = 'Email hoặc Password chưa đúng!'
            warning.classList = "warning active";
            setTimeout(() => {
                warning.classList = "warning";
            }, 3500);
        }
    } else {
        warning.classList = "warning active";
        setTimeout(() => {
            warning.classList = "warning";
        }, 3500);
        return;
    }
});