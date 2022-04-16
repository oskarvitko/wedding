let sendBtn;
let editBtn;
let select;

export default () =>
  document.addEventListener("DOMContentLoaded", () => {
    sendBtn = document.getElementById("approve-btn-send");
    editBtn = document.getElementById("approve-btn-edit");
    select = document.getElementById("approve-select");

    sendBtn.addEventListener("click", sendHandler);
    editBtn.addEventListener("click", editHandler);

    user.sended ? applySendStyles() : applyEditStyles();
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
  applySendStyles();
};

const editHandler = (e) => {
  applyEditStyles();
};
