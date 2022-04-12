import MainIntersectionObserver from "./MainIntersectionObserver";

export default () =>
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".header__nav-link");
    const burger = document.getElementById("burger");
    Array.prototype.forEach.call(links, (link) => {
      const a = link.querySelector("a");
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;

      a.addEventListener("click", (e) => {
        e.preventDefault();
        const header = document.getElementById("header");
        window.scrollTo(0, target.offsetTop - 58);
        if (burger.classList.contains("active")) {
          burger.click();
        }
      });

      const observer = new MainIntersectionObserver(
        target,
        (entry) => {
          if (entry.isIntersecting) {
            const prevLinks = document.querySelectorAll(
              ".header__nav-link.active"
            );
            Array.prototype.forEach.call(prevLinks, (link) => {
              link.classList.remove("active");
            });
            link.classList.add("active");
          }
        },
        0.85
      );
      observer.observe();
    });
  });
