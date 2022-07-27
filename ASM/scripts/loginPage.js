import { pathnameIndexPage } from "./constants.js";
// Nút login trong form
const btnLogin = document.querySelector("#btnLogin");
// Thẻ thông báo trong form
const warning = document.querySelector(".warning");
var indexUser;
// biến giúp ghi nhận trang thái đăng nhập của user
var loginSuccess = false;
// Lấy list user được lưu trữ trong LocalStorage
var listUser = localStorage.getItem("listUser");
if (listUser == null) {
    localStorage.setItem("listUser", JSON.stringify([]));
    listUser = localStorage.getItem("listUser");
}
// Thẻ input nhập email trong form
var email = document.getElementById("email");
// Thẻ input nhập password trong form
var password = document.getElementById("password");
// Bắt sự kiện cho nút login. Nếu khi bấm vào nút bấm mà người dùng vẫn chưa nhập thông tin đầy đủ cũng như nhập thông tin
// tài khoản mật khẩu sai thì sẽ không được chấp nhận và đưa ra thông báo "Email hoặc password chưa đúng"
// Nếu người dùng nhập đúng tài khoản và mật khẩu thì chuyển tới trang chủ sau 4s và đưa ra thông báo "Đăng nhập thành công!. Sẽ chuyển tới trang chính trong 4s"
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