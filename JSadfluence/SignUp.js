document.querySelectorAll(".choose-btn").forEach(button => {
    button.addEventListener("click", function() {
        document.querySelectorAll(".choose-btn").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sponsorBtn = document.getElementById("sponsorBtn1");
    const creatorBtn = document.getElementById("creatorBtn2");
    const joinBtn = document.getElementById("join-btn");

    // Default text
    joinBtn.textContent = "Create Account";

    sponsorBtn.addEventListener("click", function () {
        joinBtn.textContent = "Join as a Brand";
    });

    creatorBtn.addEventListener("click", function () {
        joinBtn.textContent = "Join as a Creator";
    });
});
