// Toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = function() {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

// Scroll Sections active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = function() {
    sections.forEach(function(sec) {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navLinks.forEach(function(links) {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            })
        };
    });
    // Sticky navbar
    let header = document.querySelector("header");
        
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll reveal
ScrollReveal({ 
    // reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .kontakt-info h4', { origin: "top" });
ScrollReveal().reveal('.home-img, .sluzby-container, .portfolio-box, .kontakt form', { origin: "bottom" });
ScrollReveal().reveal('.home-content h1, .oMe-img, .kontakt-info li', { origin: "left" });
ScrollReveal().reveal('.home-content p, .oMe-content, .kontakt h3', { origin: "right" });

// Typed js 
const typed = new Typed(".multiple-text", {
    strings: ["Webový vývojář", "Webový designér", "Webový správce"],
    typeSpeed: 100, 
    backSpeed: 100, 
    backDelay: 1000,
    loop: true
});