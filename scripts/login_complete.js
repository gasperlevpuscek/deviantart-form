const form = document.querySelector(".login_form");
const passwordField = document.getElementById("password");
const errorText = document.querySelector(".password_error");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload

    const password = passwordField.value.trim();

    // Allow ONLY "password132"
    if (password !== "password123") {
        errorText.style.display = "block";
        passwordField.style.border = "1px solid red";
        return; // stop the login process
    }

    // If correct password → hide error
    errorText.style.display = "none";
    passwordField.style.border = "";

    // Success popup
    Swal.fire({
        title: "Login complete",
        text: "Welcome back!",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#00e59b"
    }).then(() => {
        form.submit(); // continue to next page
    });
});
