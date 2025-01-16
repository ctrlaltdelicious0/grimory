// JAVASCRIPT CHECKER
console.log("index.js loaded");

// LENIS SMOOTH SCROLLING

// INITIATE LENIS
const lenis = new Lenis({
    autoRaf: true,
});

// LISTEN FOR SCROLL EVENTS AND LOG DATA
lenis.on('scroll', (e) => {
    console.log(e);
});

// SWIPER CAROUSEL
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false
    }
});