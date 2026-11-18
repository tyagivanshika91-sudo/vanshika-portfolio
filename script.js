// Mobile menu
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
function setMenu(open) {
  nav.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menuBtn.textContent = open ? "Close" : "Menu";
}
menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); menuBtn.focus(); }
});

// Header shadow after scrolling
const header = document.getElementById("site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Highlight the nav link for the section in view
const navLinks = [...nav.querySelectorAll("a[href^='#']")];
const sections = navLinks.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);

if ("IntersectionObserver" in window) {
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) => {
        const on = a.getAttribute("href") === "#" + entry.target.id;
        a.classList.toggle("active", on);
        if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach((s) => spy.observe(s));

  // Gentle reveal on scroll (stays visible if motion is reduced)
  const reveals = document.querySelectorAll(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    reveals.forEach((el) => el.classList.add("in"));
  } else {
    const rev = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); rev.unobserve(e.target); } });
    }, { threshold: 0.12 });
    reveals.forEach((el) => rev.observe(el));
  }
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
}

document.getElementById("year").textContent = new Date().getFullYear();
