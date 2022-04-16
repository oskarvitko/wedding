export default () =>
  document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("guest-title");

    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");
    user = titles.find((item) => item.id === id);
    if (user) {
      title.textContent = guest.title;
    }
  });
