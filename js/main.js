// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Function to update text colors based on dark mode
function updateTextColors() {
    const textElements = document.querySelectorAll('.timeline-company-date');
    if (document.body.classList.contains('dark-mode')) {
        textElements.forEach(element => {
            element.classList.remove('text-dark');
            element.classList.add('text-light');
        });
    } else {
        textElements.forEach(element => {
            element.classList.remove('text-light');
            element.classList.add('text-dark');
        });
    }
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save user preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
    updateTextColors(); // Update text colors when dark mode is toggled
});

// Check for saved theme preference on page load
window.addEventListener('load', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
    updateTextColors(); // Update text colors on page load
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close hamburger menu when a nav link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// AOS Initialization
AOS.init({
    duration: 800,
    once: true
});

// Back to Top Button
const backToTopButton = document.getElementById('button');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Show button after scrolling down 300px
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});