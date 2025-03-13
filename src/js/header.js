document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");
    const body = document.body;
    const menuLinks = document.querySelectorAll(".nav-list a");

    menuToggle.addEventListener("click", () => {
        navList.classList.toggle("show");
        
        if (window.innerWidth < 768) {
            body.classList.toggle("no-scroll");
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 768) {
                navList.classList.remove("show");
                body.classList.remove("no-scroll");
            }
        });
    });
});

// =========================================================

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".burger-icon-button");
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuLinks = document.querySelectorAll(".mobile-nav-list a");
    const mobileOrderBtn = document.querySelector(".mobile-btn-order");
    const closeMenuIcon = document.querySelector(".close-menu-icon");
    const body = document.body;

    function toggleMenu() {
        mobileMenu.classList.toggle("show");
        body.classList.toggle("no-scroll");
    }
 
    menuIcon.addEventListener("click", toggleMenu);

    menuLinks.forEach(link => {
        link.addEventListener("click", toggleMenu);
    });

    mobileOrderBtn.addEventListener("click", toggleMenu);

    closeMenuIcon.addEventListener("click", toggleMenu);
});
