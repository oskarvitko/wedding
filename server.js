const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const TelegramBot = require("node-telegram-bot-api");

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

const users = [];

app.use(cors({ origin: "*" }));
app.use(express.static(__dirname));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/user/:id", (req, res) => {
  let user = users.find((item) => item.id === req.params.id);
  if (!user) {
    user = {
      id: req.params.id,
      sended: false,
      sendedValue: false,
    };
    users.push(user);
  }
  res.status(200).json(user);
});

app.post("/send/:id", (req, res) => {
  const user = users.find((user) => user.id === req.params.id);
  if (user) {
    user.sended = req.body.sended;

    if (user.sended) {
      user.name = req.body.name;
      user.sendedValue = req.body.sendedValue;
      const message = `
Гость: ${user.name}
Присутствие: ${user.sendedValue}`;

      bot.sendMessage("668975944", message);
      bot.sendMessage("1170280474", message);
    }
  }
  res.status(200).json("good");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => console.log(`Server starting on port ${PORT}...`));
