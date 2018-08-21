const Discord = require("discord.js");
const bot = new Discord.Client();

const colors = ['92ce14', '4bd588', '4bd5b9', 'd54b76', '00edff', '0077ff', 'f2ff00', 'cbd073', 'd09573', 'f2070b'];
function color () {
  colors.forEach(function (item, number) {
      setTimeout(function () {bott.guilds.get('481047766093791237').roles.get('481416300414107648').setColor(item).catch();if(number === colors.length-1) setTimeout(function () {color()}, 1000)}, number*1000);
  });
}

console.log('Working');

bot.login("NDgxMDkzMzYwNDgwODEzMDU2.DlxaEg.4a1sHrzPWNhDIeumdyJAyqFlt0k")