const emailInput = document.getElementById("email");
const emailError = document.querySelector(".email_error_div p");

/* Simple email regex */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailInput.addEventListener("input", () => {
    if (emailRegex.test(emailInput.value)) {
        emailError.style.display = "none";
        emailInput.style.borderColor = "#ccc";
    } else {
        emailError.style.display = "block";
        emailInput.style.borderColor = "red";
    }
});


/* ---------------- PASSWORD VALIDATION ---------------- */
const passwordInput = document.getElementById("password_input");
const passwordError = document.querySelector(".password_error_div p");
const strengthSpan = document.getElementById("password-strength");

passwordInput.addEventListener("input", () => {
    const value = passwordInput.value;

    let strength = "WEAK";
    let color = "red";

    const hasLetters = /[A-Za-z]/.test(value);
    const hasNumbers = /[0-9]/.test(value);
    const hasSymbols = /[!@#$%^&*()_+\-={}:;"'<>,.?/]/.test(value);

    // Determine strength
    if (value.length >= 6 && hasLetters && hasNumbers && hasSymbols) {
        strength = "STRONG";
        color = "#00c853"; // green
    }
    else if (value.length >= 6 && hasLetters && hasNumbers) {
        strength = "NORMAL";
        color = "#ff9800"; // orange
    }
    else {
        strength = "WEAK";
        color = "red";
    }

    // Update text
    strengthSpan.textContent = strength;
    strengthSpan.style.color = color;

    // Update border color of the input field
    passwordInput.style.borderColor = color;

    // Show error only if empty
    if (value.length === 0) {
        passwordError.style.display = "block";
        strengthSpan.textContent = "";
        passwordInput.style.borderColor = "red"; // error color
    } else {
        passwordError.style.display = "none";
    }
});


/* ---------------- FORM VALIDATION BEFORE SUBMIT ---------------- */

const form = document.querySelector(".login_form");

form.addEventListener("submit", (event) => {
    let valid = true;

    // Email check
    if (!emailRegex.test(emailInput.value)) {
        emailError.style.display = "block";
        emailInput.style.borderColor = "red";
        valid = false;
    }

    // Password check
    const pw = passwordInput.value;
    const hasLetters = /[A-Za-z]/.test(pw);
    const hasNumbers = /[0-9]/.test(pw);

    if (!(pw.length >= 6 && hasLetters && hasNumbers)) {
        passwordError.style.display = "block";
        passwordInput.style.borderColor = "red";
        valid = false;
    }

    // Prevent submit if not valid
    if (!valid) {
        event.preventDefault();
    }
});