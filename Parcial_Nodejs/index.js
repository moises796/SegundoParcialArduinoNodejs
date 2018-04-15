const TelegramBot = require('node-telegram-bot-api');
const token = '591997183:AAEelq3QIlcQ4rg-Ws3gX52Ujq9r9ImMj1w';
var idChar = 488036218;


var serialport = require("serialport");
var miSerial = new serialport("COM3", {
  baudRate: 9600,
  autoOpen: true
});

const bot = new TelegramBot(token, {
  polling: true,
});


bot.onText(/\/start/, (msg, match) => {
  bot.sendMessage(msg.chat.id, "Bienvenido, presiona el boton en Arduino para comenzar con el conteo", {
"reply_markup": {
  "resize_keyboard":true,
    "keyboard": [["Reiniciar"]]
    }
});
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log("El id es " + chatId)
  var respuesta = msg.text;
  if (respuesta == "Reiniciar") {
    bot.sendMessage(chatId, 'Reiniciando conteo');
    miSerial.write("R");
  } 
});

miSerial.setEncoding('utf8');

miSerial.on('data', function(data) {
  console.log('Valor:', data);
  bot.sendMessage(idChar, "---- BOTON PRESIONADO ----");
bot.sendMessage(idChar, "VALOR: "+data);
});



