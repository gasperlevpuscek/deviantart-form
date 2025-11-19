const form = document.querySelector(".login_form");
const passwordField = document.getElementById("password");
const errorText = document.querySelector(".password_error");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload

    const password = passwordField.value.trim();

    // If empty password (or wrong password in your future backend)
    if (password === "") {
        // Show error text
        errorText.style.display = "block";
        // Add red border to password field
        passwordField.style.border = "1px solid red";
        return;
    }

    // If password is filled → hide error & let it continue
    errorText.style.display = "none";
    passwordField.style.border = "";

    // Show success pop-up
    Swal.fire({
        title: "Login complete",
        text: "Welcome back!",
        icon: "success",
        confirmButtonText: "OK"
    }).then(() => {
        form.submit(); // manually submit if needed
    });
});
