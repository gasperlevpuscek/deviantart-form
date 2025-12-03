document.addEventListener("DOMContentLoaded", () => {
    const usernameField = document.getElementById("username_field");
    const usernameError = document.querySelector(".username_error_div p");

    const month = document.getElementById("birth_month");
    const day = document.getElementById("birth_day");
    const year = document.getElementById("birth_year");
    const dateError = document.querySelector(".date_error_div p");

    const form = document.querySelector(".login_form");

    function setBorder(element, isError) {
        element.style.border = isError ? "1px solid red" : "1px solid #ccc";
    }

    form.addEventListener("submit", function (e) {
        let valid = true;

        // -----------------------------------
        // USERNAME VALIDATION
        // -----------------------------------
        const username = usernameField.value.trim();
        const usernameRegex = /^[A-Za-z0-9_]+$/;

        // Check length first
        if (username.length < 3) {
            usernameError.textContent = "Minimum length for a username is 3 characters.";
            usernameError.style.display = "block";
            setBorder(usernameField, true);
            valid = false;
        }
        // Check allowed characters
        else if (!usernameRegex.test(username)) {
            usernameError.textContent = "Your username must only contain letters & numbers.";
            usernameError.style.display = "block";
            setBorder(usernameField, true);
            valid = false;
        }
        else {
            usernameError.style.display = "none";
            setBorder(usernameField, false);
        }

        // -----------------------------------
        // DATE VALIDATION (Independent)
        // -----------------------------------
        const hasMonth = month.value !== "";
        const hasDay = day.value !== "";
        const hasYear = year.value !== "";

        // Reset borders
        setBorder(month, false);
        setBorder(day, false);
        setBorder(year, false);

        if (!hasMonth || !hasDay || !hasYear) {
            dateError.textContent = "Please enter your date of birth.";
            dateError.style.display = "block";

            if (!hasMonth) setBorder(month, true);
            if (!hasDay) setBorder(day, true);
            if (!hasYear) setBorder(year, true);

            valid = false;
        } else {
            const birthYear = parseInt(year.value);

            if (birthYear > 2012) {
                dateError.textContent = "You must be at least 13 years old to join DeviantArt.";
                dateError.style.display = "block";

                setBorder(month, true);
                setBorder(day, true);
                setBorder(year, true);

                valid = false;
            } else {
                dateError.style.display = "none";

                setBorder(month, false);
                setBorder(day, false);
                setBorder(year, false);
            }
        }

        // -----------------------------------
        // PREVENT SUBMISSION IF INVALID
        // -----------------------------------
        if (!valid) {
            e.preventDefault();
            return;
        }

        // -----------------------------------
        // ✔ SUCCESS — Show SweetAlert popup
        // -----------------------------------
        e.preventDefault(); // prevent form submission

        Swal.fire({
            title: "Sign in complete!",
            text: "You have successfully signed in!",
            icon: "success",
            confirmButtonColor: "#00e59b"
        }).then(() => {
            window.location.href = "../index.html";


        });
    });
});
