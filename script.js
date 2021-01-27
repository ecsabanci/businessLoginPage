const password = document.getElementsByName("main-password");
const confirmPassword = document.getElementsByName("main-password-2");


const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("submit", (e) => {

    location.href = "./page-2.html";
        
});


const backBtn = document.querySelector("#back-btn");

const confirmBtn = document.querySelector("#confirm-btn");

backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "./index.html";
});


confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "./page-3.html";
})