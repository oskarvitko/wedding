export default () =>
  document.addEventListener("DOMContentLoaded", () => {
    const sections = {
      dear: {
        link: document.getElementById("text-dear-link"),
        text: document.getElementById("text-dear-text"),
      },
      dress: {
        text: document.getElementById("text-dress-text"),
      },
      approve: {
        title: document.getElementById("text-approve-title"),
      },
      gift: {
        title: document.getElementById("text-gift-title"),
        text: document.getElementById("text-gift-text"),
      },
      contacts: {
        text: document.getElementById("text-contacts-text"),
      },
    };

    const type = user.type;
    Object.keys(sections).forEach((sectionName) => {
      Object.keys(sections[sectionName]).forEach((componentName) => {
        sections[sectionName][componentName].textContent =
          titlesSections[sectionName][type][componentName];
      });
    });
  });
