//Variables
const hamburger = document.querySelector('.hamburger');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
const sideNav = document.querySelector('.side-nav');
const wrapper = document.querySelector('.wrapper');
const navbar = document.querySelector('.main-nav')

// hamburger menu side nav
hamburger.addEventListener('click', () => {
    // nav.classList.toggle('main-nav-active');
    hamburger.classList.toggle('hamburger-active');
    bar1.classList.toggle('bar1-cross-left');
    bar2.classList.toggle('bar2-active');
    bar3.classList.toggle('bar3-cross-right');
    sideNav.classList.toggle('active');
    wrapper.classList.toggle('active');
})

// fixed navbar
window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > navbar.offsetHeight + 200) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

//main-nav active links
const navLinks = document.getElementsByClassName("nav-link");;

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";
    });
}

//side-nav active links
const sideLinks = document.getElementsByClassName("side-link");;

for (let i = 0; i < sideLinks.length; i++) {
    sideLinks[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("side-link active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";
    });
}

// Initialize AOS
AOS.init();


//jquery
// back to top button
let btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});