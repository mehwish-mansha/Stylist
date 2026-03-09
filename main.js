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



const collections = {

  // ── BRIDAL ────────────────────────────────────────────────
  bridal: {
    title: "Bridal Collection",
    type: "clothing",
    items: [
      { title: "Royal Nikha Bridal Outfit 1",        category: "Nikkah",  description: "Elegant Nikha dress for bride",              price: "5,000",  oldPrice: "7,000",  image: "/All Collections/All Collection Images/bridal image/nikhaimg17.jpg",  badge: "NEW" },
      { title: "Premium White Nikha Collection 2",   category: "Nikkah",  description: "Luxury white Nikha collection",              price: "6,000",  oldPrice: "8,000",  image: "/All Collections/All Collection Images/bridal image/nikhaimg18.jpg",  badge: "NEW" },
      { title: "Designer Embroidered Nikha Outfit 3",category: "Nikkah",  description: "Modern Nikha dress with embroidery",         price: "7,000",  oldPrice: "9,000",  image: "/All Collections/All Collection Images/bridal image/nikhaimg19.jpg",  badge: "NEW" },
      { title: "Classic Gold Nikha Ensemble 4",      category: "Nikkah",  description: "Classic Nikha bridal outfit",                price: "8,000",  oldPrice: "10,000", image: "/All Collections/All Collection Images/bridal image/nikhaimg20.jpg",  badge: "NEW" },
      { title: "Mayoun Outfit 1",                    category: "Mayoun",  description: "Yellow Mayoun dress with floral style",      price: "4,500",  oldPrice: "6,000",  image: "/All Collections/All Collection Images/bridal image/mayoimg5.jpg",    badge: "NEW" },
      { title: "Mayoun Outfit 2",                    category: "Mayoun",  description: "Traditional Mayoun dress for bride",         price: "5,500",  oldPrice: "7,000",  image: "/All Collections/All Collection Images/bridal image/mayoimg6.jpg",    badge: "NEW" },
      { title: "Mayon Outfit 3",                     category: "Mayoun",  description: "Simple & elegant Mayon outfit",              price: "6,500",  oldPrice: "8,000",  image: "/All Collections/All Collection Images/bridal image/mayoimg7.jpg",    badge: "NEW" },
      { title: "Mayon Outfit 4",                     category: "Mayoun",  description: "Luxury Mayoun collection with jewelry",      price: "7,500",  oldPrice: "9,000",  image: "/All Collections/All Collection Images/bridal image/mayoimg8.jpg",    badge: "NEW" },
      { title: "Barat Outfit 1",                     category: "Barat",   description: "Red bridal barat dress premium look",        price: "12,000", oldPrice: "15,000", image: "/All Collections/All Collection Images/bridal image/baratimg1.jpg",   badge: "HOT" },
      { title: "Barat Outfit 2",                     category: "Barat",   description: "Heavy bridal barat dress design",            price: "15,000", oldPrice: "18,000", image: "/All Collections/All Collection Images/bridal image/baratimg2.jpg",   badge: "HOT" },
      { title: "Barat Outfit 3",                     category: "Barat",   description: "Royal barat lehenga collection",             price: "18,000", oldPrice: "22,000", image: "/All Collections/All Collection Images/bridal image/baratimg3.jpg",   badge: "HOT" },
      { title: "Barat Outfit 4",                     category: "Barat",   description: "Classic red barat outfit for bride",         price: "20,000", oldPrice: "25,000", image: "/All Collections/All Collection Images/bridal image/baratimg4.jpg",   badge: "HOT" },
      { title: "Valima Outfit 1",                    category: "Valima",  description: "Elegant valima dress in silver theme",       price: "14,000", oldPrice: "17,000", image: "/All Collections/All Collection Images/bridal image/valimaimg13.jpg", badge: "Premium" },
      { title: "Valima Outfit 2",                    category: "Valima",  description: "White bridal valima collection",             price: "16,000", oldPrice: "20,000", image: "/All Collections/All Collection Images/bridal image/valimaimg14.jpg", badge: "Premium" },
      { title: "Valima Outfit 3",                    category: "Valima",  description: "Luxury valima dress with embroidery",        price: "19,000", oldPrice: "24,000", image: "/All Collections/All Collection Images/bridal image/valimaimg15.jpg", badge: "Premium" },
      { title: "Valima Outfit 4",                    category: "Valima",  description: "Modern valima dress premium look",           price: "22,000", oldPrice: "28,000", image: "/All Collections/All Collection Images/bridal image/valimaimg16.jpg", badge: "Premium" },
      { title: "Mehendi Outfit 1",                   category: "Mehendi", description: "Mehendi dress with bright colors",          price: "5,000",  oldPrice: "6,500",  image: "/All Collections/All Collection Images/bridal image/mehendiimg9.jpg",  badge: "NEW" },
      { title: "Mehendi Outfit 2",                   category: "Mehendi", description: "Green & yellow mehendi outfit style",       price: "6,500",  oldPrice: "8,500",  image: "/All Collections/All Collection Images/bridal image/mehendiimg10.jpg", badge: "NEW" },
      { title: "Mehendi Outfit 3",                   category: "Mehendi", description: "Traditional mehendi dress with dupatta",    price: "8,000",  oldPrice: "10,000", image: "/All Collections/All Collection Images/bridal image/mehendiimg11.jpg", badge: "NEW" },
      { title: "Mehendi Outfit 4",                   category: "Mehendi", description: "Luxury mehendi outfit with jewelry",        price: "10,000", oldPrice: "12,000", image: "/All Collections/All Collection Images/bridal image/mehendiimg12.jpg", badge: "NEW" }
    ]
  },

  // ── JEWELRY ───────────────────────────────────────────────
  jewelry: {
    title: "Jewelry Collection",
    type: "accessory",
    items: [
      { title: "Elegant Gold Earrings",       price: "2,999", badge: "NEW", frontImg: "/All Collections/All Collection Images/jewelry img/jimg1.webp",  hoverImg: "/All Collections/All Collection Images/jewelry img/jhover1.webp",  description: "Premium quality gold plated earrings with elegant finishing." },
      { title: "Luxury Bridal Necklace",      price: "3,499", badge: "NEW", frontImg: "/All Collections/All Collection Images/jewelry img/jimg2.webp",  hoverImg: "/All Collections/All Collection Images/jewelry img/jhover2.webp",  description: "Stunning bridal necklace crafted for the modern bride." },
      { title: "Classic Pearl Set",           price: "2,599", badge: "NEW", frontImg: "/All Collections/All Collection Images/jewelry img/jimg3.webp",  hoverImg: "/All Collections/All Collection Images/jewelry img/jhover3.webp",  description: "Timeless pearl set for everyday elegance." },
      { title: "Modern Gold Pendant",         price: "2,199", badge: "NEW", frontImg: "/All Collections/All Collection Images/jewelry img/jimg4.webp",  hoverImg: "/All Collections/All Collection Images/jewelry img/jhover4.webp",  description: "Sleek gold pendant for a modern look." },
      { title: "Royal Choker Set",            price: "3,999", badge: "NEW", frontImg: "/All Collections/All Collection Images/jewelry img/jimg5.webp",  hoverImg: "/All Collections/All Collection Images/jewelry img/jhover5.webp",  description: "Royal choker set for special occasions." },
      { title: "Traditional Jhumka",          price: "1,899", badge: "NEW", frontImg: "/All Collections/All Collection Images/jewelry img/jimg6.webp",  hoverImg: "/All Collections/All Collection Images/jewelry img/jhover6.webp",  description: "Classic jhumka earrings with traditional design." },
      { title: "Stylish Ring Design",         price: "1,499", badge: "NEW", frontImg: "/All Collections/All Collection Images/jewelry img/jimg7.webp",  hoverImg: "/All Collections/All Collection Images/jewelry img/jhover7.webp",  description: "Stylish ring with a modern and elegant design." },
      { title: "Bridal Hand Jewelry",         price: "4,599", badge: "NEW", frontImg: "/All Collections/All Collection Images/jewelry img/jimg8.webp",  hoverImg: "/All Collections/All Collection Images/jewelry img/jhover8.webp",  description: "Premium bridal hand jewelry for the big day." },
      { title: "Premium Gold Set",            price: "4,999", badge: "NEW", frontImg: "/All Collections/All Collection Images/jewelry img/jimg9.webp",  hoverImg: "/All Collections/All Collection Images/jewelry img/jhover9.webp",  description: "Complete premium gold jewelry set." },
      { title: "Elegant Necklace",            price: "2,799", badge: "NEW", frontImg: "/All Collections/All Collection Images/jewelry img/jimg10.webp", hoverImg: "/All Collections/All Collection Images/jewelry img/jhover10.webp", description: "Elegant necklace for a refined look." },
      { title: "Designer Earrings",           price: "1,999", badge: "NEW", frontImg: "/All Collections/All Collection Images/jewelry img/jimg11.webp", hoverImg: "/All Collections/All Collection Images/jewelry img/jhover11.webp", description: "Designer earrings with unique craftsmanship." },
      { title: "Traditional Bridal Set",      price: "5,999", badge: "NEW", frontImg: "/All Collections/All Collection Images/jewelry img/jimg12.webp", hoverImg: "/All Collections/All Collection Images/jewelry img/jhover12.webp", description: "Complete traditional bridal jewelry set." },
      { title: "Luxury Ring Collection",      price: "1,699", badge: "NEW", frontImg: "/All Collections/All Collection Images/jewelry img/jimg13.webp", hoverImg: "/All Collections/All Collection Images/jewelry img/jhover13.webp", description: "Luxury ring from our exclusive collection." },
      { title: "Elegant Gold Bracelet",       price: "2,399", badge: "NEW", frontImg: "/All Collections/All Collection Images/jewelry img/jimg14.webp", hoverImg: "/All Collections/All Collection Images/jewelry img/jhover14.webp", description: "Elegant gold bracelet for everyday wear." },
      { title: "Premium Pendant",             price: "2,099", badge: "NEW", frontImg: "/All Collections/All Collection Images/jewelry img/jimg15.webp", hoverImg: "/All Collections/All Collection Images/jewelry img/jhover15.webp", description: "Premium pendant with fine finishing." },
      { title: "Classic Bridal Necklace",     price: "5,299", badge: "NEW", frontImg: "/All Collections/All Collection Images/jewelry img/jimg16.webp", hoverImg: "/All Collections/All Collection Images/jewelry img/jhover16.webp", description: "Classic bridal necklace for a timeless bridal look." }
    ]
  },

  // ── BAGS ──────────────────────────────────────────────────
  bags: {
    title: "Bags Collection",
    type: "accessory",
    items: [
      { title: "Elegant Black Shoulder Bag",  price: "3,500", badge: "NEW", frontImg: "/All Collections/All Collection Images/bags img/bimg1.webp",  hoverImg: "/All Collections/All Collection Images/bags img/bhover1.webp",  description: "Sleek black shoulder bag crafted from premium material." },
      { title: "Stylish Brown Cross Bag",     price: "3,200", badge: "NEW", frontImg: "/All Collections/All Collection Images/bags img/bimg2.webp",  hoverImg: "/All Collections/All Collection Images/bags img/bhover2.webp",  description: "Stylish crossbody bag in rich brown tone." },
      { title: "Luxury Maroon Hand Bag",      price: "3,800", badge: "NEW", frontImg: "/All Collections/All Collection Images/bags img/bimg3.webp",  hoverImg: "/All Collections/All Collection Images/bags img/bhover3.webp",  description: "Luxury maroon hand bag with premium finish." },
      { title: "Classic Grey Shoulder Bag",   price: "3,000", badge: "NEW", frontImg: "/All Collections/All Collection Images/bags img/bimg4.webp",  hoverImg: "/All Collections/All Collection Images/bags img/bhover4.webp",  description: "Classic grey shoulder bag for everyday use." },
      { title: "Modern Black Mini Bag",       price: "3,600", badge: "NEW", frontImg: "/All Collections/All Collection Images/bags img/bimg5.webp",  hoverImg: "/All Collections/All Collection Images/bags img/bhover5.webp",  description: "Compact and modern black mini bag." },
      { title: "Premium Golden Chain Bag",    price: "4,200", badge: "NEW", frontImg: "/All Collections/All Collection Images/bags img/bimg6.webp",  hoverImg: "/All Collections/All Collection Images/bags img/bhover6.webp",  description: "Premium bag with golden chain strap." },
      { title: "Green Fashion Hand Bag",      price: "3,900", badge: "NEW", frontImg: "/All Collections/All Collection Images/bags img/bimg7.webp",  hoverImg: "/All Collections/All Collection Images/bags img/bhover7.webp",  description: "Fashion-forward green hand bag." },
      { title: "Designer Cream Bag",          price: "3,400", badge: "NEW", frontImg: "/All Collections/All Collection Images/bags img/bimg8.webp",  hoverImg: "/All Collections/All Collection Images/bags img/bhover8.webp",  description: "Designer bag in classic cream color." },
      { title: "Luxury Brown Leather Bag",    price: "4,500", badge: "NEW", frontImg: "/All Collections/All Collection Images/bags img/bimg9.webp",  hoverImg: "/All Collections/All Collection Images/bags img/bhover9.webp",  description: "Luxury brown leather bag with fine stitching." },
      { title: "Elegant White Fashion Bag",   price: "3,700", badge: "NEW", frontImg: "/All Collections/All Collection Images/bags img/bimg10.webp", hoverImg: "/All Collections/All Collection Images/bags img/bhover10.webp", description: "Clean white fashion bag for special occasions." },
      { title: "Stylish Party Hand Bag",      price: "4,100", badge: "NEW", frontImg: "/All Collections/All Collection Images/bags img/bimg11.webp", hoverImg: "/All Collections/All Collection Images/bags img/bhover11.webp", description: "Glamorous party hand bag." },
      { title: "Royal Designer Bag",          price: "4,800", badge: "NEW", frontImg: "/All Collections/All Collection Images/bags img/bimg12.webp", hoverImg: "/All Collections/All Collection Images/bags img/bhover12.webp", description: "Royal designer bag for premium taste." },
      { title: "Classic Ladies Shoulder Bag", price: "3,300", badge: "NEW", frontImg: "/All Collections/All Collection Images/bags img/bimg13.webp", hoverImg: "/All Collections/All Collection Images/bags img/bhover13.webp", description: "Classic shoulder bag for ladies." },
      { title: "Premium Fashion Hand Bag",    price: "4,400", badge: "NEW", frontImg: "/All Collections/All Collection Images/bags img/bimg14.webp", hoverImg: "/All Collections/All Collection Images/bags img/bhover14.webp", description: "Premium fashion hand bag." },
      { title: "Modern Stylish Bag",          price: "3,600", badge: "NEW", frontImg: "/All Collections/All Collection Images/bags img/bimg15.webp", hoverImg: "/All Collections/All Collection Images/bags img/bhover15.webp", description: "Modern stylish bag for the trendy woman." },
      { title: "Luxury Black Party Bag",      price: "5,000", badge: "NEW", frontImg: "/All Collections/All Collection Images/bags img/bimg16.webp", hoverImg: "/All Collections/All Collection Images/bags img/bhover16.webp", description: "Luxury black party bag for evening occasions." }
    ]
  },

  // ── SHOES ─────────────────────────────────────────────────
  shoes: {
    title: "Shoes Collection",
    type: "accessory",
    items: [
      { title: "Elegant Nude Heels",          price: "2,999", badge: "NEW", frontImg: "/All Collections/All Collection Images/shoes img/simg1.webp",  hoverImg: "/All Collections/All Collection Images/shoes img/shover1.webp",  description: "Elegant nude heels perfect for formal occasions." },
      { title: "Silver Party Sandals",        price: "3,499", badge: "NEW", frontImg: "/All Collections/All Collection Images/shoes img/simg2.webp",  hoverImg: "/All Collections/All Collection Images/shoes img/shover2.webp",  description: "Shimmering silver sandals for party nights." },
      { title: "Golden Strap Heels",          price: "2,599", badge: "NEW", frontImg: "/All Collections/All Collection Images/shoes img/simg3.webp",  hoverImg: "/All Collections/All Collection Images/shoes img/shover3.webp",  description: "Golden strap heels with a glamorous finish." },
      { title: "Classic Black Heels",         price: "3,199", badge: "NEW", frontImg: "/All Collections/All Collection Images/shoes img/simg4.webp",  hoverImg: "/All Collections/All Collection Images/shoes img/shover4.webp",  description: "Timeless black heels for every occasion." },
      { title: "Red Bridal Heels",            price: "3,999", badge: "NEW", frontImg: "/All Collections/All Collection Images/shoes img/simg5.webp",  hoverImg: "/All Collections/All Collection Images/shoes img/shover5.webp",  description: "Stunning red heels designed for the bride." },
      { title: "Casual Black Slides",         price: "1,899", badge: "NEW", frontImg: "/All Collections/All Collection Images/shoes img/simg6.webp",  hoverImg: "/All Collections/All Collection Images/shoes img/shover6.webp",  description: "Comfortable casual black slides." },
      { title: "Designer Logo Slides",        price: "2,299", badge: "NEW", frontImg: "/All Collections/All Collection Images/shoes img/simg7.webp",  hoverImg: "/All Collections/All Collection Images/shoes img/shover7.webp",  description: "Designer slides with signature logo." },
      { title: "Green Bow Sandals",           price: "2,499", badge: "NEW", frontImg: "/All Collections/All Collection Images/shoes img/simg8.webp",  hoverImg: "/All Collections/All Collection Images/shoes img/shover8.webp",  description: "Charming green sandals with bow detail." },
      { title: "Tan Flat Sandals",            price: "1,999", badge: "NEW", frontImg: "/All Collections/All Collection Images/shoes img/simg9.webp",  hoverImg: "/All Collections/All Collection Images/shoes img/shover9.webp",  description: "Everyday tan flat sandals." },
      { title: "Elegant Beige Heels",         price: "2,799", badge: "NEW", frontImg: "/All Collections/All Collection Images/shoes img/simg10.webp", hoverImg: "/All Collections/All Collection Images/shoes img/shover10.webp", description: "Classy beige heels for formal wear." },
      { title: "Stylish Black Pumps",         price: "2,999", badge: "NEW", frontImg: "/All Collections/All Collection Images/shoes img/simg11.webp", hoverImg: "/All Collections/All Collection Images/shoes img/shover11.webp", description: "Stylish black pumps for a polished look." },
      { title: "Crystal Strap Heels",         price: "3,599", badge: "NEW", frontImg: "/All Collections/All Collection Images/shoes img/simg12.webp", hoverImg: "/All Collections/All Collection Images/shoes img/shover12.webp", description: "Dazzling crystal strap heels." },
      { title: "Glossy Maroon Slides",        price: "1,899", badge: "NEW", frontImg: "/All Collections/All Collection Images/shoes img/simg13.webp", hoverImg: "/All Collections/All Collection Images/shoes img/shover13.webp", description: "Glossy maroon slides for casual chic style." },
      { title: "Velvet Bow Loafers",          price: "3,399", badge: "NEW", frontImg: "/All Collections/All Collection Images/shoes img/simg14.webp", hoverImg: "/All Collections/All Collection Images/shoes img/shover14.webp", description: "Luxurious velvet loafers with bow accent." },
      { title: "Golden Party Heels",          price: "4,199", badge: "NEW", frontImg: "/All Collections/All Collection Images/shoes img/simg15.webp", hoverImg: "/All Collections/All Collection Images/shoes img/shover15.webp", description: "Glamorous golden heels for party wear." },
      { title: "Premium Transparent Heels",   price: "4,599", badge: "NEW", frontImg: "/All Collections/All Collection Images/shoes img/simg16.webp", hoverImg: "/All Collections/All Collection Images/shoes img/shover16.webp", description: "Modern transparent heels for a bold statement." }
    ]
  },

  // ── EID ───────────────────────────────────────────────────
  eid: {
    title: "Eid Collection",
    type: "clothing",
    items: [
      { title: "Premium Boys Kurta Pajama 1", category: "Boys",  description: "Classic beige kurta pajama for Eid",       price: "2,500", oldPrice: "3,200", image: "/All Collections/All Collection Images/eid exclusive img/eimg1.webp",  badge: "NEW"  },
      { title: "Luxury Boys Kurta Pajama 2",  category: "Boys",  description: "Festive sky blue kurta pajama",            price: "2,600", oldPrice: "3,400", image: "/All Collections/All Collection Images/eid exclusive img/eimg2.webp",  badge: "NEW"  },
      { title: "Designer Boys Kurta Pajama 3",category: "Boys",  description: "Elegant white kurta with embroidery",      price: "2,700", oldPrice: "3,500", image: "/All Collections/All Collection Images/eid exclusive img/eimg3.webp",  badge: "NEW"  },
      { title: "Royal Boys Kurta Pajama 4",   category: "Boys",  description: "Maroon festive kurta set",                 price: "2,800", oldPrice: "3,800", image: "/All Collections/All Collection Images/eid exclusive img/eimg4.webp",  badge: "HOT"  },
      { title: "Premium Boys Kurta Pajama 5", category: "Men",   description: "Navy blue kurta with waistcoat",           price: "2,900", oldPrice: "3,900", image: "/All Collections/All Collection Images/eid exclusive img/eimg5.webp",  badge: "HOT"  },
      { title: "Classic Men Kurta 1",         category: "Men",   description: "Elegant beige kurta for Eid",              price: "3,500", oldPrice: "4,500", image: "/All Collections/All Collection Images/eid exclusive img/eimg6.webp",  badge: "NEW"  },
      { title: "Premium Men Kurta 2",         category: "Men",   description: "White classic kurta",                      price: "3,600", oldPrice: "4,600", image: "/All Collections/All Collection Images/eid exclusive img/eimg7.webp",  badge: "NEW"  },
      { title: "Designer Men Kurta 3",        category: "Men",   description: "Gray festive kurta",                       price: "3,700", oldPrice: "4,800", image: "/All Collections/All Collection Images/eid exclusive img/eimg8.webp",  badge: "NEW"  },
      { title: "Elegant Girls Eid Dress 1",   category: "Girls", description: "Pink chiffon dress with embroidery",       price: "3,000", oldPrice: "4,000", image: "/All Collections/All Collection Images/eid exclusive img/eimg9.webp",  badge: "NEW"  },
      { title: "Floral Girls Eid Dress 2",    category: "Girls", description: "Floral printed festive frock",             price: "3,200", oldPrice: "4,200", image: "/All Collections/All Collection Images/eid exclusive img/eimg10.webp", badge: "NEW"  },
      { title: "Premium Girls Eid Dress 3",   category: "Girls", description: "Purple party dress for girls",             price: "3,300", oldPrice: "4,300", image: "/All Collections/All Collection Images/eid exclusive img/eimg11.webp", badge: "NEW"  },
      { title: "Luxury Girls Eid Dress 4",    category: "Girls", description: "Peach net dress with embroidery",          price: "3,400", oldPrice: "4,500", image: "/All Collections/All Collection Images/eid exclusive img/eimg12.webp", badge: "NEW"  },
      { title: "Designer Girls Eid Dress 5",  category: "Girls", description: "Pink formal frock",                        price: "3,500", oldPrice: "4,600", image: "/All Collections/All Collection Images/eid exclusive img/eimg13.webp", badge: "HOT"  },
      { title: "Festive Girls Eid Dress 6",   category: "Girls", description: "Brown festive chiffon dress",              price: "3,600", oldPrice: "4,700", image: "/All Collections/All Collection Images/eid exclusive img/eimg14.webp", badge: "HOT"  },
      { title: "Elegant Girls Eid Dress 7",   category: "Girls", description: "Turquoise long festive dress",             price: "3,700", oldPrice: "4,800", image: "/All Collections/All Collection Images/eid exclusive img/eimg15.webp", badge: "HOT"  },
      { title: "Premium Girls Eid Dress 8",   category: "Girls", description: "Black formal dress",                       price: "3,800", oldPrice: "5,000", image: "/All Collections/All Collection Images/eid exclusive img/eimg16.webp", badge: "SALE" },
      { title: "Luxury Women Eid Dress 1",    category: "Women", description: "Maroon premium Eid dress",                 price: "4,500", oldPrice: "6,000", image: "/All Collections/All Collection Images/eid exclusive img/eimg17.webp", badge: "SALE" },
      { title: "Designer Women Eid Dress 2",  category: "Women", description: "Blue long formal dress",                   price: "4,600", oldPrice: "6,200", image: "/All Collections/All Collection Images/eid exclusive img/eimg18.webp", badge: "SALE" },
      { title: "Premium Women Eid Dress 3",   category: "Women", description: "Olive green festive outfit",               price: "4,700", oldPrice: "6,300", image: "/All Collections/All Collection Images/eid exclusive img/eimg19.webp", badge: "SALE" },
      { title: "Elegant Women Eid Dress 4",   category: "Women", description: "Black designer Eid dress",                 price: "4,800", oldPrice: "6,500", image: "/All Collections/All Collection Images/eid exclusive img/eimg20.webp", badge: "SALE" }
    ]
  },

  western: {
    title: "Western Collection",
    type: "clothing",
    items: [
      { title: "Western Outfit 1",  category: "Western", description: "Ombre Midi Dress",              price: "5,500", oldPrice: "8,000", image: "/All Collections/All Collection Images/western img/1.webp",  badge: "NEW"  },
      { title: "Western Outfit 2",  category: "Western", description: "Sage Green Co-ord Set",        price: "6,000", oldPrice: "9,000", image: "/All Collections/All Collection Images/western img/2.webp",  badge: "NEW"  },
      { title: "Western Outfit 3",  category: "Western", description: "Chocolate Brown Maxi",          price: "4,500", oldPrice: "7,000", image: "/All Collections/All Collection Images/western img/3.webp",  badge: "NEW"  },
      { title: "Western Outfit 4",  category: "Western", description: "Olive Longline Tunic",          price: "3,800", oldPrice: "5,500", image: "/All Collections/All Collection Images/western img/4.webp",  badge: "NEW"  },
      { title: "Western Outfit 5",  category: "Western", description: "Floral Print Wrap Dress",       price: "5,000", oldPrice: "7,500", image: "/All Collections/All Collection Images/western img/6.webp",  badge: "HOT"  },
      { title: "Western Outfit 6",  category: "Western", description: "Satin Champagne Lounge Suit",   price: "7,000", oldPrice: "10,000", image: "/All Collections/All Collection Images/western img/11.webp", badge: "NEW"  },
      { title: "Western Outfit 7",  category: "Western", description: "White Blouse & Black Trousers", price: "4,200", oldPrice: "6,000", image: "/All Collections/All Collection Images/western img/12.webp", badge: "SALE" },
      { title: "Western Outfit 8",  category: "Western", description: "Classic Black Power Suit",      price: "8,500", oldPrice: "12,000", image: "/All Collections/All Collection Images/western img/13.webp", badge: "HOT"  },
      { title: "Western Outfit 9",  category: "Western", description: "Denim Shirt & White Denims",    price: "4,500", oldPrice: "7,000", image: "/All Collections/All Collection Images/western img/14.webp", badge: "NEW"  },
      { title: "Western Outfit 10", category: "Western", description: "Sleeveless Black Evening Gown",  price: "9,000", oldPrice: "13,000", image: "/All Collections/All Collection Images/western img/15.webp", badge: "HOT"  },
      { title: "Western Outfit 11", category: "Western", description: "Lavender Silk Slip Dress",      price: "5,500", oldPrice: "8,000", image: "/All Collections/All Collection Images/western img/16.webp", badge: "SALE" },
      { title: "Western Outfit 12", category: "Western", description: "Deep Purple Velvet Skirt Set",  price: "6,500", oldPrice: "9,500", image: "/All Collections/All Collection Images/western img/17.webp", badge: "NEW"  },
      { title: "Western Outfit 13", category: "Western", description: "Boho Lilac Midi Dress",         price: "4,800", oldPrice: "7,000", image: "/All Collections/All Collection Images/western img/18.webp", badge: "SALE" },
      { title: "Western Outfit 14", category: "Western", description: "Cream Peplum Top & Slacks",     price: "3,900", oldPrice: "5,500", image: "/All Collections/All Collection Images/western img/19.webp", badge: "NEW"  },
      { title: "Western Outfit 15", category: "Western", description: "Urban White Tee & Grey Denim",  price: "2,500", oldPrice: "4,000", image: "/All Collections/All Collection Images/western img/20.webp", badge: "SALE" },
      { title: "Western Outfit 16", category: "Western", description: "Midnight Navy Jumpsuit",        price: "6,000", oldPrice: "8,500", image: "/All Collections/All Collection Images/western img/21.webp", badge: "HOT"  },
      { title: "Western Outfit 17", category: "Western", description: "Modern Minimalist White Top",   price: "3,000", oldPrice: "5,000", image: "/All Collections/All Collection Images/western img/22.webp", badge: "NEW"  },
      { title: "Western Outfit 18", category: "Western", description: "Double Denim Utility Set",      price: "7,500", oldPrice: "10,500", image: "/All Collections/All Collection Images/western img/23.webp", badge: "HOT"  },
      { title: "Western Outfit 19", category: "Western", description: "Indigo Casual Co-ord",          price: "5,500", oldPrice: "8,000", image: "/All Collections/All Collection Images/western img/24.webp", badge: "SALE" },
      { title: "Western Outfit 20", category: "Western", description: "Grey Sleeveless Jumpsuit",      price: "5,800", oldPrice: "8,500", image: "/All Collections/All Collection Images/western img/25.webp", badge: "NEW"  },
      { title: "Western Outfit 21", category: "Western", description: "Black Mock-Neck Bodysuit",      price: "3,500", oldPrice: "5,000", image: "/All Collections/All Collection Images/western img/26.webp", badge: "HOT"  },
      { title: "Western Outfit 22", category: "Western", description: "Business Casual Vest & Pant",   price: "6,500", oldPrice: "9,000", image: "/All Collections/All Collection Images/western img/27.webp", badge: "NEW"  },
      { title: "Western Outfit 23", category: "Western", description: "White Tank & Black Wide Legs",   price: "3,200", oldPrice: "5,000", image: "/All Collections/All Collection Images/western img/28.webp", badge: "SALE" },
      { title: "Western Outfit 24", category: "Western", description: "Cloud White Formal Blouse",     price: "3,800", oldPrice: "5,500", image: "/All Collections/All Collection Images/western img/29.webp", badge: "NEW"  },
      { title: "Western Outfit 25", category: "Western", description: "Relaxed Fit Cocoa Loungewear",  price: "4,500", oldPrice: "7,000", image: "/All Collections/All Collection Images/western img/30.webp", badge: "SALE" },
      { title: "Western Outfit 26", category: "Western", description: "Denim Skinny Jeans",            price: "2,800", oldPrice: "4,500", image: "/All Collections/All Collection Images/western img/31.webp", badge: "HOT"  },
      { title: "Western Outfit 27", category: "Western", description: "Turtle Neck & Brown Slacks",    price: "4,200", oldPrice: "6,500", image: "/All Collections/All Collection Images/western img/32.webp", badge: "NEW"  },
      { title: "Western Outfit 28", category: "Western", description: "Oversized Grey Blazer",         price: "6,000", oldPrice: "8,500", image: "/All Collections/All Collection Images/western img/33.webp", badge: "HOT"  },
      { title: "Western Outfit 29", category: "Western", description: "Beige Formal Suit Set",         price: "7,800", oldPrice: "11,000", image: "/All Collections/All Collection Images/western img/34.webp", badge: "NEW"  },
      { title: "Western Outfit 30", category: "Western", description: "Sky Blue Structured Blazer",    price: "5,200", oldPrice: "7,500", image: "/All Collections/All Collection Images/western img/35.webp", badge: "SALE" },
      { title: "Western Outfit 31", category: "Western", description: "Navi Blue Evening Set",         price: "6,500", oldPrice: "9,000", image: "/All Collections/All Collection Images/western img/img 9.webp", badge: "NEW" },
      { title: "Western Outfit 32", category: "Western", description: "Pastel Pink Ruffle Top",        price: "3,500", oldPrice: "5,500", image: "/All Collections/All Collection Images/western img/img10.webp", badge: "SALE" }
    ]
  },

  // ── WINTER ────────────────────────────────────────────────
  winter: {
    title: "Winter Collection",
    type: "clothing",
    items: [
      { title: "Winter Outfit 1",  category: "Winter", description: "Basic V-Neck Sweater",              price: "4,000", oldPrice: "7,000", image: "/All Collections/All Collection Images/winter img/women1.jpg",  badge: "NEW"  },
      { title: "Winter Outfit 2",  category: "Winter", description: "Biker Jacket With Pinstripe Detail", price: "4,000", oldPrice: "8,000", image: "/All Collections/All Collection Images/winter img/women2.jpg",  badge: "NEW"  },
      { title: "Winter Outfit 3",  category: "Winter", description: "Notched Collar Blazer",              price: "4,000", oldPrice: "7,000", image: "/All Collections/All Collection Images/winter img/women3.jpg",  badge: "NEW"  },
      { title: "Winter Outfit 4",  category: "Winter", description: "Crew Neck Sweater",                  price: "2,000", oldPrice: "5,000", image: "/All Collections/All Collection Images/winter img/women4.jpg",  badge: "NEW"  },
      { title: "Winter Outfit 5",  category: "Winter", description: "Super Cropped Denim Jacket",         price: "3,000", oldPrice: "6,000", image: "/All Collections/All Collection Images/winter img/women5.jpg",  badge: "NEW"  },
      { title: "Winter Outfit 6",  category: "Winter", description: "Soft Power Top",                     price: "5,000", oldPrice: "7,000", image: "/All Collections/All Collection Images/winter img/women12.jpg", badge: "NEW"  },
      { title: "Winter Outfit 7",  category: "Winter", description: "Cropped Pointelle Detail Sweater",   price: "6,500", oldPrice: "8,000", image: "/All Collections/All Collection Images/winter img/women18.jpg", badge: "NEW"  },
      { title: "Winter Outfit 8",  category: "Winter", description: "Cocoa Calm Pullover",                price: "7,500", oldPrice: "9,000", image: "/All Collections/All Collection Images/winter img/women19.jpg", badge: "NEW"  },
      { title: "Winter Outfit 9",  category: "Winter", description: "Faux Leather Bomber Jacket",         price: "2,000", oldPrice: "5,000", image: "/All Collections/All Collection Images/winter img/women17.jpg", badge: "HOT"  },
      { title: "Winter Outfit 10", category: "Winter", description: "Modern Ease Shirt",                  price: "5,000", oldPrice: "8,000", image: "/All Collections/All Collection Images/winter img/women20.jpg", badge: "HOT"  },
      { title: "Winter Outfit 11", category: "Winter", description: "Flannelette Cardigan",               price: "1,500", oldPrice: "2,000", image: "/All Collections/All Collection Images/winter img/women6.jpg",  badge: "HOT"  },
      { title: "Winter Outfit 12", category: "Winter", description: "Masoori/Chiffon",                    price: "3,900", oldPrice: "5,000", image: "/All Collections/All Collection Images/winter img/women7.jpg",  badge: "HOT"  },
      { title: "Winter Outfit 13", category: "Winter", description: "Emerald Royal Grace",                price: "4,000", oldPrice: "7,000", image: "/All Collections/All Collection Images/winter img/women8.jpg",  badge: "SALE" },
      { title: "Winter Outfit 14", category: "Winter", description: "Blush Velvet Dream",                 price: "5,000", oldPrice: "9,000", image: "/All Collections/All Collection Images/winter img/women9.jpg",  badge: "SALE" },
      { title: "Winter Outfit 15", category: "Winter", description: "Frosted Sky Elegance",               price: "2,900", oldPrice: "4,000", image: "/All Collections/All Collection Images/winter img/women10.jpg", badge: "SALE" },
      { title: "Winter Outfit 16", category: "Winter", description: "Midnight Modern Muse",               price: "3,500", oldPrice: "5,000", image: "/All Collections/All Collection Images/winter img/women11.jpg", badge: "SALE" },
      { title: "Winter Outfit 17", category: "Winter", description: "Silver Noor Ensemble",               price: "5,000", oldPrice: "6,500", image: "/All Collections/All Collection Images/winter img/women13.jpg", badge: "NEW"  },
      { title: "Winter Outfit 18", category: "Winter", description: "Ivory Bloom Co-Ord",                 price: "6,500", oldPrice: "8,500", image: "/All Collections/All Collection Images/winter img/women14.jpg", badge: "NEW"  },
      { title: "Winter Outfit 19", category: "Winter", description: "Champagne Riwaayat Set",             price: "5,000", oldPrice: "8,000", image: "/All Collections/All Collection Images/winter img/women15.jpg", badge: "NEW"  },
      { title: "Winter Outfit 20", category: "Winter", description: "Emerald Zehra Luxe",                 price: "3,000", oldPrice: "5,000", image: "/All Collections/All Collection Images/winter img/women16.jpg", badge: "NEW"  }
    ]
  },

  // ── SUMMER ────────────────────────────────────────────────
  summer: {
    title: "Summer Collection",
    type: "clothing",
    items: [
      { title: "Silk Print Outfit 1",        category: "Summer Silk Edit",         description: "Lightweight silk print outfit perfect for warm summer days",         price: "5,000",  image: "/All Collections/All Collection Images/summer img/simg1.webp",  badge: "NEW"  },
      { title: "Silk Print Outfit 2",        category: "Summer Silk Edit",         description: "Premium stitched silk design crafted for summer comfort",            price: "6,000",  image: "/All Collections/All Collection Images/summer img/simg2.webp",  badge: "NEW"  },
      { title: "Silk Print Outfit 3",        category: "Summer Silk Edit",         description: "Soft fabric silk ensemble designed for everyday summer wear",        price: "7,000",  image: "/All Collections/All Collection Images/summer img/simg3.webp",  badge: "NEW"  },
      { title: "Silk Print Outfit 4",        category: "Summer Silk Edit",         description: "Breathable silk print collection for a graceful summer look",        price: "8,000",  image: "/All Collections/All Collection Images/summer img/simg4.webp",  badge: "NEW"  },
      { title: "Modern Archives Outfit 1",   category: "Modern Summer Line",       description: "Contemporary summer outfit with elegant detailing",                  price: "4,500",  image: "/All Collections/All Collection Images/summer img/simg5.webp",  badge: "NEW"  },
      { title: "Modern Archives Outfit 2",   category: "Modern Summer Line",       description: "Timeless summer design tailored for comfort and style",              price: "5,500",  image: "/All Collections/All Collection Images/summer img/simg6.webp",  badge: "NEW"  },
      { title: "Modern Archives Outfit 3",   category: "Modern Summer Line",       description: "Minimal yet classy summer wear with premium finish",                 price: "6,500",  image: "/All Collections/All Collection Images/summer img/simg7.webp",  badge: "NEW"  },
      { title: "Modern Archives Outfit 4",   category: "Modern Summer Line",       description: "Elegant summer collection featuring refined craftsmanship",          price: "7,500",  image: "/All Collections/All Collection Images/summer img/simg8.webp",  badge: "NEW"  },
      { title: "Glamorous Outfit 1",         category: "Luxury Glam Edit",         description: "Statement summer outfit designed for festive gatherings",            price: "12,000", image: "/All Collections/All Collection Images/summer img/simg9.webp",  badge: "HOT"  },
      { title: "Glamorous Outfit 2",         category: "Luxury Glam Edit",         description: "Luxury summer attire with premium embellishments",                   price: "15,000", image: "/All Collections/All Collection Images/summer img/simg10.webp", badge: "HOT"  },
      { title: "Glamorous Outfit 3",         category: "Luxury Glam Edit",         description: "Exclusive designer summer ensemble for special occasions",           price: "18,000", image: "/All Collections/All Collection Images/summer img/simg11.webp", badge: "HOT"  },
      { title: "Glamorous Outfit 4",         category: "Luxury Glam Edit",         description: "Premium festive summer wear with elegant stitching",                 price: "20,000", image: "/All Collections/All Collection Images/summer img/simg12.webp", badge: "HOT"  },
      { title: "Eid Special Outfit 1",       category: "Festive Summer Collection",description: "Specially designed festive outfit for summer celebrations",          price: "14,000", image: "/All Collections/All Collection Images/summer img/simg13.webp", badge: "SALE" },
      { title: "Eid Special Outfit 2",       category: "Festive Summer Collection",description: "Premium eid collection crafted for summer festivities",              price: "16,000", image: "/All Collections/All Collection Images/summer img/simg14.webp", badge: "SALE" },
      { title: "Eid Special Outfit 3",       category: "Festive Summer Collection",description: "Graceful embroidered outfit for elegant summer events",              price: "19,000", image: "/All Collections/All Collection Images/summer img/simg15.webp", badge: "SALE" },
      { title: "Eid Special Outfit 4",       category: "Festive Summer Collection",description: "Luxury festive summer dress with premium detailing",                 price: "22,000", image: "/All Collections/All Collection Images/summer img/simg16.webp", badge: "SALE" },
      { title: "M.Classic Outfit 1",         category: "Signature Classic Line",   description: "Signature summer outfit designed for everyday elegance",             price: "5,000",  image: "/All Collections/All Collection Images/summer img/simg17.webp", badge: "NEW"  },
      { title: "M.Classic Outfit 2",         category: "Signature Classic Line",   description: "Comfortable and stylish summer classic wear",                        price: "6,500",  image: "/All Collections/All Collection Images/summer img/simg18.webp", badge: "NEW"  },
      { title: "M.Classic Outfit 3",         category: "Signature Classic Line",   description: "Traditional inspired summer collection with modern touch",           price: "8,000",  image: "/All Collections/All Collection Images/summer img/simg19.webp", badge: "NEW"  },
      { title: "M.Classic Outfit 4",         category: "Signature Classic Line",   description: "Premium quality classic summer outfit with fine stitching",          price: "10,000", image: "/All Collections/All Collection Images/summer img/simg20.webp", badge: "NEW"  }
    ]
  },

  // ── MODEST ────────────────────────────────────────────────
  modest: {
    title: "Modest Collection",
    type: "clothing",
    items: [
      { title: "Elegant Grey Abaya",       category: "Modest Wear", description: "Soft grey long abaya with minimal design",          price: "4,500", image: "/All Collections/All Collection Images/modest img/modestimg1.webp",  badge: "NEW"  },
      { title: "Classic Black Abaya",      category: "Modest Wear", description: "Premium black modest wear outfit",                   price: "4,800", image: "/All Collections/All Collection Images/modest img/modestimg2.webp",  badge: "HOT"  },
      { title: "Luxury Black Open Abaya",  category: "Modest Wear", description: "Elegant open style abaya for formal wear",           price: "5,000", image: "/All Collections/All Collection Images/modest img/modestimg3.webp",  badge: "HOT"  },
      { title: "Royal Blue Abaya",         category: "Modest Wear", description: "Bright blue modest dress for special occasions",     price: "5,200", image: "/All Collections/All Collection Images/modest img/modestimg4.webp",  badge: "NEW"  },
      { title: "Beige Classic Abaya",      category: "Modest Wear", description: "Simple and elegant beige abaya",                    price: "4,700", image: "/All Collections/All Collection Images/modest img/modestimg5.webp",  badge: "SALE" },
      { title: "Minimal Black Abaya",      category: "Modest Wear", description: "Plain black modest outfit with clean cut",           price: "4,600", image: "/All Collections/All Collection Images/modest img/modestimg6.webp",  badge: "NEW"  },
      { title: "Soft Grey Modest Dress",   category: "Modest Wear", description: "Comfortable long modest dress",                     price: "4,400", image: "/All Collections/All Collection Images/modest img/modestimg7.webp",  badge: "NEW"  },
      { title: "Dusty Blue Abaya",         category: "Modest Wear", description: "Modern dusty blue modest outfit",                   price: "5,100", image: "/All Collections/All Collection Images/modest img/modestimg8.webp",  badge: "HOT"  },
      { title: "Emerald Green Abaya",      category: "Modest Wear", description: "Luxury green modest formal wear",                   price: "5,500", image: "/All Collections/All Collection Images/modest img/modestimg9.webp",  badge: "HOT"  },
      { title: "Soft Pink Abaya",          category: "Modest Wear", description: "Elegant pastel pink modest dress",                  price: "4,900", image: "/All Collections/All Collection Images/modest img/modestimg10.webp", badge: "SALE" },
      { title: "Maroon Modest Dress",      category: "Modest Wear", description: "Deep maroon long modest outfit",                    price: "5,300", image: "/All Collections/All Collection Images/modest img/modestimg11.webp", badge: "NEW"  },
      { title: "Nude Beige Abaya",         category: "Modest Wear", description: "Soft nude tone modest wear",                        price: "4,700", image: "/All Collections/All Collection Images/modest img/modestimg12.webp", badge: "NEW"  },
      { title: "Classic Taupe Dress",      category: "Modest Wear", description: "Elegant taupe colored modest dress",                price: "5,000", image: "/All Collections/All Collection Images/modest img/modestimg13.webp", badge: "HOT"  },
      { title: "Soft Brown Abaya",         category: "Modest Wear", description: "Stylish brown modest outfit",                       price: "5,200", image: "/All Collections/All Collection Images/modest img/modestimg14.webp", badge: "HOT"  },
      { title: "Rose Pink Abaya",          category: "Modest Wear", description: "Elegant rose pink long dress",                      price: "5,100", image: "/All Collections/All Collection Images/modest img/modestimg15.webp", badge: "SALE" },
      { title: "White Elegant Abaya",      category: "Modest Wear", description: "Pure white minimal modest dress",                   price: "4,800", image: "/All Collections/All Collection Images/modest img/modestimg16.webp", badge: "NEW"  },
      { title: "Black Premium Abaya",      category: "Modest Wear", description: "Luxury black modest collection",                    price: "5,600", image: "/All Collections/All Collection Images/modest img/modestimg17.webp", badge: "HOT"  },
      { title: "Elegant Black Lace Abaya", category: "Modest Wear", description: "Formal luxury modest wear",                         price: "6,000", image: "/All Collections/All Collection Images/modest img/modestimg18.webp", badge: "HOT"  },
      { title: "Grey Formal Abaya",        category: "Modest Wear", description: "Formal grey modest outfit",                         price: "5,300", image: "/All Collections/All Collection Images/modest img/modestimg19.webp", badge: "SALE" },
      { title: "Teal Green Modest Dress",  category: "Modest Wear", description: "Modern teal green long dress",                      price: "5,400", image: "/All Collections/All Collection Images/modest img/modestimg20.webp", badge: "NEW"  }
    ]
  },

  // ── LUXURY ────────────────────────────────────────────────
  luxury: {
    title: "Luxury Collection",
    type: "clothing",
    items: [
      { title: "Royal Blue Luxury Gown",        category: "Luxury Girls", description: "Premium light blue designer gown with elegant embroidery",    price: "82,000", oldPrice: "90,000", image: "/All Collections/All Collection Images/luxury img/limg1.webp",  badge: "PREMIUM"   },
      { title: "Soft Pink Luxury Dress",         category: "Luxury Girls", description: "Elegant pastel pink luxury outfit with fine detailing",        price: "55,000", oldPrice: "62,000", image: "/All Collections/All Collection Images/luxury img/limg2.webp",  badge: "NEW"       },
      { title: "Red Designer Luxury Wear",       category: "Luxury Girls", description: "Bold red premium dress for wedding & special events",          price: "55,000", oldPrice: "60,000", image: "/All Collections/All Collection Images/luxury img/limg3.webp",  badge: "HOT"       },
      { title: "Black Elegant Party Wear",       category: "Luxury Girls", description: "Luxury black outfit with modern stylish cut",                  price: "65,000", oldPrice: "70,000", image: "/All Collections/All Collection Images/luxury img/limg4.webp",  badge: "LIMITED"   },
      { title: "Peach Embroidered Luxury Suit",  category: "Luxury Girls", description: "Premium peach outfit with detailed hand embroidery",           price: "85,000", oldPrice: "90,000", image: "/All Collections/All Collection Images/luxury img/limg5.webp",  badge: "PREMIUM"   },
      { title: "Classic Nude Formal Dress",      category: "Luxury Girls", description: "Elegant nude formal luxury collection dress",                  price: "90,000", oldPrice: "95,000", image: "/All Collections/All Collection Images/luxury img/limg6.webp",  badge: "NEW"       },
      { title: "Black Gold Royal Outfit",        category: "Luxury Girls", description: "Black & gold heavily embroidered luxury outfit",               price: "80,000", oldPrice: "85,000", image: "/All Collections/All Collection Images/luxury img/limg7.webp",  badge: "HOT"       },
      { title: "Golden Beige Designer Wear",     category: "Luxury Girls", description: "Premium golden beige wedding collection outfit",               price: "75,000", oldPrice: "80,000", image: "/All Collections/All Collection Images/luxury img/limg8.webp",  badge: "LIMITED"   },
      { title: "Rose Pink Luxury Gown",          category: "Luxury Girls", description: "Soft rose pink luxury outfit with elegant finish",             price: "75,000", oldPrice: "80,000", image: "/All Collections/All Collection Images/luxury img/limg9.webp",  badge: "PREMIUM"   },
      { title: "Mint Green Designer Dress",      category: "Luxury Girls", description: "Luxury mint green dress with modern design",                   price: "89,000", oldPrice: "92,000", image: "/All Collections/All Collection Images/luxury img/limg10.webp", badge: "NEW"       },
      { title: "Purple Royal Party Wear",        category: "Luxury Girls", description: "Deep purple luxury outfit perfect for weddings",               price: "81,000", oldPrice: "87,000", image: "/All Collections/All Collection Images/luxury img/limg11.webp", badge: "HOT"       },
      { title: "Silver Grey Premium Dress",      category: "Luxury Girls", description: "Luxury silver grey outfit with classy embroidery",             price: "57,000", oldPrice: "60,000", image: "/All Collections/All Collection Images/luxury img/limg12.webp", badge: "LIMITED"   },
      { title: "Ice Blue Wedding Wear",          category: "Luxury Girls", description: "Premium ice blue designer wedding collection dress",            price: "57,000", oldPrice: "65,000", image: "/All Collections/All Collection Images/luxury img/limg13.webp", badge: "PREMIUM"   },
      { title: "Emerald Green Royal Dress",      category: "Luxury Girls", description: "Elegant emerald green heavy embroidered outfit",               price: "62,000", oldPrice: "70,000", image: "/All Collections/All Collection Images/luxury img/limg14.webp", badge: "HOT"       },
      { title: "Soft Beige Luxury Wear",         category: "Luxury Girls", description: "Premium white outfit with luxury finish",                      price: "50,000", oldPrice: "58,000", image: "/All Collections/All Collection Images/luxury img/limg15.webp", badge: "NEW"       },
      { title: "Deep Red Royal Collection",      category: "Luxury Girls", description: "Heavy deep red luxury dress for bridal events",                price: "68,000", oldPrice: "75,000", image: "/All Collections/All Collection Images/luxury img/limg16.webp", badge: "LIMITED"   },
      { title: "Maroon Premium Gown",            category: "Luxury Girls", description: "Luxury maroon designer gown for wedding season",               price: "68,000", oldPrice: "72,000", image: "/All Collections/All Collection Images/luxury img/limg17.webp", badge: "HOT"       },
      { title: "Dark Green Elite Dress",         category: "Luxury Girls", description: "Premium dark green outfit with rich embroidery",               price: "65,000", oldPrice: "68,000", image: "/All Collections/All Collection Images/luxury img/limg18.webp", badge: "PREMIUM"   },
      { title: "Red & Gold Bridal Luxury",       category: "Luxury Girls", description: "Luxury red & gold wedding collection masterpiece",             price: "78,000", oldPrice: "85,000", image: "/All Collections/All Collection Images/luxury img/limg19.webp", badge: "EXCLUSIVE" },
      { title: "Royal Velvet Signature Dress",   category: "Luxury Girls", description: "Signature velvet luxury outfit with premium look",             price: "82,000", oldPrice: "90,000", image: "/All Collections/All Collection Images/luxury img/limg20.webp", badge: "EXCLUSIVE" }
    ]
  },

  // ── MEN ───────────────────────────────────────────────────
  men: {
    title: "Men's Collection",
    type: "clothing",
    items: [
      { title: "Men Black Kurta",         category: "Men Collection", description: "Elegant black traditional men's outfit",    price: "4,500", image: "/All Collections/All Collection Images/men collection img/menimg1.webp",  badge: "NEW"  },
      { title: "Cream Formal Kurta",      category: "Men Collection", description: "Classic cream formal wear for men",         price: "4,800", image: "/All Collections/All Collection Images/men collection img/menimg2.webp",  badge: "HOT"  },
      { title: "Light Green Kurta",       category: "Men Collection", description: "Modern light green traditional outfit",     price: "5,000", image: "/All Collections/All Collection Images/men collection img/menimg3.webp",  badge: "NEW"  },
      { title: "Brown Formal Kurta",      category: "Men Collection", description: "Stylish brown men's kurta design",          price: "5,200", image: "/All Collections/All Collection Images/men collection img/menimg4.webp",  badge: "HOT"  },
      { title: "Grey Men Kurta",          category: "Men Collection", description: "Simple grey traditional wear",              price: "4,700", image: "/All Collections/All Collection Images/men collection img/menimg5.webp",  badge: "SALE" },
      { title: "Beige Kurta Style",       category: "Men Collection", description: "Elegant beige men's outfit",                price: "4,600", image: "/All Collections/All Collection Images/men collection img/menimg6.webp",  badge: "NEW"  },
      { title: "Dark Brown Kurta",        category: "Men Collection", description: "Formal dark brown traditional wear",        price: "4,400", image: "/All Collections/All Collection Images/men collection img/menimg7.webp",  badge: "NEW"  },
      { title: "Black Waistcoat Style",   category: "Men Collection", description: "Modern black waistcoat outfit",             price: "5,100", image: "/All Collections/All Collection Images/men collection img/menimg8.webp",  badge: "HOT"  },
      { title: "Charcoal Formal Wear",    category: "Men Collection", description: "Luxury charcoal men's outfit",              price: "5,500", image: "/All Collections/All Collection Images/men collection img/menimg9.webp",  badge: "HOT"  },
      { title: "Navy Blue Kurta",         category: "Men Collection", description: "Elegant navy blue traditional wear",        price: "4,900", image: "/All Collections/All Collection Images/men collection img/menimg10.webp", badge: "SALE" },
      { title: "Maroon Formal Kurta",     category: "Men Collection", description: "Deep maroon men's traditional outfit",      price: "5,300", image: "/All Collections/All Collection Images/men collection img/menimg11.webp", badge: "NEW"  },
      { title: "Off White Kurta",         category: "Men Collection", description: "Soft off white traditional wear",           price: "4,700", image: "/All Collections/All Collection Images/men collection img/menimg12.webp", badge: "NEW"  },
      { title: "Taupe Formal Kurta",      category: "Men Collection", description: "Elegant taupe men's dress",                 price: "5,000", image: "/All Collections/All Collection Images/men collection img/menimg13.webp", badge: "HOT"  },
      { title: "Brown Classic Kurta",     category: "Men Collection", description: "Stylish brown traditional wear",            price: "5,200", image: "/All Collections/All Collection Images/men collection img/menimg14.webp", badge: "HOT"  },
      { title: "Royal Blue Kurta",        category: "Men Collection", description: "Elegant royal blue men's outfit",           price: "5,100", image: "/All Collections/All Collection Images/men collection img/menimg15.webp", badge: "SALE" },
      { title: "White Formal Kurta",      category: "Men Collection", description: "Elegant men's wear outfit",                 price: "4,800", image: "/All Collections/All Collection Images/men collection img/menimg16.webp", badge: "NEW"  },
      { title: "Black Premium Waistcoat", category: "Men Collection", description: "Luxury black waistcoat style",              price: "5,600", image: "/All Collections/All Collection Images/men collection img/menimg17.webp", badge: "HOT"  },
      { title: "Black Lace Style Kurta",  category: "Men Collection", description: "Formal black detailed wear",                price: "6,000", image: "/All Collections/All Collection Images/men collection img/menimg18.webp", badge: "HOT"  },
      { title: "Grey Formal Kurta",       category: "Men Collection", description: "Formal grey men's outfit",                  price: "5,300", image: "/All Collections/All Collection Images/men collection img/menimg19.webp", badge: "SALE" },
      { title: "Teal Green Kurta",        category: "Men Collection", description: "Modern teal green men's dress",             price: "5,400", image: "/All Collections/All Collection Images/men collection img/menimg20.webp", badge: "NEW"  }
    ]
  },

  // ── KIDS ──────────────────────────────────────────────────
  kids: {
    title: "Kids Collection",
    type: "clothing",
    items: [
      { title: "Red Festive Frock",       category: "Girls Collection", description: "Beautiful red traditional frock for festive wear", price: "1,500", image: "/All Collections/All Collection Images/kids image/kimg1.webp",  badge: "NEW" },
      { title: "Orange Party Dress",      category: "Girls Collection", description: "Stylish orange sleeveless party dress",            price: "1,600", image: "/All Collections/All Collection Images/kids image/kimg2.webp",  badge: "NEW" },
      { title: "Peach Embroidered Suit",  category: "Girls Collection", description: "Soft peach traditional suit with embroidery",      price: "1,700", image: "/All Collections/All Collection Images/kids image/kimg3.webp",  badge: "NEW" },
      { title: "Light Green Gown",        category: "Girls Collection", description: "Elegant light green maxi gown for girls",          price: "1,800", image: "/All Collections/All Collection Images/kids image/kimg4.webp",  badge: "NEW" },
      { title: "Yellow Casual Set",       category: "Girls Collection", description: "Trendy yellow kurti set for casual wear",          price: "1,900", image: "/All Collections/All Collection Images/kids image/kimg5.webp",  badge: "HOT" },
      { title: "Maroon Fancy Dress",      category: "Girls Collection", description: "Maroon embroidered festive outfit",                price: "2,000", image: "/All Collections/All Collection Images/kids image/kimg6.webp",  badge: "HOT" },
      { title: "Pink Casual Frock",       category: "Girls Collection", description: "Soft pink casual frock for daily wear",            price: "2,100", image: "/All Collections/All Collection Images/kids image/kimg7.webp",  badge: "NEW" },
      { title: "Teal Traditional Suit",   category: "Girls Collection", description: "Elegant teal shalwar kameez set",                 price: "2,200", image: "/All Collections/All Collection Images/kids image/kimg8.webp",  badge: "NEW" },
      { title: "Sky Blue Party Dress",    category: "Girls Collection", description: "Sky blue party wear dress with dupatta",           price: "2,300", image: "/All Collections/All Collection Images/kids image/kimg9.webp",  badge: "NEW" },
      { title: "Navy Blue Ethnic Set",    category: "Girls Collection", description: "Traditional navy blue ethnic outfit",              price: "2,400", image: "/All Collections/All Collection Images/kids image/kimg10.webp", badge: "NEW" },
      { title: "Cream Maxi Dress",        category: "Girls Collection", description: "Long cream maxi for formal occasions",             price: "2,500", image: "/All Collections/All Collection Images/kids image/kimg11.webp", badge: "HOT" },
      { title: "Black & Grey Lehenga",    category: "Girls Collection", description: "Stylish black and grey lehenga set",              price: "2,600", image: "/All Collections/All Collection Images/kids image/kimg12.webp", badge: "HOT" },
      { title: "Mint Green Suit",         category: "Girls Collection", description: "Simple mint green traditional suit",              price: "2,700", image: "/All Collections/All Collection Images/kids image/kimg13.webp", badge: "NEW" },
      { title: "Black Embroidered Dress", category: "Girls Collection", description: "Black dress with golden embroidery",              price: "2,800", image: "/All Collections/All Collection Images/kids image/kimg14.webp", badge: "NEW" },
      { title: "Yellow Festive Gown",     category: "Girls Collection", description: "Bright yellow festive gown for girls",            price: "2,900", image: "/All Collections/All Collection Images/kids image/kimg15.webp", badge: "HOT" },
      { title: "Green Flared Maxi",       category: "Girls Collection", description: "Flowy green maxi dress",                          price: "3,000", image: "/All Collections/All Collection Images/kids image/kimg16.webp", badge: "HOT" },
      { title: "Mustard Traditional Set", category: "Girls Collection", description: "Mustard color ethnic wear for girls",             price: "3,100", image: "/All Collections/All Collection Images/kids image/kimg17.webp", badge: "NEW" },
      { title: "Pastel Blue Suit",        category: "Girls Collection", description: "Soft pastel blue shalwar kameez",                 price: "3,200", image: "/All Collections/All Collection Images/kids image/kimg18.webp", badge: "NEW" },
      { title: "Turquoise Casual Set",    category: "Girls Collection", description: "Comfortable turquoise 2-piece outfit",            price: "3,300", image: "/All Collections/All Collection Images/kids image/kimg19.webp", badge: "HOT" },
      { title: "Beige Formal Gown",       category: "Girls Collection", description: "Elegant beige formal gown",                       price: "3,400", image: "/All Collections/All Collection Images/kids image/kimg20.webp", badge: "HOT" }
    ]
  },

  // ── PARTY ─────────────────────────────────────────────────
  party: {
    title: "Party Collection",
    type: "clothing",
    items: [
      { title: "Party Wear Outfit 1",  category: "Party Collection", description: "Elegant party wear traditional dress", price: "1,500", image: "/All Collections/All Collection Images/party img/pimg1.webp",  badge: "NEW" },
      { title: "Party Wear Outfit 2",  category: "Party Collection", description: "Stylish party wear design",           price: "1,600", image: "/All Collections/All Collection Images/party img/pimg2.webp",  badge: "NEW" },
      { title: "Party Wear Outfit 3",  category: "Party Collection", description: "Beautiful party outfit for girls",    price: "1,700", image: "/All Collections/All Collection Images/party img/pimg3.webp",  badge: "HOT" },
      { title: "Party Wear Outfit 4",  category: "Party Collection", description: "Premium party dress design",          price: "1,800", image: "/All Collections/All Collection Images/party img/pimg4.webp",  badge: "NEW" },
      { title: "Party Wear Outfit 5",  category: "Party Collection", description: "Modern party wear style",             price: "1,900", image: "/All Collections/All Collection Images/party img/pimg5.webp",  badge: "HOT" },
      { title: "Party Wear Outfit 6",  category: "Party Collection", description: "Elegant party dress",                 price: "2,000", image: "/All Collections/All Collection Images/party img/pimg6.webp",  badge: "HOT" },
      { title: "Party Wear Outfit 7",  category: "Party Collection", description: "Stylish party outfit",                price: "2,100", image: "/All Collections/All Collection Images/party img/pimg7.webp",  badge: "NEW" },
      { title: "Party Wear Outfit 8",  category: "Party Collection", description: "Beautiful party wear design",         price: "2,200", image: "/All Collections/All Collection Images/party img/pimg8.webp",  badge: "NEW" },
      { title: "Party Wear Outfit 9",  category: "Party Collection", description: "Luxury party wear dress",             price: "2,300", image: "/All Collections/All Collection Images/party img/pimg9.webp",  badge: "HOT" },
      { title: "Party Wear Outfit 10", category: "Party Collection", description: "Party wear stylish outfit",           price: "2,400", image: "/All Collections/All Collection Images/party img/pimg10.webp", badge: "NEW" },
      { title: "Party Wear Outfit 11", category: "Party Collection", description: "Elegant modern party dress",          price: "2,500", image: "/All Collections/All Collection Images/party img/pimg11.webp", badge: "HOT" },
      { title: "Party Wear Outfit 12", category: "Party Collection", description: "Beautiful party outfit",              price: "2,600", image: "/All Collections/All Collection Images/party img/pimg12.webp", badge: "HOT" },
      { title: "Party Wear Outfit 13", category: "Party Collection", description: "Stylish party wear",                  price: "2,700", image: "/All Collections/All Collection Images/party img/pimg13.webp", badge: "NEW" },
      { title: "Party Wear Outfit 14", category: "Party Collection", description: "Premium party dress",                 price: "2,800", image: "/All Collections/All Collection Images/party img/pimg14.webp", badge: "NEW" },
      { title: "Party Wear Outfit 15", category: "Party Collection", description: "Luxury party design",                 price: "2,900", image: "/All Collections/All Collection Images/party img/pimg15.webp", badge: "HOT" },
      { title: "Party Wear Outfit 16", category: "Party Collection", description: "Modern party outfit",                 price: "3,000", image: "/All Collections/All Collection Images/party img/pimg16.webp", badge: "HOT" },
      { title: "Party Wear Outfit 17", category: "Party Collection", description: "Elegant party wear",                  price: "3,100", image: "/All Collections/All Collection Images/party img/pimg17.webp", badge: "NEW" },
      { title: "Party Wear Outfit 18", category: "Party Collection", description: "Beautiful party dress",               price: "3,200", image: "/All Collections/All Collection Images/party img/pimg18.webp", badge: "NEW" },
      { title: "Party Wear Outfit 19", category: "Party Collection", description: "Stylish party wear design",           price: "3,300", image: "/All Collections/All Collection Images/party img/pimg19.webp", badge: "HOT" },
      { title: "Party Wear Outfit 20", category: "Party Collection", description: "Luxury party outfit",                 price: "3,400", image: "/All Collections/All Collection Images/party img/pimg20.webp", badge: "HOT" }
    ]
  }

};
