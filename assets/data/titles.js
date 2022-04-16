const titleTypes = {
  singleBoy: "single-boy",
  singleGirl: "single-girl",
  plural: "plural",
};

const url = `http://127.0.0.1:5500`;
const publicUrl = "https://oskarvitko.github.io/wedding";

let user = null;

const titles = [
  {
    id: "oskar-father",
    name: "Папа оскара",
    title: "Дорогой папа",
    sendedValue: "Не будет",
    sended: true,
  },
  {
    id: "oskar-mother",
    name: "Мама оскара",
    title: "Дорогая мама",
  },
  {
    id: "friend-mattew",
    name: "Матвей",
    title: "Матвей, брат",
  },
];

const includeAdminMode = () => {
  document.body.innerHTML = `
  <div class="container text-center mt-5">
  ${titles
    .map((title) => {
      const _url = `${url}?id=${title.id}`;
      return `
      <h3 style="font-style: normal;" class="my-4">
      <b>${title.name}:</b> 
      ${_url} 
      <button data-copy-btn="${_url}" type="button" class="btn btn-success ml-3">Copy</button>
      </h3>
    `;
    })
    .join(``)}
  </div>`;

  const btns = document.querySelectorAll("[data-copy-btn]");
  Array.prototype.forEach.call(btns, (btn) =>
    btn.addEventListener("click", (e) => {
      copyUrl(e.target.dataset.copyBtn);
    })
  );
};

function copyUrl(text) {
  navigator.clipboard.writeText(text);
}
