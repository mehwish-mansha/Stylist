// Navbar scroll

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".nav-container");
    const maxScroll = 200;
    let scroll = window.scrollY;

    let alpha = Math.max(1 - scroll / maxScroll, 0.9);

    navbar.style.backgroundColor = `rgba(255, 255, 255, ${alpha})`;
});

function initNavbar() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const closeBtn = document.getElementById("closeBtn");

    if (!hamburger || !navLinks || !closeBtn) return;

    // Open sidebar
    hamburger.addEventListener("click", () => {
        navLinks.classList.add("active");
        document.body.style.overflow = "hidden"; // prevent background scroll
    });

    // Close sidebar using close button
    closeBtn.addEventListener("click", () => {
        navLinks.classList.remove("active");
        document.body.style.overflow = "";
    });

    // Close sidebar when clicking outside
    document.addEventListener("click", (event) => {
        const isClickInside = navLinks.contains(event.target) || hamburger.contains(event.target);

        if (!isClickInside) {
            navLinks.classList.remove("active");
            document.body.style.overflow = "";
        }
    });

    // Dropdowns
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const header = dropdown.querySelector(".dropdown-header");
        const submenu = dropdown.querySelector(".submenu");
        const icon = header.querySelector("i");

        header.addEventListener("click", () => {
            // Close other dropdowns
            dropdowns.forEach(other => {
                if (other !== dropdown) {
                    other.querySelector(".submenu").classList.remove("active");
                    other.querySelector(".dropdown-header i").classList.remove("rotate");
                }
            });

            // Toggle this dropdown
            submenu.classList.toggle("active");
            icon.classList.toggle("rotate");
        });
    });
}


// Collection Area

$(document).ready(function () {
    const $slider = $(".collection-grid");
    const $cards = $(".collection-item");
    const $next = $(".next-btn");
    const $prev = $(".prev-btn");
    const visibleCards = 4;
    let currentIndex = 0;

    function getCardWidth() {
        return $cards.outerWidth(true);
    }

    function maxIndex() {
        return $cards.length - visibleCards;
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
        $slider.css("transform", `translateX(-${getCardWidth() * currentIndex}px)`);
    });
});


// About Section Stats
const counters = document.querySelectorAll(".counter");

const speed = 200;

const startCounting = (counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const increment = target / speed;

    const updateCount = () => {
        count += increment;

        if (count < target) {
            counter.innerText = Math.floor(count);
            requestAnimationFrame(updateCount);
        } else {
            if (target >= 1000) {
                counter.innerText = (target / 1000) + "K+";
            } else {
                counter.innerText = target + "+";
            }
        }
    };

    updateCount();
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.innerText = "0"; 
            startCounting(entry.target);
        }

    });
}, {
    threshold: 0.5
});

counters.forEach(counter => {
    observer.observe(counter);
});



