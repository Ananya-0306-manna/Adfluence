document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let errorMessage = document.getElementById("errorMessage");
    let passwordMismatch = document.getElementById("passwordMismatch");
    // Basic Validation
    if (fullName === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
        errorMessage.textContent = "Please fill in all required fields.";
        return;
    }

    // Email Validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        errorMessage.textContent = "Enter a valid email address.";
        return;
    }

    // Password Match Check
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return;
    } else {
        passwordMismatch.textContent = ""; // Clear error message when matches
    }

    // Success - Redirect or Submit Form
    errorMessage.textContent = ""; // Clear error message
    alert("Sign-Up Successful!"); // Temporary Success Alert
    document.getElementById("signupForm").reset(); // Clear Form
});

//live password check
function checkPasswordMatch() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let passwordMismatch = document.getElementById("passwordMismatch");

    if (password !== confirmPassword) {
        passwordMismatch.textContent = "Passwords do not match.";
    } else {
        passwordMismatch.textContent = ""; // Clear message
    }
}

function togglePassword(inputId, iconId) {
    let passwordInput = document.getElementById(inputId);
    let eyeIcon = document.getElementById(iconId);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let passwordRequirements = document.getElementById("passwordRequirements");

    if (password.length < 8) {
        passwordRequirements.textContent = "Password must be at least 8 characters.";
        passwordRequirements.style.display = "block"; // Show the warning message
    } else {
        passwordRequirements.textContent = ""; // Clear error message
        passwordRequirements.style.display = "none"; // Hide message
    }
}

