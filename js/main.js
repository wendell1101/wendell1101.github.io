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

// Initialize AOS
AOS.init();

// Play project GIF on mouse over

