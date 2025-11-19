const form = document.querySelector("form");
const usernameField = document.getElementById("username_field");
const usernameError = document.getElementById("username_error");

// Username regex (letters, numbers, underscore, dash, 3+ chars)
const usernameRegex = /^[a-zA-Z0-9_-]{3,}$/;

form.addEventListener("submit", function (event) {
    const username = usernameField.value.trim();

    if (!usernameRegex.test(username)) {
        event.preventDefault(); // Stop form from going to next page
        usernameError.style.display = "block";
        usernameField.classList.add("input-error");
        usernameField.style.borderColor = "red";
    } else {
        usernameError.style.display = "none";
        usernameField.classList.remove("input-error");
    }
});
