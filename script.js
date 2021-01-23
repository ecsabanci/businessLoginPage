const password = document.getElementsByName("main-password");
const confirmPassword = document.getElementsByName("main-password-2");


const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("submit", (e) => {

    window.location.href = "./page-2.html";
        
});
