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

// GLITCH EFFECT
PowerGlitch.glitch(
  '.glitch',
  {
    "playMode": "always",
    "optimizeSeo": true,
    "createContainers": true,
    "hideOverflow": false,
    "timing": {
      "duration": 2000,
      "iterations": 1,
    },
    "glitchTimeSpan": {
      "start": 0.5,
      "end": 0.7
    },
    "shake": {
      "velocity": 15,
      "amplitudeX": 0.2,
      "amplitudeY": 0.2
    },
    "slice": {
      "count": 6,
      "velocity": 15,
      "minHeight": 0.02,
      "maxHeight": 0.15,
      "hueRotate": true,
    },
    "pulse": true,
  }
)

// PRELOADER

var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
  .add({
    targets: '.ml13 .letter',
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.ml13 .letter',
    translateY: [0, -100],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1000,
    delay: (el, i) => 100 + 30 * i
  });

document.body.style.overflow = "hidden";

gsap.to("#preloader_container", {
  y: "-200%",
  duration: 1.5,
  delay: 3,
  ease: "power2.in",
  onComplete: function () {
    document.getElementById("preloader_container").style.display = "none";
    document.getElementById("preload_gradient").style.display = "none";
    document.body.style.overflow = "auto";
  }
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