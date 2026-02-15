// Navbar Scroll Affect
$("#nav-container").load("/nav.html", function () {

    $(window).on("scroll", function () {

        let scroll = $(this).scrollTop();
        let maxScroll = 400;

        let alpha = 1 - (scroll / maxScroll) * 0.4;
        alpha = Math.max(alpha, 0.9);

        $(".nav-container").css("background-color",
            "rgba(255,255,255," + alpha + ")"
        );

    });

});



// ================= Navbar & Sidebar =================
function initNavbar() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const closeBtn = document.getElementById("closeBtn");

    if (!hamburger || !navLinks || !closeBtn) return;

    hamburger.addEventListener("click", () => {
        navLinks.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener("click", () => {
        navLinks.classList.remove("active");
        document.body.style.overflow = "";
    });

    document.addEventListener("click", (event) => {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove("active");
            document.body.style.overflow = "";
        }
    });

    // Dropdowns (only one open at a time)
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(dropdown => {
        const header = dropdown.querySelector(".dropdown-header");
        const submenu = dropdown.querySelector(".submenu");
        const icon = header.querySelector("i");

        header.addEventListener("click", () => {
            dropdowns.forEach(other => {
                if (other !== dropdown) {
                    other.querySelector(".submenu").classList.remove("active");
                    other.querySelector(".dropdown-header i").classList.remove("rotate");
                }
            });
            submenu.classList.toggle("active");
            icon.classList.toggle("rotate");
        });
    });
}

// ================= Collection Slider =================
$(document).ready(function () {
    const $slider = $(".collection-grid");
    const $cards = $(".collection-item");
    const $next = $(".next-btn");
    const $prev = $(".prev-btn");
    let visibleCards = $(window).width() < 992 ? 2 : 4;
    let currentIndex = 0;

    function getCardWidth() {
        return $cards.outerWidth(true);
    }

    function maxIndex() {
        return Math.max(0, $cards.length - visibleCards);
    }

    $next.on("click", function () {
        if (currentIndex < maxIndex()) {
            currentIndex++;
            $slider.css("transform", `translateX(-${getCardWidth() * currentIndex}px)`);
        }
    });

    $prev.on("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            $slider.css("transform", `translateX(-${getCardWidth() * currentIndex}px)`);
        }
    });

    $(window).on("resize", function () {
        visibleCards = $(window).width() < 992 ? 2 : 4;
        $slider.css("transform", `translateX(-${getCardWidth() * currentIndex}px)`);
    });
});

// ================= About Section Counters =================
const counters = document.querySelectorAll(".counter");
const speed = 200;

function startCounting(counter) {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = target / speed;

    function updateCount() {
        count += increment;
        if (count < target) {
            counter.innerText = Math.floor(count);
            requestAnimationFrame(updateCount);
        } else {
            if (target >= 1000) {
                counter.innerText = Math.floor(target / 1000) + "K+";
            } else {
                counter.innerText = target + "+";
            }
        }
    }
    updateCount();
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.innerText = "0";
            startCounting(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));

