const Discord = require("discord.js");
const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20b046, 0xf2e807, 0xf207d1, 0xee8419, 0x8a2be2];

exports.run = async (Kelly, message, args) => {

    const m = await message.channel.send("Pinging...");
    const embed = new Discord.RichEmbed()
    .setAuthor(`Pong!`, message.author.displayAvatarURL)
    .setColor(hexcols[~~(Math.random() * hexcols.length)])
    .setDescription(`\nPing: ${m.createdTimestamp - message.createdTimestamp}ms\n\nAPI Ping: ${Math.round(Kelly.ping)}ms`);
    m.edit({embed});

	var time = new Date();
	console.log(`[${`Spy - ` + time.getHours() + `:` + time.getMinutes() + `:` + time.getSeconds()}] ${message.author.username}#${message.author.discriminator} used the ping command in ${message.guild.name} (ID: ${message.guild.id}) - Member Count: ${message.guild.memberCount}`);

}