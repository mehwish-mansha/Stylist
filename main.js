const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
    navLinks.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("active");
});



const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    const header = dropdown.querySelector(".dropdown-header");
    const submenu = dropdown.querySelector(".submenu");
    const icon = header.querySelector("i");

    header.addEventListener("click", () => {
        // Close all other dropdowns
        dropdowns.forEach(other => {
            if (other !== dropdown) {
                const otherMenu = other.querySelector(".submenu");
                const otherIcon = other.querySelector(".dropdown-header i");

                otherMenu.classList.remove("active");
                otherIcon.classList.remove("rotate");
            }
        });

        // Toggle the clicked dropdown
        submenu.classList.toggle("active");
        icon.classList.toggle("rotate");
    });
});


