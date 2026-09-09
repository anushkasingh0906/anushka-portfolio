// ===============================
// MOBILE NAVIGATION
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


// ===============================
// CLOSE MENU AFTER CLICKING LINK
// ===============================

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


// ===============================
// CURRENT YEAR IN FOOTER
// ===============================

const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}