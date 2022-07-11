import { pathnameLoginPage } from "./constants.js";
const btnRegister = document.querySelector("#btnRegister");
const warning = document.querySelector(".warning");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var rePassword = document.getElementById("rePassword");
var listUser = localStorage.getItem('listUser');
if (listUser == null) {
    localStorage.setItem("listUser", JSON.stringify([]));
    listUser = localStorage.getItem('listUser');
}
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
