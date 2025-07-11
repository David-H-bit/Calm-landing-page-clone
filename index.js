const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const navContainer = document.querySelector(".nav-container");

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50){
        nav.classList.add("scrolled");
    }
    else{
        nav.classList.remove("scrolled");
    }
})

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navContainer.classList.toggle('mobile-active');
});

document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
        navContainer.classList.remove('mobile-active');
    }
});