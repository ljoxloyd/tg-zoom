import TelegramBot from 'node-telegram-bot-api';
import express from 'express';

// const app = express();
// const port = process.env.PORT || 5000;
// app.listen(port, _ => console.log('listening on port' + port))
// app.get("/", (req, res) => {
//   res.send({ ok: true });
// })

const token = process.env.BOT_TOKEN
const url = process.env.APP_URL || "https://tg-zoom.herokuapp.com:443"
const options = { webhook: {
  port: process.env.PORT || 5000
}}

const bot = new TelegramBot(token, options);

bot.sendMessage("401895376", "I'm up and running")

bot.setWebHook(`${url}/bot${token}`);

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});

bot.onText(/\/keys/, msg => {
  bot.sendMessage(msg.chat.id, "here's your keyboar", {
    "reply_markup": {
      "inline_keyboard": [
        [{ text: "Homie", url: "https://thispersondoesnotexist.com/" }]
      ]
    }
  })
})