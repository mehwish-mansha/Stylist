  $(document).ready(function () {
    renderCart();
    initNavbarScroll();
    initNavbarToggle();
    initNavFeatures();
    initCartCalculations(); // <--- ADD THIS
    initCounters();
    initCollectionSlider();
    initStylistProfileSystem();
});


const stylistData = {
    "Maria.b": {
        name: "Maria B.",
        category: "Bridal and Wedding",
        rating: "4.9 · 27 yrs",
        photo: "./assets/Stylists/stylist 1.webp",
        bio: "Expert in bridal elegance and wedding couture. 27 years of experience styling brides.",
        collections: [
            { title: "Bridal Elegance 1", img: "./assets/collection/Bridal1.jpg", price: "$2,800", fabric: "French Lace" },
            { title: "Bridal Elegance 2", img: "./assets/collection/Bridal2.jpg", price: "$3,200", fabric: "Silk" },
            { title: "Bridal Elegance 3", img: "./assets/collection/Bridal3.jpg", price: "$2,500", fabric: "Chiffon" },
            { title: "Bridal Elegance 4", img: "./assets/collection/Bridal4.webp", price: "$4,000", fabric: "Organza" },
            { title: "Bridal Elegance 5", img: "./assets/collection/Bridal5.jpg", price: "$3,500", fabric: "Tulle" },
            { title: "Bridal Elegance 6", img: "./assets/collection/Bridal6.webp", price: "$3,800", fabric: "Satin" },
            { title: "Bridal Elegance 7", img: "./assets/collection/Bridal7.jpg", price: "$4,500", fabric: "Georgette" },
            { title: "Bridal Elegance 8", img: "./assets/collection/Bridal8.jpg", price: "$5,000", fabric: "Velvet" },
            { title: "Bridal Elegance 9", img: "./assets/collection/Bridal9.jpg", price: "$4,200", fabric: "Crepe" },
            { title: "Bridal Elegance 10", img: "./assets/collection/Bridal10.webp", price: "$3,900", fabric: "Lace" }

        ]
    },
    "Zara Shahid": {
        name: "Zara Shahid",
        category: "Luxury Pret",
        rating: "4.7 · 8 yrs",
        photo: "./assets/Stylists/stylist4.webp",
        bio: "Luxury pret designer with 8 years of experience creating elegant ready-to-wear pieces.",
        collections: [
            { title: "Luxury Line 1", img: "./assets/collection/luxury1.webp", price: "$450", fabric: "Raw Silk" },
            { title: "Luxury Line 2", img: "./assets/collection/luxury2.webp", price: "$600", fabric: "Velvet" },
            { title: "Luxury Line 3", img: "./assets/collection/luxury3.webp", price: "$350", fabric: "Cotton" },
            { title: "Luxury Line 4", img: "./assets/collection/luxury4.jpg", price: "$500", fabric: "Linen" },
            { title: "Luxury Line 5", img: "./assets/collection/luxury5.webp", price: "$550", fabric: "Silk" },
            { title: "Luxury Line 6", img: "./assets/collection/luxury6.jpg", price: "$400", fabric: "Chiffon" },
            { title: "Luxury Line 7", img: "./assets/collection/luxury7.jpg", price: "$450", fabric: "Georgette" },
            { title: "Luxury Line 8", img: "./assets/collection/luxury8.webp", price: "$500", fabric: "Organza" },
            { title: "Luxury Line 9", img: "./assets/collection/luxury9.webp", price: "$550", fabric: "Satin" },
            { title: "Luxury Line 10", img: "./assets/collection/luxury10.webp", price: "$600", fabric: "Crepe" },
            { title: "Luxury Line 11", img: "./assets/collection/luxury11.jpg", price: "$650", fabric: "Tulle" },
            { title: "Luxury Line 12", img: "./assets/collection/luxury12.webp", price: "$700", fabric: "Lace" },
            { title: "Luxury Line 13", img: "./assets/collection/luxury13.jpg", price: "$750", fabric: "Raw Silk" },
            { title: "Luxury Line 14", img: "./assets/collection/luxury14.webp", price: "$800", fabric: "Velvet" }


        ]
    },
    "hania": {
        name: "Hania Mirza Couture",
        category: "Couture & Formal",
        rating: "4.8 · 15 yrs",
        photo: "./assets/Stylists/stylist3.jfif",
        bio: "Specializing in high-end couture and intricate formal wear for over 15 years.",
        collections: [
            { title: "Couture Gold 1", img: "./assets/collection/hania1.jpg", price: "$1,200", fabric: "Net" },
            { title: "Couture Gold 2", img: "./assets/collection/hania2.jpg", price: "$1,500", fabric: "Mysuri" },
            { title: "Couture Gold 3", img: "./assets/collection/hania3.jpg", price: "$900", fabric: "Organza" },
            { title: "Couture Gold 4", img: "./assets/collection/hania4.jpg", price: "$2,000", fabric: "Handwoven Silk" },
            { title: "Couture Gold 5", img: "./assets/collection/hania5.jpg", price: "$1,800", fabric: "Chiffon" },
            { title: "Couture Gold 6", img: "./assets/collection/hania6.jpg", price: "$1,600", fabric: "Georgette" }
        ]
    },
    "sofia": {
        name: "Sofia Laurent",
        category: "Contemporary Western",
        rating: "4.6 · 10 yrs",
        photo: "./assets/Stylists/stylist4.jfif",
        bio: "Modern aesthetics meeting western silhouettes for the contemporary woman.",
        collections: [
            { title: "Modernist 1", img: "./assets/collection/sofia1.jpg", price: "$300", fabric: "Crepe" },
            { title: "Modernist 2", img: "./assets/collection/sofia2.webp", price: "$450", fabric: "Tweed" },
            { title: "Modernist 3", img: "./assets/collection/sofia3.webp", price: "$280", fabric: "Cotton Poplin" },
            { title: "Modernist 4", img: "./assets/collection/sofia4.webp", price: "$350", fabric: "Linen" },
            { title: "Modernist 5", img: "./assets/collection/sofia5.webp", price: "$400", fabric: "Silk Blend" },
            { title: "Modernist 6", img: "./assets/collection/sodia6.webp", price: "$320", fabric: "Denim" }
        ]
    },
    "ali": {
        name: "Ali Khan",
        category: "Men's Formal",
        rating: "4.5 · 12 yrs",
        photo: "./assets/Stylists/stylist4.webp",
        bio: "Master tailor and designer focusing on sharp, bespoke men's formal attire.",
        collections: [
            { title: "Heritage Suit 1", img: "./assets/collection/ali1.webp", price: "$800", fabric: "Italian Wool" },
            { title: "Heritage Suit 2", img: "./assets/collection/ali2.webp", price: "$1,100", fabric: "Cashmere Blend" },
            { title: "Heritage Suit 3", img: "./assets/collection/ali3.webp", price: "$650", fabric: "Linen" }
        ]
    },
    "amina": {
        name: "Amina Qureshi",
        category: "Bridal Accessories",
        rating: "4.8 · 9 yrs",
        photo: "./assets/Stylists/stylist6.jpg",
        bio: "Crafting the final touches that complete every bride's dream look.",
        collections: [
            { title: "Ethereal Veil 1", img: "./assets/collection/amina1.jpg", price: "$200", fabric: "Soft Tulle" },
            { title: "Ethereal Veil 2", img: "./assets/collection/amina2.webp", price: "$500", fabric: "Embroidered Net" },
            { title: "Ethereal Veil 3", img: "./assets/collection/amina3.webp", price: "$350", fabric: "Lace" },
            { title: "Ethereal Veil 4", img: "./assets/collection/amina4.jpg", price: "$400", fabric: "Silk" },
            { title: "Ethereal Veil 5", img: "./assets/collection/amina5.webp", price: "$450", fabric: "Organza" },
            { title: "Ethereal Veil 6", img: "./assets/collection/amina6.webp", price: "$300", fabric: "Chiffon" },
            { title: "Ethereal Veil 7", img: "./assets/collection/amina7.webp", price: "$250", fabric: "Georgette" },
            { title: "Ethereal Veil 8", img: "./assets/collection/amina8.jpg", price: "$400", fabric: "Velvet" },
            { title: "Ethereal Veil 9", img: "./assets/collection/amina9.jpg", price: "$350", fabric: "Satin" },
            { title: "Ethereal Veil 10", img: "./assets/collection/amina10.jpg", price: "$450", fabric: "Tulle" },
            { title: "Ethereal Veil 11", img: "./assets/collection/amina11.webp", price: "$500", fabric: "Lace" },
            { title: "Ethereal Veil 12", img: "./assets/collection/amina12.jpg", price: "$300", fabric: "Silk" }
        ]
    },
    "karim": {
        name: "Karim Ali",
        category: "Street Style",
        rating: "4.6 · 7 yrs",
        photo: "./assets/Stylists/stylist7.webp",
        bio: "Innovative urban fashion that blends comfort with high-street trends.",
        collections: [
            { title: "Urban Pulse 1", img: "./assets/collection/karim1.webp", price: "$150", fabric: "Denim" },
            { title: "Urban Pulse 2", img: "./assets/collection/karim2.webp", price: "$120", fabric: "Heavy Jersey" },
            { title: "Urban Pulse 3", img: "./assets/collection/karim3.webp", price: "$100", fabric: "Canvas" },
            { title: "Urban Pulse 4", img: "./assets/collection/karim4.webp", price: "$130", fabric: "Corduroy" }
        ]
    },
    "leila": {
        name: "Leila Noor",
        category: "Evening Wear",
        rating: "4.9 · 11 yrs",
        photo: "./assets/Stylists/stylist8.jpg",
        bio: "Creating breathtaking evening gowns for red carpets and gala events.",
        collections: [
            { title: "Midnight Glow 1", img: "./assets/collection/leila1.webp", price: "$1,800", fabric: "Sequined Satin" },
            { title: "Midnight Glow 2", img: "./assets/collection/leila2.webp", price: "$2,200", fabric: "Velvet" },
            { title: "Midnight Glow 3", img: "./assets/collection/leila3.webp", price: "$1,600", fabric: "Chiffon Overlay" },
            { title: "Midnight Glow 4", img: "./assets/collection/leila4.webp", price: "$2,500", fabric: "Silk" },
        ]
    }
};

