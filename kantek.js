/**
 * KANTEK.JS
 * JavaScript untuk website Kantin Teknik FTUI
 * Fitur: Dark mode, Render booth otomatis, Filter menu, Smooth scroll, Animasi, dll
 */

document.addEventListener('DOMContentLoaded', function() {
    // ==================== DATA BOOTH ====================
    const booths = [
        {
            nama: "Booth A - Nasi Gila Bang Jali",
            foto: "photos/boothA.jpg",
            whatsapp: "6282268744986",
            menu: [
                { nama: "Nasi Gila Pedas Level 3", harga: 18000, kalori: 650, favorit: true },
                { nama: "Nasi Gila Original", harga: 15000, kalori: 580, favorit: false },
                { nama: "Nasi Gila Spesial Ayam", harga: 20000, kalori: 700, favorit: true },
                { nama: "Mie Goreng Gila", harga: 17000, kalori: 620, favorit: false }
            ]
        },
        {
            nama: "Booth B - Soto Teknik Bu Siti",
            foto: "photos/boothB.jpg",
            whatsapp: "6281234567891",
            menu: [
                { nama: "Soto Ayam Kampung", harga: 17000, kalori: 450, favorit: true },
                { nama: "Soto Daging Sapi", harga: 22000, kalori: 520, favorit: false },
                { nama: "Soto Spesial Komplit", harga: 25000, kalori: 650, favorit: true },
                { nama: "Lontong Soto", harga: 15000, kalori: 400, favorit: false }
            ]
        },
        {
            nama: "Booth C - Coffee Corner Engineers",
            foto: "photos/boothC.jpg",
            whatsapp: "6281234567892",
            menu: [
                { nama: "Espresso Double Shot", harga: 15000, kalori: 10, favorit: false },
                { nama: "Kopi Susu Aren Gula Jawa", harga: 18000, kalori: 220, favorit: true },
                { nama: "Matcha Latte", harga: 20000, kalori: 180, favorit: false },
                { nama: "V60 Single Origin Aceh Gayo", harga: 22000, kalori: 5, favorit: true },
                { nama: "Roti Bakar Coklat Keju", harga: 15000, kalori: 300, favorit: false }
            ]
        },
        {
            nama: "Booth A - Nasi Gila Bang Jali",
            foto: "photos/boothA.jpg",
            whatsapp: "6282268744986",
            menu: [
                { nama: "Nasi Gila Pedas Level 3", harga: 18000, kalori: 650, favorit: true },
                { nama: "Nasi Gila Original", harga: 15000, kalori: 580, favorit: false },
                { nama: "Nasi Gila Spesial Ayam", harga: 20000, kalori: 700, favorit: true },
                { nama: "Mie Goreng Gila", harga: 17000, kalori: 620, favorit: false }
            ]
        },
        {
            nama: "Booth B - Soto Teknik Bu Siti",
            foto: "photos/boothB.jpg",
            whatsapp: "6281234567891",
            menu: [
                { nama: "Soto Ayam Kampung", harga: 17000, kalori: 450, favorit: true },
                { nama: "Soto Daging Sapi", harga: 22000, kalori: 520, favorit: false },
                { nama: "Soto Spesial Komplit", harga: 25000, kalori: 650, favorit: true },
                { nama: "Lontong Soto", harga: 15000, kalori: 400, favorit: false }
            ]
        },
        {
            nama: "Booth C - Coffee Corner Engineers",
            foto: "photos/boothC.jpg",
            whatsapp: "6281234567892",
            menu: [
                { nama: "Espresso Double Shot", harga: 15000, kalori: 10, favorit: false },
                { nama: "Kopi Susu Aren Gula Jawa", harga: 18000, kalori: 220, favorit: true },
                { nama: "Matcha Latte", harga: 20000, kalori: 180, favorit: false },
                { nama: "V60 Single Origin Aceh Gayo", harga: 22000, kalori: 5, favorit: true },
                { nama: "Roti Bakar Coklat Keju", harga: 15000, kalori: 300, favorit: false }
            ]
        },
        {
            nama: "Booth A - Nasi Gila Bang Jali",
            foto: "photos/boothA.jpg",
            whatsapp: "6282268744986",
            menu: [
                { nama: "Nasi Gila Pedas Level 3", harga: 18000, kalori: 650, favorit: true },
                { nama: "Nasi Gila Original", harga: 15000, kalori: 580, favorit: false },
                { nama: "Nasi Gila Spesial Ayam", harga: 20000, kalori: 700, favorit: true },
                { nama: "Mie Goreng Gila", harga: 17000, kalori: 620, favorit: false }
            ]
        },
        {
            nama: "Booth B - Soto Teknik Bu Siti",
            foto: "photos/boothB.jpg",
            whatsapp: "6281234567891",
            menu: [
                { nama: "Soto Ayam Kampung", harga: 17000, kalori: 450, favorit: true },
                { nama: "Soto Daging Sapi", harga: 22000, kalori: 520, favorit: false },
                { nama: "Soto Spesial Komplit", harga: 25000, kalori: 650, favorit: true },
                { nama: "Lontong Soto", harga: 15000, kalori: 400, favorit: false }
            ]
        },
        {
            nama: "Booth C - Coffee Corner Engineers",
            foto: "photos/boothC.jpg",
            whatsapp: "6281234567892",
            menu: [
                { nama: "Espresso Double Shot", harga: 15000, kalori: 10, favorit: false },
                { nama: "Kopi Susu Aren Gula Jawa", harga: 18000, kalori: 220, favorit: true },
                { nama: "Matcha Latte", harga: 20000, kalori: 180, favorit: false },
                { nama: "V60 Single Origin Aceh Gayo", harga: 22000, kalori: 5, favorit: true },
                { nama: "Roti Bakar Coklat Keju", harga: 15000, kalori: 300, favorit: false }
            ]
        },
        {
            nama: "Booth A - Nasi Gila Bang Jali",
            foto: "photos/boothA.jpg",
            whatsapp: "6282268744986",
            menu: [
                { nama: "Nasi Gila Pedas Level 3", harga: 18000, kalori: 650, favorit: true },
                { nama: "Nasi Gila Original", harga: 15000, kalori: 580, favorit: false },
                { nama: "Nasi Gila Spesial Ayam", harga: 20000, kalori: 700, favorit: true },
                { nama: "Mie Goreng Gila", harga: 17000, kalori: 620, favorit: false }
            ]
        },
        {
            nama: "Booth B - Soto Teknik Bu Siti",
            foto: "photos/boothB.jpg",
            whatsapp: "6281234567891",
            menu: [
                { nama: "Soto Ayam Kampung", harga: 17000, kalori: 450, favorit: true },
                { nama: "Soto Daging Sapi", harga: 22000, kalori: 520, favorit: false },
                { nama: "Soto Spesial Komplit", harga: 25000, kalori: 650, favorit: true },
                { nama: "Lontong Soto", harga: 15000, kalori: 400, favorit: false }
            ]
        },
        {
            nama: "Booth C - Coffee Corner Engineers",
            foto: "photos/boothC.jpg",
            whatsapp: "6281234567892",
            menu: [
                { nama: "Espresso Double Shot", harga: 15000, kalori: 10, favorit: false },
                { nama: "Kopi Susu Aren Gula Jawa", harga: 18000, kalori: 220, favorit: true },
                { nama: "Matcha Latte", harga: 20000, kalori: 180, favorit: false },
                { nama: "V60 Single Origin Aceh Gayo", harga: 22000, kalori: 5, favorit: true },
                { nama: "Roti Bakar Coklat Keju", harga: 15000, kalori: 300, favorit: false }
            ]
        },
        {
            nama: "Booth A - Nasi Gila Bang Jali",
            foto: "photos/boothA.jpg",
            whatsapp: "6282268744986",
            menu: [
                { nama: "Nasi Gila Pedas Level 3", harga: 18000, kalori: 650, favorit: true },
                { nama: "Nasi Gila Original", harga: 15000, kalori: 580, favorit: false },
                { nama: "Nasi Gila Spesial Ayam", harga: 20000, kalori: 700, favorit: true },
                { nama: "Mie Goreng Gila", harga: 17000, kalori: 620, favorit: false }
            ]
        },
        {
            nama: "Booth B - Soto Teknik Bu Siti",
            foto: "photos/boothB.jpg",
            whatsapp: "6281234567891",
            menu: [
                { nama: "Soto Ayam Kampung", harga: 17000, kalori: 450, favorit: true },
                { nama: "Soto Daging Sapi", harga: 22000, kalori: 520, favorit: false },
                { nama: "Soto Spesial Komplit", harga: 25000, kalori: 650, favorit: true },
                { nama: "Lontong Soto", harga: 15000, kalori: 400, favorit: false }
            ]
        },
        {
            nama: "Booth C - Coffee Corner Engineers",
            foto: "photos/boothC.jpg",
            whatsapp: "6281234567892",
            menu: [
                { nama: "Espresso Double Shot", harga: 15000, kalori: 10, favorit: false },
                { nama: "Kopi Susu Aren Gula Jawa", harga: 18000, kalori: 220, favorit: true },
                { nama: "Matcha Latte", harga: 20000, kalori: 180, favorit: false },
                { nama: "V60 Single Origin Aceh Gayo", harga: 22000, kalori: 5, favorit: true },
                { nama: "Roti Bakar Coklat Keju", harga: 15000, kalori: 300, favorit: false }
            ]
        }
    ];

    // ==================== GLOBAL VARIABLES ====================
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const scrollTopBtn = document.getElementById('scroll-top');
    const boothsContainer = document.getElementById('booths-container');
    const menuSearch = document.getElementById('menu-search');

    // ==================== NAVBAR FUNCTIONS ====================
    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Change active nav link on scroll
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ==================== THEME TOGGLE ====================
    // Check for saved theme preference
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }

    // Toggle between light and dark mode
    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-mode');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        }
    });

    // ==================== SCROLL FUNCTIONS ====================
    // Show/hide scroll to top button
    function toggleScrollTopBtn() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    }

    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ==================== BOOTH RENDERING ====================
    // Format price to IDR
    function formatPrice(price) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(price);
    }

    // Create booth element
    function createBoothElement(booth) {
        const boothElement = document.createElement('div');
        boothElement.className = 'booth';
        boothElement.setAttribute('data-booth-name', booth.nama.toLowerCase());

        // Create image with lazy loading
        const imgContainer = document.createElement('div');
        imgContainer.className = 'booth-img-container';
        const img = document.createElement('img');
        img.className = 'booth-img';
        img.src = booth.foto;
        img.alt = `Foto ${booth.nama}`;
        img.loading = 'lazy';
        imgContainer.appendChild(img);

        // Create booth details
        const detailsContainer = document.createElement('div');
        detailsContainer.className = 'booth-details';

        const boothName = document.createElement('h3');
        boothName.className = 'booth-name';
        boothName.textContent = booth.nama;

        const menuContainer = document.createElement('div');
        menuContainer.className = 'booth-menu';

        // Create menu items
        booth.menu.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.setAttribute('data-item-name', item.nama.toLowerCase());

            const itemName = document.createElement('div');
            itemName.className = item.favorit ? 'menu-item-name favorite' : 'menu-item-name';
            itemName.textContent = item.nama;

            const itemDetails = document.createElement('div');
            itemDetails.className = 'menu-item-details';

            const itemPrice = document.createElement('span');
            itemPrice.className = 'menu-item-price';
            itemPrice.textContent = formatPrice(item.harga);

            const itemCalories = document.createElement('span');
            itemCalories.className = 'menu-item-calories';
            itemCalories.textContent = `${item.kalori} kal`;

            itemDetails.appendChild(itemPrice);
            itemDetails.appendChild(itemCalories);

            menuItem.appendChild(itemName);
            menuItem.appendChild(itemDetails);
            menuContainer.appendChild(menuItem);
        });

        // Create contact button
        const contactLink = document.createElement('a');
        contactLink.className = 'booth-contact';
        contactLink.href = `https://wa.me/${booth.whatsapp}`;
        contactLink.target = '_blank';
        contactLink.rel = 'noopener noreferrer';
        contactLink.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Pesan via WhatsApp';

        // Assemble booth element
        detailsContainer.appendChild(boothName);
        detailsContainer.appendChild(menuContainer);
        detailsContainer.appendChild(contactLink);

        boothElement.appendChild(imgContainer);
        boothElement.appendChild(detailsContainer);

        return boothElement;
    }

    // Render all booths
    function renderBooths() {
        boothsContainer.innerHTML = '';
        
        if (booths.length === 0) {
            const noBoothMsg = document.createElement('p');
            noBoothMsg.className = 'no-booth-message';
            noBoothMsg.textContent = 'Tidak ada booth yang tersedia.';
            boothsContainer.appendChild(noBoothMsg);
            return;
        }

        booths.forEach((booth, index) => {
            const boothElement = createBoothElement(booth);
            // Add delay to stagger animations
            boothElement.style.animationDelay = `${index * 0.2}s`;
            boothsContainer.appendChild(boothElement);
        });
    }

    // ==================== FILTER FUNCTIONS ====================
    // Filter menu items based on search query
    function filterMenuItems(query) {
        const searchTerm = query.toLowerCase().trim();
        const booths = document.querySelectorAll('.booth');
        let hasResults = false;

        booths.forEach(booth => {
            const menuItems = booth.querySelectorAll('.menu-item');
            let boothHasVisibleItems = false;

            menuItems.forEach(item => {
                const itemName = item.getAttribute('data-item-name');
                if (itemName.includes(searchTerm)) {
                    item.style.display = 'block';
                    boothHasVisibleItems = true;
                    hasResults = true;
                } else {
                    item.style.display = 'none';
                }
            });

            booth.style.display = boothHasVisibleItems ? 'block' : 'none';
        });

        // Show message when no results
        const existingMsg = document.querySelector('.no-results-message');
        if (!hasResults) {
            if (!existingMsg) {
                const noResultsMsg = document.createElement('p');
                noResultsMsg.className = 'no-results-message';
                noResultsMsg.textContent = `Tidak ada menu dengan kata "${query}"`;
                boothsContainer.appendChild(noResultsMsg);
            }
        } else if (existingMsg) {
            existingMsg.remove();
        }
    }

    // Listen to search input
    menuSearch.addEventListener('input', (e) => {
        filterMenuItems(e.target.value);
    });

    // ==================== ANIMATION OBSERVER ====================
    // Detect when elements enter viewport for animations
    function setupIntersectionObserver() {
        const fadeElements = document.querySelectorAll('.fade-in, .slide-up');
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        fadeElements.forEach(el => {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });
    }

    // ==================== INITIALIZATION ====================
    function init() {
        // Initialize theme
        initTheme();
        
        // Render booths
        renderBooths();
        
        // Setup animations
        setupIntersectionObserver();
        
        // Add scroll event listeners
        window.addEventListener('scroll', () => {
            toggleScrollTopBtn();
            updateActiveNavLink();
        });
        
        // Trigger initial scroll functions
        toggleScrollTopBtn();
        updateActiveNavLink();
    }

    // Initialize app
    init();
});