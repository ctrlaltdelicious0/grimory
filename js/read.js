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

// RETURN TO PREVIEW PAGE
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".end").forEach(element => {
        element.addEventListener("click", function () {
            window.history.back(); // Go back to the previous page in the history stack
        });
    });
});

// SAVE SCROLL POSITION

// Function to save scroll position
function saveScrollPosition() {
    localStorage.setItem('scrollPosition', window.scrollY);
}

// Function to restore scroll position
function restoreScrollPosition() {
    const savedPosition = localStorage.getItem('scrollPosition');
    if (savedPosition !== null) {
        window.scrollTo(0, savedPosition);
    }
}

// Save scroll position when the page is about to unload
window.addEventListener('beforeunload', saveScrollPosition);

// Restore scroll position when the page is loaded
window.addEventListener('load', restoreScrollPosition);

// Save scroll position with page-specific key
function saveScrollPosition() {
    const pageKey = window.location.pathname; // Get current page's path
    localStorage.setItem(pageKey, window.scrollY);
}

// Restore scroll position with page-specific key
function restoreScrollPosition() {
    const pageKey = window.location.pathname; // Get current page's path
    const savedPosition = localStorage.getItem(pageKey);
    if (savedPosition !== null) {
        window.scrollTo(0, savedPosition);
    }
}