// ================= 2. Stylist Profile System =================

function initWishlistToCartLogic() {
    $(document).on('click', '.move-btn', function () {
        const $favItem = $(this).closest('.fav-item');

        const itemData = {
            name: $favItem.find('h3').text(),
            price: $favItem.find('.price').text().replace('$', '').trim(),
            img: $favItem.find('img').attr('src')
        };

        const cartItemHTML = `
            <div class="cart-item">
                <img src="${itemData.img}">
                <div class="cart-item-details">
                    <h4 class="dress-name">${itemData.name}</h4>
                    <div class="cart-bottom">
                        <div class="quantity-box">
                            <button class="qty-minus">−</button>
                            <span class="qty-value">1</span>
                            <button class="qty-plus">+</button>
                        </div>
                        <p class="price" data-price="${itemData.price}">$${itemData.price}</p>
                        <i class="fa-solid fa-trash remove-item"></i>
                    </div>
                </div>
            </div>`;

        $('.cart-sidebar .cart-items-container').append(cartItemHTML);
        $favItem.fadeOut();
        calculateGrandTotal(); // Updates the bottom total immediately

        // Toggle Sections
        $(".stylist, .stylist-testimonials, .booking-section, .slider-section").fadeOut(300, () => {
            $("#stylist-profile").fadeIn();
            $("html, body").animate({ scrollTop: 0 }, 500);
        });

        // Update URL
        const cleanUrl = `${window.location.pathname}?stylist=${encodeURIComponent(key)}`;
        window.history.pushState({ path: cleanUrl }, "", cleanUrl);
    });

    // Back Button
    $("#back-to-stylists").on("click", function () {
        $("#stylist-profile").fadeOut(300, () => {
            $(".stylist, .stylist-testimonials, .booking-section, .slider-section").fadeIn();
            window.history.pushState({}, "", window.location.pathname);
        });
    });
}

// ================= 3. UI Utilities =================

function initCounters() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const $this = $(entry.target);
                const target = parseInt($this.data("target"));
                $({ count: 0 }).animate({ count: target }, {
                    duration: 2000,
                    easing: "swing",
                    step: function () {
                        $this.text(Math.floor(this.count));
                    },
                    complete: function () {
                        $this.text(target >= 1000 ? Math.floor(target / 1000) + "K+" : target + "+");
                    }
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll(".counter").forEach(c => observer.observe(c));
}

function initCollectionSlider() {
    const $slider = $(".collection-grid");
    if (!$slider.length) return;

    $(".next-btn").on("click", () => {
        const scrollAmount = $(".collection-item").outerWidth(true);
        $slider.animate({ scrollLeft: $slider.scrollLeft() + scrollAmount }, 400);
    });

    $(".prev-btn").on("click", () => {
        const scrollAmount = $(".collection-item").outerWidth(true);
        $slider.animate({ scrollLeft: $slider.scrollLeft() - scrollAmount }, 400);
    });
}