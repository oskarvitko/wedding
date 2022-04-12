let active = false;

export default () =>
  document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const header = document.getElementById("header-nav");
    const i = burger.querySelector("i");
    burger.addEventListener("click", () => {
      active = !active;

      header.classList.toggle("active");
      document.body.classList.toggle("overflowed");

      i.classList.remove("animate__fadeIn");
      burger.classList.toggle("active");
      if (active) {
        i.classList.add("animate__fadeOut");
        const handler = () => {
          i.classList.remove("fa-bars");
          i.classList.remove("animate__fadeOut");
          i.classList.add("animate__fadeIn");
          i.removeEventListener(handler, null);
          i.classList.add("fa-times");
        };
        i.addEventListener("animationend", handler);
      } else {
        i.classList.add("animate__fadeOut");
        const handler = () => {
          i.classList.remove("fa-times");
          i.classList.remove("animate__fadeOut");
          i.classList.add("animate__fadeIn");
          i.removeEventListener(handler, null);
          i.classList.add("fa-bars");
        };
        i.addEventListener("animationend", handler);
      }
    });
  });
