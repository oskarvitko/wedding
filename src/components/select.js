export default () =>
  document.addEventListener("DOMContentLoaded", () => {
    const defaultOptions = [options.yes, options.no];
    const select = document.getElementById("approve-select");
    let _options = defaultOptions;
    if (user.options) {
      _options = [...defaultOptions, ...user.options];
    }
    select.innerHTML = _options.map((option, i) => {
      const selected = i === 0 ? "selected" : "";
      return `<option ${selected} value="${option}">${option}</option>`;
    });
  });
