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