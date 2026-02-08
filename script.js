document.addEventListener("DOMContentLoaded", () => {/* ===== Active Nav Link ===== */
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        if (scrollY >= section.offsetTop - 150) {
            current = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


   /* ===== Hamburger ===== */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.onclick = () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("active");
};


    /* ===== Dark / Light ===== */
    const themeToggle = document.getElementById("themeToggle");

    themeToggle.onclick = () => {
        document.body.classList.toggle("light");
        localStorage.setItem(
            "theme",
            document.body.classList.contains("light") ? "light" : "dark"
        );
    };

    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light");
    }

    /* ===== Typing Animation ===== */
    const typing = document.getElementById("typing");
    const texts = ["Pharmacy Student", "Web Developer", "AI Enthusiast"];
    let i = 0, j = 0, del = false;

    function type() {
        const current = texts[i];
        typing.textContent = del
            ? current.slice(0, --j)
            : current.slice(0, ++j);

        if (!del && j === current.length) setTimeout(() => del = true, 1200);
        if (del && j === 0) { del = false; i = (i + 1) % texts.length; }

        setTimeout(type, del ? 60 : 120);
    }
    type();

    /* ===== Scroll Reveal ===== */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add("show");
        });
    });

    document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
});

/* Scroll button */
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}
/* ===== Navbar Scroll Effect ===== */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
});
