let signup = document.getElementById("signup");
let login = document.getElementById("login");

let btn_signup = document.getElementById("btn_signup");
let btn_login = document.getElementById("btn_login");

let text_titel = document.getElementById("text_titel");

btn_signup.addEventListener("click" , function() {
    login.style.display="none";
    signup.style.display="block";
    text_titel.innerText="Sign Up";
    btn_signup.classList.add('active');
    btn_login.classList.remove('active');

})

btn_login.addEventListener("click" , function() {
    login.style.display="block";
    signup.style.display="none";
    text_titel.innerText="Login";
    btn_login.classList.add('active');
    btn_signup.classList.remove('active');

})