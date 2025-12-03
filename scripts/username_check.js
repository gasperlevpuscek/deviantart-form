const form = document.querySelector(".login_form");
const usernameField = document.getElementById("username_field");
const usernameError = document.getElementById("username_error");

form.addEventListener("submit", function (event) {
    const username = usernameField.value.trim();

    if (username !== "user123") {
        event.preventDefault();
        usernameError.style.display = "block";
        usernameField.classList.add("input-error");
        usernameField.style.borderColor = "red";
    } else {
        usernameError.style.display = "none";
        usernameField.classList.remove("input-error");
        usernameField.style.borderColor = "";
    }
});
