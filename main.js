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

// ================= 1. Navigation Logic =================
function initNavbarScroll() {
    const $navContainer = $("#nav-container");

    // Only call .load() if the container exists AND is empty
    if ($navContainer.length && $navContainer.is(':empty')) {
        $navContainer.load("/nav.html", function () {
            renderCart(); // Render cart AFTER the external file finishes loading
            setupScrollEffect();
        });
    } else {
        // If navbar is already in the HTML (Product Page), just do the scroll
        setupScrollEffect();
    }
}

// Helper to keep code clean
function setupScrollEffect() {
    $(window).on("scroll", function () {
        let scroll = $(this).scrollTop();
        let alpha = Math.max(1 - (scroll / 400) * 0.1, 0.9);
        $(".nav-container").css("background-color", `rgba(255,255,255,${alpha})`);
    });
}


function initNavbarToggle() {
    let scrollPosition = 0;

    // 1. OPEN SIDEBAR (Delegated to document so it's universal)
    $(document).on("click", "#hamburger", function (e) {
        e.preventDefault();
        scrollPosition = window.scrollY;

        // Lock body and show menu
        $("body").addClass("nav-open").css("top", `-${scrollPosition}px`);
        $("#navLinks").addClass("active");
        $("#navOverlay").addClass("active");
    });

    // 2. CLOSE SIDEBAR
    const closeSidebar = () => {
        if (!$("#navLinks").hasClass("active")) return;

        $("body").removeClass("nav-open").css("top", "");
        window.scrollTo(0, scrollPosition);

        $("#navLinks").removeClass("active");
        $("#navOverlay").removeClass("active");
    };

    $(document).on("click", "#closeBtn, #navOverlay, .nav-links a", closeSidebar);

    // 3. DROPDOWN LOGIC (Universal)
    $(document).on("click", ".dropdown-header", function () {
        const $submenu = $(this).next(".submenu");
        const $icon = $(this).find("i");

        // Close other submenus
        $(".submenu").not($submenu).removeClass("active");
        $(".dropdown-header i").not($icon).removeClass("rotate");

        // Toggle current
        $submenu.toggleClass("active");
        $icon.toggleClass("rotate");
    });
}


function initNavFeatures() {
    // 1. SEARCH TOGGLE (Opening/Closing the bar)
    $(document).on("click", ".search-icon", function () {
        $(".nav-search").toggleClass("active");
        const $input = $("#search-input");

        if ($(".nav-search").hasClass("active")) {
            $input.focus();
            $(".page-content").addClass("page-blur");
        } else {
            $input.val("");
            $(".page-content").removeClass("page-blur");
            $(".main-stylist-card").show(); // Reset visibility when closed
        }

        // Add this inside the initNavFeatures function in main.js
        $(document).on("click", "#cartBtn", function (e) {
            e.preventDefault(); // Stop any default link behavior

            // 1. Show the sidebar by calling your existing logic
            toggleCart(true);

            // 2. Optional: Add a small console log to confirm it's working
            console.log("Cart opened from product page.");
        });
    });



    // 2. REAL-TIME SEARCH FILTER
    // This looks at the text inside your Stylist cards and filters them as you type
    $(document).on("input", "#search-input", function () {
        const value = $(this).val().toLowerCase();

        $(".main-stylist-card").filter(function () {
            // Searches the name (h3) and category (p) inside each card
            const name = $(this).find("h3").text().toLowerCase();
            const category = $(this).find("p").text().toLowerCase();

            // Toggle visibility: show if matches, hide if not
            $(this).toggle(name.indexOf(value) > -1 || category.indexOf(value) > -1);
        });
    });

    // 3. CART SIDEBAR LOGIC (Preserved from your code)
    let scrollPos = 0;
    const toggleCart = (open) => {
        if (open) {
            scrollPos = window.scrollY;
            $("body").addClass("cart-open").css("top", `-${scrollPos}px`);
            $(".cart-sidebar, .cart-overlay").addClass("active");
        } else {
            $("body").removeClass("cart-open").css("top", "");
            window.scrollTo(0, scrollPos);
            $(".cart-sidebar, .cart-overlay").removeClass("active");
        }
    };

    $(document).on("click", ".cart-icon", () => toggleCart(true));
    $(document).on("click", ".close-cart, .cart-overlay", () => toggleCart(false));
}

// Define this at the VERY TOP of your main.js file, above everything else
let cart = JSON.parse(localStorage.getItem("userCart")) || [];

function initCartCalculations() {
    // 1. ADD TO CART (From Product Details Page)
    $(document).on("click", "#cartBtn", function (e) {
        e.preventDefault();

        const product = {
            id: Date.now(),
            name: $(".product-title").text().trim(),
            // Removes "Rs." or "$" and commas to get a clean number
            price: parseFloat($(".price").text().replace(/[^0-9.]/g, '')),
            img: $("#mainImg").attr("src"),
            qty: parseInt($("#qtyValue").text()) || 1
        };

        const existing = cart.find(item => item.name === product.name);
        if (existing) {
            existing.qty += product.qty;
        } else {
            cart.push(product);
        }

        saveAndRender();
        // Use the toggleCart from your initNavFeatures
        $(".cart-sidebar, .cart-overlay").addClass("active");
        $("body").addClass("cart-open");
    });

    // 2. QUANTITY CONTROLS (Inside the sidebar)
    $(document).on("click", ".cart-qty-plus", function () {
        const idx = $(this).data("index");
        cart[idx].qty++;
        saveAndRender();
    });

    $(document).on("click", ".cart-qty-minus", function () {
        const idx = $(this).data("index");
        if (cart[idx].qty > 1) {
            cart[idx].qty--;
            saveAndRender();
        }
    });

    // 3. REMOVE ITEM
    $(document).on("click", ".remove-item", function () {
        const idx = $(this).data("index");
        cart.splice(idx, 1);
        saveAndRender();
    });
}

// 4. HELPER FUNCTIONS
function saveAndRender() {
    localStorage.setItem("userCart", JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    const $container = $("#cart-items-container");
    if (!$container.length) return;

    $container.empty(); // This removes the "default" products automatically
    let grandTotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        grandTotal += itemTotal;

        $container.append(`
            <div class="cart-item">
                <img src="${item.img}">
                <div class="cart-item-details">
                    <h4 class="dress-name">${item.name}</h4>
                    <div class="cart-bottom">
                        <div class="quantity-box">
                            <button class="cart-qty-minus" data-index="${index}">−</button>
                            <span class="qty-value">${item.qty}</span>
                            <button class="cart-qty-plus" data-index="${index}">+</button>
                        </div>
                        <p class="price">Rs. ${itemTotal.toLocaleString()}</p>
                        <i class="fa-solid fa-trash remove-item" data-index="${index}"></i>
                    </div>
                </div>
            </div>
        `);
    });

    $(".cart-total span:last-child").text(`Rs. ${grandTotal.toLocaleString()}`);
}

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