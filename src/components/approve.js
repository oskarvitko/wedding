import UserService from "./user-service";

let sendBtn;
let editBtn;
let select;

const URL = window.location.origin;

export default () =>
  document.addEventListener("DOMContentLoaded", async () => {
    sendBtn = document.getElementById("approve-btn-send");
    editBtn = document.getElementById("approve-btn-edit");
    select = document.getElementById("approve-select");

    sendBtn.addEventListener("click", sendHandler);
    editBtn.addEventListener("click", editHandler);

    const data = await UserService.getUserById(user.id);
    user = {
      ...user,
      ...data,
    };

    user?.sended ? applySendStyles() : applyEditStyles();
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

const sendHandler = async (e) => {
  user = await UserService.setUser({
    id: user.id,
    sendedValue: select.value,
    sended: true,
    name: user.name,
  });
  applySendStyles();
};

const editHandler = async (e) => {
  user = await UserService.setUser({
    sended: false,
    id: user.id,
  });
  applyEditStyles();
};
