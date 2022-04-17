const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const TelegramBot = require("node-telegram-bot-api");
const fs = require("fs");
const AppStorage = require("./storage");

const TOKEN = "5326704093:AAGpH4786hXocY3DK29eKvHdSVsYfikSDlQ";

const bot = new TelegramBot(TOKEN, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10,
    },
  },
});

const app = express();

const PORT = process.env.PORT || 5002;

app.use(cors({ origin: "*" }));
app.use(express.static(__dirname));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/user/:id", (req, res) => {
  const user = AppStorage.getUser(req.params.id);
  res.status(200).json(user);
});

app.post("/send/:id", (req, res) => {
  const { name, sended, sendedValue } = req.body;
  const user = AppStorage.updateUser({
    id: req.params.id,
    name,
    sended,
    sendedValue,
  });

  if (user) {
    const message = `
  Гость: ${user.name}
Присутствие: ${user.sendedValue}`;

    console.log(message);

    bot.sendMessage("668975944", message);
    bot.sendMessage("1170280474", message);
  }
  res.status(200).json(user);
});

app.listen(PORT, () => {
  AppStorage.loadData();

  console.log(`Server starting on port ${PORT}...`);
});
