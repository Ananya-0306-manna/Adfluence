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


let selectedRole = ""; // To store the selected role

// Get buttons
const creatorButton = document.getElementById("creatorBtn2");
const brandButton = document.getElementById("sponsorBtn1");
const signUpButton = document.getElementById("join-btn");
const errorMessage = document.getElementById("errorMessage");

// Event Listeners for Creator & Brand buttons
creatorButton.addEventListener("click", function() {
    selectedRole = "creator";
    creatorButton.classList.add("active");
    brandButton.classList.remove("active");
});

brandButton.addEventListener("click", function() {
    selectedRole = "brand";
    brandButton.classList.add("active");
    creatorButton.classList.remove("active");
});

// Event Listener for Sign Up Button
signUpButton.addEventListener("click", function() {
    if (selectedRole === "creator") {
        window.location.href = "SignUpCreator.html";  // Redirect to Creator Signup
    } else if (selectedRole === "brand") {
        window.location.href = "SignUpBrand.html";  // Redirect to Brand Signup
    } else {
        errorMessage.textContent = "Please select Creator or Brand before signing up!";
    }
});
