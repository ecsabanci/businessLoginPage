const backBtn = document.querySelector("#back-btn");

backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "index.html";
});