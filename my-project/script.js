document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.style.background = "rgba(0, 0, 0, 0.9)";
        } else {
            nav.style.background = "rgba(0, 0, 0, 0.7)";
        }
    });
});