// ================= Stylist Profile =================
$(document).ready(function () {
    const stylistData = {
        "Maria.b": {
            name: "Maria B.",
            category: "Bridal and Wedding",
            rating: "4.9 · 27 yrs",
            photo: "./assets/Stylists/stylist 1.webp",
            bio: "Expert in bridal elegance and wedding couture. 27 years of experience styling brides.",
            collections: [
                { title: "Bridal Elegance", img: "./assets/collection/Bridal1.jpg" },
                { title: "Bridal Elegance", img: "./assets/collection/Bridal2.jpg" },
                { title: "Bridal Elegance", img: "./assets/collection/Bridal3.jpg" },
                { title: "Bridal Elegance", img: "./assets/collection/Bridal4.webp" },
                { title: "Bridal Elegance", img: "./assets/collection/Bridal5.jpg" },
                { title: "Bridal Elegance", img: "./assets/collection/Bridal6.webp" },
                { title: "Bridal Elegance", img: "./assets/collection/Bridal7.jpg" },
                { title: "Bridal Elegance", img: "./assets/collection/Bridal8.jpg" },
                { title: "Bridal Elegance", img: "./assets/collection/Bridal9.jpg" },
                { title: "Bridal Elegance", img: "./assets/collection/Bridal10.webp" },
            ]
        },
        "Zara Shahid": {
            name: "Zara Shahid",
            category: "Luxury Pret",
            rating: "4.7 · 8 yrs",
            photo: "./assets/Stylists/stylist2.jfif",
            bio: "Luxury pret designer with 8 years of experience creating elegant ready-to-wear pieces.",
            collections: [
                { title: "Luxury Line", img: "./assets/collection/luxury1.webp" },
                { title: "Luxury Line", img: "./assets/collection/luxury2.webp" },
                { title: "Luxury Line", img: "./assets/collection/luxury3.webp" },
                { title: "Luxury Line", img: "./assets/collection/luxury4.jpg" },
                { title: "Luxury Line", img: "./assets/collection/luxury5.webp" },
                { title: "Luxury Line", img: "./assets/collection/luxury6.jpg" },
                { title: "Luxury Line", img: "./assets/collection/luxury7.jpg" },
                { title: "Luxury Line", img: "./assets/collection/luxury8.webp" },
                { title: "Luxury Line", img: "./assets/collection/luxury9.webp" },
                { title: "Luxury Line", img: "./assets/collection/luxury10.webp" },
                { title: "Luxury Line", img: "./assets/collection/luxury11.jpg" },
                { title: "Luxury Line", img: "./assets/collection/luxury12.webp" },
                { title: "Luxury Line", img: "./assets/collection/luxury13.jpg" },
                { title: "Luxury Line", img: "./assets/collection/luxury14.webp" }]
        }
        // 10 more stylists
    };

    function showStylistProfile(data) {
        $("#profile-photo").attr("src", data.photo);
        $("#profile-name").text(data.name);
        $("#profile-category").text(data.category);
        $("#profile-rating").html('<span><i class="fa-solid fa-star"></i></span> ' + data.rating);
        $("#profile-bio").text(data.bio);
        $(".stylist-collection-heading").text(`${data.name}'s Collections`);

        $("#profile-collections").empty();
        data.collections.forEach(col => {
            $("#profile-collections").append(`
                <div class="collection-item">
                    <img src="${col.img}" alt="${col.title}">
                    <div class="collection-overlay">
                        <div class="overlay-left">
                            <span>View Details</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <div class="overlay-right">
                            <i class="fa-regular fa-eye"></i>
                            <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                    <div class="collection-details">
                        <h4>${col.title}</h4>
                        <p>$350</p>
                    </div>
                </div>
            `);
        });

    }

    $(".stylist-card").on("click", function () {
        const key = $(this).data("stylist");
        if (!stylistData[key]) return;

        localStorage.setItem("selectedStylist", key);
        showStylistProfile(stylistData[key]);

        $(".stylist, .stylist-testimonials, .booking-section").hide();

        $("#stylist-profile").fadeIn();

        $("html, body").animate({ scrollTop: 0 }, 500);

        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?stylist=" + encodeURIComponent(key);
        window.history.replaceState({ path: newUrl }, "", newUrl);
    });

    $("#back-to-stylists").on("click", function () {
        $(".stylist, .stylist-testimonials, .booking-section, .slider-section").fadeIn();
        $("#stylist-profile").hide();
        $("html, body").animate({ scrollTop: 0 }, 500);
        localStorage.removeItem("selectedStylist");
        window.history.replaceState({}, "", window.location.pathname);
    });

    //stylist profile reload ----------
    // if (window.location.pathname.includes("stylists.html")) {

    //     let savedStylist = localStorage.getItem("selectedStylist");
    //     const urlParams = new URLSearchParams(window.location.search);
    //     const queryStylist = urlParams.get("stylist");

    //     if (queryStylist && stylistData[queryStylist]) savedStylist = queryStylist;

    //     if (savedStylist && stylistData[savedStylist]) {
    //         showStylistProfile(stylistData[savedStylist]);
    //         $(".stylist, .stylist-testimonials, .booking-section").hide();
    //         $("#stylist-profile").show();
    //     }
    // }

});
