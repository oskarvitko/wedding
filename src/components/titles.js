export default () =>
  document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("guest-title");
    const circle = document.getElementById("dress-black-circle");
    const added = document.getElementById("dress-black-circle-added");
    const circleTitle = document.getElementById("dress-black-title");

    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");
    const _user = users.find((item) => item.id === id);
    if (_user) {
      user = _user;
      title.textContent = user.title;
      if (user.type === titleTypes.singleBoy) {
        circle.classList.add("d-none");
        circleTitle.classList.add("d-none");
        added.classList.remove("d-none");
      } else if (user.type === titleTypes.singleGirl) {
        circle.classList.add("d-none");
        circleTitle.classList.add("d-none");
      }
    }
  });
