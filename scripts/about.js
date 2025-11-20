document.addEventListener("DOMContentLoaded", () => {

    const logo = document.getElementById("deviant_logo");

    logo.addEventListener("click", () => {
        Swal.fire({
            html: `
                <h1>DeviantArt Form Copy</h1>
                <b>Author:</b> Gašper Levpušček <br>
                <b>Class:</b> 4. Rb <br>
                <b>Project:</b> DeviantArt Form Copy`,
            imageUrl: "../images/deviantart-icon.svg",
            imageWidth: 80,
            imageHeight: 80,
            imageAlt: "Project Icon"
        });
    });

});
