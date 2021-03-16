import TelegramBot from 'node-telegram-bot-api';
import express from 'express';

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, _ => console.log('listening on port' + port))
app.get("/", (req, res) => {
  res.send({ ok: true });
})

const token = process.env.BOT_TOKEN

const options = { polling: true }

// const bot = new TelegramBot(token, options);

// // Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {

//   const chatId = msg.chat.id;
//   const resp = match[1];

//   bot.sendMessage(chatId, resp);
// });

// bot.onText(/\/keys/, msg => {
//   bot.sendMessage(msg.chat.id, "here's your keyboar", {
//     "reply_markup": {
//       "inline_keyboard": [
//         [{ text: "Homie", url: "https://thispersondoesnotexist.com/" }]
//       ]
//     }
//   })
// })