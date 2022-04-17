export default () =>
  document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("guest-title");

    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");
    const _user = users.find((item) => item.id === id);
    if (_user) {
      user = _user;
      title.textContent = user.title;
    }
  });
