const titleTypes = {
  singleBoy: "single-boy",
  singleGirl: "single-girl",
  plural: "plural",
};

const titlesSections = {
  dear: {
    [titleTypes.plural]: {
      link: "Вы получили эту ссылку, а значит мы спешим сообщить Вам важную новость!",
      text: "Разделите с нами эту радость, мы приглашаем Вас на торжество, посвященное нашей свадьбе",
    },
    [titleTypes.singleBoy]: {
      link: "Ты получил эту ссылку, а значит мы спешим сообщить тебе важную новость!",
      text: "Раздели с нами эту радость, мы приглашаем тебя на торжество, посвященное нашей свадьбе",
    },
    [titleTypes.singleGirl]: {
      link: "Ты получила эту ссылку, а значит мы спешим сообщить тебе важную новость!",
      text: "Раздели с нами эту радость, мы приглашаем тебя на торжество, посвященное нашей свадьбе",
    },
  },
  dress: {
    [titleTypes.plural]: {
      text: "Мы будем рады, если в своих нарядах вы поддержите цветовую гамму нашей свадьбы",
    },
    [titleTypes.singleBoy]: {
      text: "Мы будем рады, если в своём наряде ты поддержишь цветовую гамму нашей свадьбы",
    },
    [titleTypes.singleGirl]: {
      text: "Мы будем рады, если в своём наряде ты поддержишь цветовую гамму нашей свадьбы",
    },
  },
  approve: {
    [titleTypes.plural]: {
      title: "Очень ждём и будем рады видеть вас на нашей свадьбе!",
    },
    [titleTypes.singleBoy]: {
      title: "Очень ждём и будем рады видеть тебя на нашей свадьбе!",
    },
    [titleTypes.singleGirl]: {
      title: "Очень ждём и будем рады видеть тебя на нашей свадьбе!",
    },
  },
  gift: {
    [titleTypes.plural]: {
      title: "Не ломайте голову над подарками!",
      text: "Ваши конверты помогут осуществить нашу мечту о свадебном путешествии или переезде в другую страну.",
    },
    [titleTypes.singleBoy]: {
      title: "Не ломай голову над подарками!",
      text: "Твой конверт поможет осуществить нашу мечту о свадебном путешествии или переезде в другую страну.",
    },
    [titleTypes.singleGirl]: {
      title: "Не ломай голову над подарками!",
      text: "Твой конверт поможет осуществить нашу мечту о свадебном путешествии или переезде в другую страну.",
    },
  },
  contacts: {
    [titleTypes.plural]: {
      text: "Если вы хотите поздравить нас музыкально - свяжитесь с этим крутым парнем",
    },
    [titleTypes.singleBoy]: {
      text: "Если ты хочешь поздравить нас музыкально - свяжись с этим крутым парнем",
    },
    [titleTypes.singleGirl]: {
      text: "Если ты хочешь поздравить нас музыкально - свяжись с этим крутым парнем",
    },
  },
};

const url = `http://127.0.0.1:5500`;
const publicUrl = "https://oskar-wedding.herokuapp.com";

let user = null;

const titles = [
  {
    id: "oskar-father",
    name: "Папа оскара",
    title: "Дорогой папа",
    sendedValue: "Не будет",
    sended: true,
    type: titleTypes.singleBoy,
  },
  {
    id: "oskar-mother",
    name: "Мама оскара",
    title: "Дорогая мама",
    type: titleTypes.singleGirl,
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
      const _url = `${publicUrl}?id=${title.id}`;
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
