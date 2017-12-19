const db = require(`quick.db`);
const Discord = require(`discord.js`)

exports.run = (Kelly, message, args) => {

    const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20b046, 0xf2e807, 0xf207d1, 0xee8419, 0x8a2be2];

        db.fetchObject(`guildPrefix_${message.guild.id}`).then(i => {

            let prefix = i.text;
            if(!i.text) prefix = `k?`;
            
            let response = `**Guild Prefix**\n> ${prefix}\n\n`;

            const embed = new Discord.RichEmbed()
            .setDescription(response)
            .setColor(hexcols[~~(Math.random() * hexcols.length)]);

            message.channel.send({embed});
    })
	
	var time = new Date();
	console.log(`[${`Spy - ` + time.getHours() + `:` + time.getMinutes() + `:` + time.getSeconds()}] ${message.author.username}#${message.author.discriminator} used the config command in ${message.guild.name} (ID: ${message.guild.id}) - Member Count: ${message.guild.memberCount}`);
}