export default () =>
  document.addEventListener("DOMContentLoaded", () => {
    const defaultOptions = [
      user.type === titleTypes.plural ? "Конечно будем!" : options.yes,
      options.no,
    ];
    const select = document.getElementById("approve-select");
    let _options = defaultOptions;
    if (user.options) {
      _options = [...user.options, ...defaultOptions];
    }
    select.innerHTML = _options.map((option, i) => {
      const selected = i === 0 ? "selected" : "";
      return `<option ${selected} value="${option}">${option}</option>`;
    });
  });
