let sendBtn;
let editBtn;
let select;

const URL = window.location.origin;

export default () =>
  document.addEventListener("DOMContentLoaded", () => {
    sendBtn = document.getElementById("approve-btn-send");
    editBtn = document.getElementById("approve-btn-edit");
    select = document.getElementById("approve-select");

    sendBtn.addEventListener("click", sendHandler);
    editBtn.addEventListener("click", editHandler);

    fetch(`${URL}/user/${user.id}`, {
      method: "get",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        user = {
          ...user,
          ...data,
        };

        user.sended ? applySendStyles() : applyEditStyles();
      });
  });

const applySendStyles = () => {
  sendBtn.textContent = "Отвечено";
  sendBtn.disabled = true;
  select.disabled = true;
  user.sendedValue && (select.value = user.sendedValue);
  editBtn.classList.remove("d-none");
};

const applyEditStyles = () => {
  sendBtn.textContent = "Ответить";
  sendBtn.disabled = false;
  select.disabled = false;
  user.sendedValue && (select.value = user.sendedValue);
  editBtn.classList.add("d-none");
};

const sendHandler = (e) => {
  fetch(`${URL}/send/${user.id}`, {
    method: "post",
    body: JSON.stringify({
      sendedValue: select.value,
      name: user.name,
      sended: true,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => window.location.reload());
};

const editHandler = (e) => {
  fetch(`${URL}/send/${user.id}`, {
    method: "post",
    body: JSON.stringify({
      sended: false,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => window.location.reload());
};
