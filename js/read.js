// JAVASCRIPT CHECKER
console.log("read.js loaded");

// LENIS SMOOTH SCROLLING

// INITIATE LENIS
const lenis = new Lenis({
    autoRaf: true,
});

// LISTEN FOR SCROLL EVENTS AND LOG DATA
lenis.on('scroll', (e) => {
    console.log(e);
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".end").forEach(element => {
        element.addEventListener("click", function () {
            window.location.href = "../index.html";
        });
    });
});