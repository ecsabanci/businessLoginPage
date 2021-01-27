const backBtn = document.querySelector("#back-btn");

backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "./page-2.html";
});
