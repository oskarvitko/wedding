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
    count: 1,
  },
  {
    id: "oskar-mother",
    name: "Мама оскара",
    title: "Дорогая мама Кристина",
    type: titleTypes.singleGirl,
    count: 1,
  },
  {
    id: "elisey",
    name: "Елисей",
    title: "Дорогие Елисей и Катя",
    type: titleTypes.plural,
    options: [options.withFamily],
    count: 3,
  },
  {
    id: "arseniy",
    name: "Арсений",
    title: "Арсений, брат",
    type: titleTypes.singleBoy,
    options: [options.withGirl],
    count: 2,
  },
  {
    id: "virsaviya",
    name: "Вирсавия",
    title: "Дорогая Вирсавия",
    type: titleTypes.singleGirl,
    count: 1,
  },
  {
    id: "ameliya",
    name: "Амелия",
    title: "Дорогая Амелия",
    type: titleTypes.singleGirl,
    count: 1,
  },
  {
    id: "ahnessa-parents",
    name: "Родители Агнессы",
    title: "Дорогие мама Елена и отец Сергей",
    type: titleTypes.plural,
    options: [options.withFamily],
    count: 3,
  },
  {
    id: "pastor-alexiy",
    name: "Алексий",
    title: "Пастор Алексий",
    type: titleTypes.singleBoy,
    count: 1,
  },
  {
    id: "nastya",
    name: "Настя",
    title: "Настюшка - опасность",
    type: titleTypes.singleGirl,
    count: 1,
  },
  {
    id: "mozgoviy-family",
    name: "Семья мозговых",
    title: "Дорогие Елена и Кирилл",
    type: titleTypes.plural,
    options: [options.withFamily],
    count: 6,
  },
  {
    id: "eduarda",
    name: "Эда",
    title: "Эдочка, дорогая",
    type: titleTypes.singleGirl,
    count: 1,
  },
  {
    id: "milana",
    name: "Милана Мозговая",
    title: "Дорогая Милана",
    type: titleTypes.singleGirl,
    count: 1,
  },
  {
    id: "diana",
    name: "Диана Мозговая",
    title: "Дорогая Диана",
    type: titleTypes.singleGirl,
    count: 1,
  },
  {
    id: "lera",
    name: "Лера Мозговая",
    title: "Лерон, систр",
    type: titleTypes.singleGirl,
    count: 1,
  },
  {
    id: "danik",
    name: "Чернов Даниил",
    title: "Даник, брат, очкошник",
    type: titleTypes.singleBoy,
    count: 1,
  },
  {
    id: "mattwey-chernov",
    name: "Чернов Матвей",
    title: "Матвей, брат, черножопик",
    type: titleTypes.singleBoy,
    count: 1,
  },
  {
    id: "katya-chernova",
    name: "Чернова Катя",
    title: "Дорогие Екатерина и Виталик",
    type: titleTypes.plural,
    options: [options.withFamily],
    count: 3,
  },
  {
    id: "nadya-chernova",
    name: "Чернова Надя",
    title: "Дорогие Надя и Андрей",
    type: titleTypes.plural,
    options: [options.withFamily],
    count: 4,
  },
  {
    id: "tetya-natasha",
    name: "Тётя Наташа Чернова",
    title: "Тётя Наташа, дорогая",
    type: titleTypes.plural,
    single: true,
    count: 1,
  },
  {
    id: "sydor-family",
    name: "Сидоры",
    title: "Дорогие Андрей и Алла",
    type: titleTypes.plural,
    options: [options.withFamily],
    count: 6,
  },
  {
    id: "sydor-marta",
    name: "Марта Сидор",
    title: "Дорогие Марта и Костя",
    type: titleTypes.plural,
    count: 2,
  },
  {
    id: "oskar-babushka-vera",
    name: "Бабушка Вера Оскара",
    title: "Дорогие бабушка и дедушка!",
    type: titleTypes.plural,
    options: [options.withFamily],
    count: 3,
  },
  {
    id: "oskar-babushka-lida",
    name: "Бабушка Лида Оскара",
    title: "Дорогие бабушка и дедушка!",
    type: titleTypes.plural,
    options: [options.withFamily],
    count: 2,
  },
  {
    id: "ahnessa-babushka",
    name: "Бабушка Агнессы",
    title: "Дорогая бабушка!",
    type: titleTypes.plural,
    single: true,
    count: 1,
  },
  {
    id: "mattwey",
    name: "Матвей",
    title: "Матвей, бро, любимый",
    type: titleTypes.singleBoy,
    count: 1,
  },
  {
    id: "john",
    name: "Иоанн",
    title: "Иоанн, бро",
    type: titleTypes.singleBoy,
    count: 1,
  },
  {
    id: "masha",
    name: "Машка",
    title: "Машка, дорогая",
    type: titleTypes.singleGirl,
    count: 1,
  },
  {
    id: "milana-vitkovskaya",
    name: "Милана Витковская",
    title: "Милана, подружка",
    type: titleTypes.singleGirl,
    count: 1,
  },
  {
    id: "pasha-b",
    name: "Паша Барсук",
    title: "Дорогой наш друг и мой лидер",
    type: titleTypes.singleBoy,
    count: 1,
  },
  {
    id: "irina",
    name: "Ира",
    title: "Ирок, солнце",
    type: titleTypes.singleGirl,
    count: 1,
  },
  {
    id: "bonduelle",
    name: "Богдан",
    title: "Богдан, дорогой наш",
    type: titleTypes.singleBoy,
    count: 1,
  },
  {
    id: "ignat",
    name: "Игнат",
    title: "Игнат, друголёк",
    type: titleTypes.singleBoy,
    count: 1,
  },
  {
    id: "nikita",
    name: "Никита",
    title: "Никита, бро",
    type: titleTypes.singleBoy,
    options: [options.withGirl],
    count: 2,
  },
  {
    id: "julya",
    name: "Юля и Антон",
    title: "Дорогие Антон и Юля",
    type: titleTypes.plural,
    options: [options.withFamily],
    count: 4,
  },
  {
    id: "abigail",
    name: "Авигея",
    title: "Дорогая Авигея",
    type: titleTypes.singleGirl,
    count: 1,
  },
  {
    id: "yan",
    name: "Янчик",
    title: "Дорогой друг и лидер домашки",
    type: titleTypes.singleBoy,
    count: 1,
  },
];

