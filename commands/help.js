const Discord = require(`discord.js`);
const db = require(`quick.db`);
const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20b046, 0xf2e807, 0xf207d1, 0xee8419, 0x8a2be2];

exports.run = (Kelly, message, args) => {

    db.fetchObject(`guildPrefix_${message.guild.id}`).then(i => {

        let PREFIX = i.text;
        if(!i.text) PREFIX = `k?`;

    const embed = new Discord.RichEmbed()
    .setThumbnail(`https://cdn.discordapp.com/attachments/391299236530225155/391300809239035914/images-2.jpg`)
    .setColor(hexcols[~~(Math.random() * hexcols.length)])
    .addField(`General Commands`, `${PREFIX}help - Displays this message\n${PREFIX}info - Displays info about bot\n${PREFIX}ping - Pong, Ping of bot / your ping\n${PREFIX}8ball <question> - Ask Kelly a question and she'll respond to you\n${PREFIX}servers - Displays servers that ${Kelly.user.username} is on`)
    .addField(`Moderation Commands`, `${PREFIX}purge <2 - 99> - Purges the specified messages\n${PREFIX}setprefix <prefix> - Set the prefix of the guild\n${PREFIX}config - Configure the bot\n${PREFIX}lockdown <time> - Lockdown the channel for x time`)
    .addField(`NSFW Commands`, `${PREFIX}boobs - Displays a picture of boobs`)
    .addField(`Owner Commands`, `${PREFIX}reload <command> - reloads command\n${PREFIX}setgame <game> - Sets bots game\n${PREFIX}setstatus <status> - sets bots status\n${PREFIX}say <message> - Sends the specified message in the channel\n${PREFIX}eval <code> - Evaluates the code`);
    message.channel.send({embed});

    })
	console.log(`[Spy] ${message.author.username}#${message.author.discriminator} used the Help command in ${message.guild.name} (ID: ${message.guild.id}) - Member Count: ${message.guild.memberCount}`);
}
