import UserService from "./user-service";

window.titleTypes = {
  singleBoy: "single-boy",
  singleGirl: "single-girl",
  plural: "plural",
};

window.titlesSections = {
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

window.options = {
  yes: "Конечно буду!",
  withGirl: "Буду со второй половинкой",
  withFamily: "Будем с семьей",
  no: "К сожалению не получиться",
};

const url = `http://127.0.0.1:5500`;
const publicUrl = "https://oskar-wedding.herokuapp.com";

window.user = {};

window.users = [
  {
    id: "oskar-father",
    name: "Папа оскара",
    title: "Дорогой папа Андрей",
    type: titleTypes.singleBoy,
  },
  {
    id: "oskar-mother",
    name: "Мама оскара",
    title: "Дорогая мама Кристина",
    type: titleTypes.singleGirl,
  },
  {
    id: "elisey",
    name: "Елисей",
    title: "Дорогие Елисей и Катя",
    type: titleTypes.plural,
    options: [options.withFamily],
  },
  {
    id: "arseniy",
    name: "Арсений",
    title: "Арсений, брат",
    type: titleTypes.singleBoy,
    options: [options.withGirl],
  },
  {
    id: "virsaviya",
    name: "Вирсавия",
    title: "Дорогая Вирсавия",
    type: titleTypes.singleGirl,
  },
  {
    id: "ameliya",
    name: "Амелия",
    title: "Дорогая Амелия",
    type: titleTypes.singleGirl,
  },
  {
    id: "ahnessa-parents",
    name: "Родители Агнессы",
    title: "Дорогие мама Елена и отец Сергей",
    type: titleTypes.plural,
    options: [options.withFamily],
  },
  {
    id: "pastor-alexiy",
    name: "Алексий",
    title: "Пастор Алексий",
    type: titleTypes.singleBoy,
  },
  {
    id: "nastya",
    name: "Настя",
    title: "Настюшка - опасность",
    type: titleTypes.singleGirl,
  },
  {
    id: "mozgoviy-family",
    name: "Семья мозговых",
    title: "Дорогие Елена и Кирилл",
    type: titleTypes.plural,
    options: [options.withFamily],
  },
  {
    id: "eduarda",
    name: "Эда",
    title: "Эдочка, дорогая",
    type: titleTypes.singleGirl,
  },
  {
    id: "milana",
    name: "Милана Мозговая",
    title: "Дорогая Милана",
    type: titleTypes.singleGirl,
  },
  {
    id: "diana",
    name: "Диана Мозговая",
    title: "Дорогая Диана",
    type: titleTypes.singleGirl,
  },
  {
    id: "lera",
    name: "Лера Мозговая",
    title: "Лерон, систр",
    type: titleTypes.singleGirl,
  },
  {
    id: "danik",
    name: "Чернов Даниил",
    title: "Даник, брат, очкошник",
    type: titleTypes.singleBoy,
  },
  {
    id: "mattwey-chernov",
    name: "Чернов Матвей",
    title: "Матвей, брат, черножопик",
    type: titleTypes.singleBoy,
  },
  {
    id: "katya-chernova",
    name: "Чернова Катя",
    title: "Дорогие Екатерина и Виталик",
    type: titleTypes.plural,
    options: [options.withFamily],
  },
  {
    id: "nadya-chernova",
    name: "Чернова Надя",
    title: "Дорогие Надя и Андрей",
    type: titleTypes.plural,
    options: [options.withFamily],
  },
  {
    id: "tetya-natasha",
    name: "Тётя Наташа Чернова",
    title: "Тётя Наташа, дорогая",
    type: titleTypes.plural,
    single: true,
  },
  {
    id: "sydor-family",
    name: "Сидоры",
    title: "Дорогие Андрей и Алла",
    type: titleTypes.plural,
    options: [options.withFamily],
  },
  {
    id: "sydor-marta",
    name: "Марта Сидор",
    title: "Дорогие Марта и Костя",
    type: titleTypes.plural,
  },
  {
    id: "oskar-babushka-vera",
    name: "Бабушка Вера Оскара",
    title: "Дорогая бабушка и дедушка!",
    type: titleTypes.plural,
    options: [options.withFamily],
  },
  {
    id: "oskar-babushka-lida",
    name: "Бабушка Лида Оскара",
    title: "Дорогая бабушка и дедушка!",
    type: titleTypes.plural,
    options: [options.withFamily],
  },
  {
    id: "ahnessa-babushka",
    name: "Бабушка Агнессы",
    title: "Дорогая бабушка!",
    type: titleTypes.plural,
    single: true,
  },
];

window.includeAdminMode = () => {
  document.body.innerHTML = `
  <div class="container mt-2">
  <button data-list-btn type="button" class="btn btn-primary w-25">Список присутствия</button>
  <table class="table table-hover" style="font-style: normal;">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Ссылка</th>
          <th scope="col">Скопировать</th>
        </tr>
      </thead>
      <tbody>
      ${users
        .map((user) => {
          const _url = `${publicUrl}?id=${user.id}`;
          return `
          <tr>
            <td><b>${user.name}</b></td>
            <td>${_url}</td>
            <td>
              <button data-copy-btn="${_url}" type="button" class="btn btn-success ml-3 w-100">Copy</button>
            </td>
          </tr>
          </h5>
        `;
        })
        .join(``)}
    </tbody>
    </table>
  </div>`;

  const btns = document.querySelectorAll("[data-copy-btn]");
  Array.prototype.forEach.call(btns, (btn) =>
    btn.addEventListener("click", (e) => {
      copyUrl(e.target.dataset.copyBtn);
    })
  );
  const listBtn = document.querySelector("[data-list-btn]");
  listBtn.addEventListener("click", async () => {
    const response = await fetch(`${window.location.origin}/users`);
    const users = await response.json();

    document.body.innerHTML = `
    <div class="container mt-2">
    <button data-btn-back type="button" class="btn btn-primary w-25">Назад</button>
    <button data-btn-all type="button" class="btn btn-success w-25 ms-3">All</button>
    <table class="table table-hover" style="font-style: normal;">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Имя</th>
          <th scope="col">Присутствие</th>
          <th scope="col">Удалить</th>
        </tr>
      </thead>
      <tbody>
        ${users
          .filter((user) => user.name)
          .sort((user1, user2) => {
            const value1 = user1.sendedValue
              ? user1.sendedValue.toLowerCase()
              : "";
            const value2 = user2.sendedValue
              ? user2.sendedValue.toLowerCase()
              : "";
            if (value1 > value2) return -1;
            if (value1 < value2) return 1;
            return 0;
          })
          .map(
            (user) => `
        <tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.sendedValue}</td>
          <td>
              <button data-delete-btn="${user.id}" type="button" class="btn btn-danger ml-3 w-100">Delete</button>
          </td>
        </tr>
        `
          )
          .join("")}
    </tbody>
    </table>
    </div>
    `;
    const backBtn = document.querySelector("[data-btn-back]");
    const allBtn = document.querySelector("[data-btn-all]");
    const deleteBtns = document.querySelectorAll("[data-delete-btn]");
    backBtn.addEventListener("click", () => includeAdminMode());
    allBtn.addEventListener("click", () => {
      const tableBody = document.querySelector("tbody");
      tableBody.innerHTML = `
      ${users
        .sort((user1, user2) => {
          const value1 = user1.sendedValue
            ? user1.sendedValue.toLowerCase()
            : "";
          const value2 = user2.sendedValue
            ? user2.sendedValue.toLowerCase()
            : "";
          if (value1 > value2) return -1;
          if (value1 < value2) return 1;
          return 0;
        })
        .map(
          (user) => `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.sendedValue}</td>
        <td>
            <button data-delete-btn="${user.id}" type="button" class="btn btn-danger ml-3 w-100">Delete</button>
        </td>
      </tr>
      `
        )
        .join("")}
      `;
    });
    Array.prototype.forEach.call(deleteBtns, (btn) =>
      btn.addEventListener("click", async (e) => {
        await UserService.delete(btn.dataset.deleteBtn);
        listBtn.click();
      })
    );
  });
};

function copyUrl(text) {
  navigator.clipboard.writeText(text);
}
