const Discord = require(`discord.js`);
const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20b046, 0xf2e807, 0xf207d1, 0xee8419, 0x8a2be2];

exports.run = (Kelly, message, args) => {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setTitle(`${Kelly.user.username} is currently in ${Kelly.guilds.array().length} Guilds:`)
            .setColor(hexcols[~~(Math.random() * hexcols.length)])
            .setDescription(Kelly.guilds.map(g=>g.name).join(`, `))
    })
	console.log(`[Spy] ${message.author.username}#${message.author.discriminator} used the Servers command in ${message.guild.name} (ID: ${message.guild.id}) - Member Count: ${message.guild.memberCount}`);
}