const { DISCORD, NODEJS, VERSION, NAME, AUTHOR } = require(`../util/botsettings.json`);
const Discord = require(`discord.js`);
const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20b046, 0xf2e807, 0xf207d1, 0xee8419, 0x8a2be2];

const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
arr.reverse();
const used = process.memoryUsage().heapUsed / 1024 / 1024;

var parseTime = function(milliseconds) {
  var seconds = Math.floor(milliseconds/1000); milliseconds %= 1000;
  var minutes = Math.floor(seconds/60); seconds %= 60;
  var hours = Math.floor(minutes/60); minutes %= 60;
  var days = Math.floor(hours/24); hours %= 24;
  var written = false;
  return (days?(written=true,days+` days`):``)+(written?`, `:``)
      +(hours?(written=true,hours+` hours`):``)+(written?`, `:``)
      +(minutes?(written=true,minutes+` minutes`):``)+(written?`, `:``)
      +(seconds?(written=true,seconds+` seconds`):``)+(written?`, `:``)
      +(milliseconds?milliseconds+` milliseconds`:``);
};

exports.run = (client, message, args) => {

  const embed = new Discord.RichEmbed()
  .setThumbnail(`https://cdn.discordapp.com/attachments/391299236530225155/391300809239035914/images-2.jpg`)
  .setColor(hexcols[~~(Math.random() * hexcols.length)])
  .addField(`${NAME} ${VERSION} by ${AUTHOR}`, `Hello, I am ${NAME} a friendly Discord bot made in Discord.JS!`)
  .addField(`Versions`, `Discord.JS: ${DISCORD}\nNode.JS: ${NODEJS}\nBot Version: ${VERSION}`)
  .addField(`Info`, `Memory Usage: ${Math.round(used * 100) / 100}MB\nSupport Server:  https://discord.gg/Z5jVg2G\nUptime: ${parseTime(client.uptime)}\nStats: ${client.guilds.array().length} Servers, ${client.users.size} Users, ${client.channels.size} Channels\nProject started: ${client.user.createdAt}`)
  .setFooter(`Made by ${AUTHOR}#1975 | ${NAME} ${VERSION}`)
  message.channel.send({embed});
  
	var time = new Date();
	console.log(`[${`Spy - ` + time.getHours() + `:` + time.getMinutes() + `:` + time.getSeconds()}] ${message.author.username}#${message.author.discriminator} used the info command in ${message.guild.name} (ID: ${message.guild.id}) - Member Count: ${message.guild.memberCount}`);
}
