const hamburger_menu = document.getElementById("hamburger_menu");
const cross_menu = document.getElementById("cross_menu");
const hidden_menu = document.getElementById("hidden_menu");
const navbar = document.querySelector(".navbar");

hamburger_menu.addEventListener("click", () => {
    hamburger_menu.style.display = "none";
    cross_menu.style.display = "flex";
    hidden_menu.style.display = "flex";
    navbar.style.borderBottom = "2px solid #fff";
})

cross_menu.addEventListener("click", () => {
    hamburger_menu.style.display = "flex";
    cross_menu.style.display = "none";
    hidden_menu.style = "none";
})

const animate = document.querySelectorAll(".animate");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("scroll-animate");
        } else {
            entry.target.classList.remove("scroll-animate");
        }
    })
}, { threshold: 0.3 });

for (let i = 0; i < animate.length; i++) {
    const element = animate[i];
    observer.observe(element);
}