window.includeAdminMode = () => {
  document.body.innerHTML = `
  <div class="container mt-2">
  <button data-list-btn type="button" class="btn btn-primary">Список присутствия</button>
  <table class="table table-hover" style="font-style: normal;">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Ссылка</th>
          <th scope="col"></th>
          <th scope="col"></th>
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
            <td>
              <a href="${_url}" target="_blank" class="btn btn-primary ml-3 w-100">Go to</a>
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
    const _users = await response.json();
    const users = window.users.map((user) => {
      const findable = _users.find((_user) => _user.id === user.id);
      if (findable) {
        return {
          ...user,
          ...findable,
        };
      }

      return user;
    });

    document.body.innerHTML = `
    <div class="container mt-2" style="font-style: normal;">
    <button data-btn-back type="button" class="btn btn-primary w-25">Назад</button>
    <h6 class="my-2">Общее предположительное количество: ${users.reduce(
      (result, user) => {
        result += user.count;
        return result;
      },
      0
    )}</h6>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Имя</th>
          <th scope="col">Присутствие</th>
          <th scope="col">Кол-во человек</th>
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
          <td>${user.sendedValue ? user.sendedValue : "Не отвечено"}</td>
          <td>${user.count}</td>
          <td>
              <button data-delete-btn="${
                user.id
              }" type="button" class="btn btn-danger ml-3 w-100">Delete</button>
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
    const deleteBtns = document.querySelectorAll("[data-delete-btn]");
    backBtn.addEventListener("click", () => includeAdminMode());

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
