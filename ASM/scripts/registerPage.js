import { pathnameLoginPage } from "./constants.js";
// nút đăng ký
const btnRegister = document.querySelector("#btnRegister");
// thẻ thông báo 
const warning = document.querySelector(".warning");
// input nhập họ và tên, email, password và nhập lại password
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var rePassword = document.getElementById("rePassword");

// List user được lưu trong localstorage sẽ được lấy ra và chuyển sang kiểu mảng (trước đó trong local storage là kiểu chuỗi)
var listUser = localStorage.getItem('listUser');
if (listUser == null) {
    localStorage.setItem("listUser", JSON.stringify([]));
    listUser = localStorage.getItem('listUser');
}
// bắt sự kiện click cho nút đăng ký nếu người dùng chưa nhập đủ thông tin, hay là nhập mật khẩu ở hai ô nhập không giống nhau thì sẽ
// được thông báo rằng "Password đã nhập không trùng với bên trên"
// Nếu nhập hoàn tất và đúng yêu cầu thì sau khi nhập xong website sẽ thông báo rằng
// "'Đăng ký thành công chuyển tới đăng nhập trong 4s nữa!" và sẽ tự động chuyển tới trang đăng nhập sau 4s
btnRegister.addEventListener("click", () => {
    if (email.value.length > 0 && firstName.value.length > 0 && lastName.value.length > 0 && password.value.length > 0 && rePassword.value.length > 0) {
        let tempFirstName = firstName.value;
        let tempLastName = lastName.value;
        let tempEmail = email.value;
        let tempPassword = password.value;
        var newUser;
        if (rePassword.value == password.value) {
            newUser = {
                email: tempEmail,
                firstName: tempFirstName,
                lastName: tempLastName,
                password: tempPassword
            }
        } else {
            warning.innerText = 'Password đã nhập không trùng với bên trên';
            warning.classList = "warning active";
            setTimeout(() => {
                warning.classList = "warning";
            }, 3000)
            return;
        }
        const parseList = JSON.parse(listUser);
        console.log(parseList);
        const newList = [...parseList, newUser];
        localStorage.setItem("listUser", JSON.stringify(newList));
        warning.innerText = 'Đăng ký thành công chuyển tới đăng nhập trong 4s nữa!';
        warning.style.backgroundColor = '#A0D995';
        warning.style.borderColor = "#6CC4A1";
        warning.classList = "warning active";
        setTimeout(() => {
            location.pathname = pathnameLoginPage;
        }, 4500);
    } else {
        warning.innerText = 'Phải điền đầy đủ thông tin trong form!';
        warning.classList = "warning active";
        setTimeout(() => {
            warning.classList = "warning";
        }, 3000)
    }
});
