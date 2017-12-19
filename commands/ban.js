const Discord = require('discord.js');
const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20b046, 0xf2e807, 0xf207d1, 0xee8419, 0x8a2be2];

exports.run = (client, message, args) => {

    let user = message.mentions.users.first();
    let reason = args.slice(1).join(` `);
    if(!message.guild.member(client.user).hasPermission(`BAN_MEMBERS`)) return message.reply(`I do not have the required permission(s): **BAN_MEMBERS**`);
    if(!message.guild.member(message.author).hasPermission(`BAN_MEMBERS`)) return message.reply(`You do not have the required permission(s): **BAN_MEMBERS**`);
    if(message.mentions.users.size < 1) return message.reply(`Please mention a user to **ban**!`);
    if(!message.guild.member(user).bannable) return message.reply(`I cannot ban someone who has more power than me!`);

    user.send(`You have been banned from **${message.guild.name}** for: **${reason}**!`).then(message => {
        message.guild.member(user).ban();
        const embed = new Discord.RichEmbed()
        .setTitle(`Banning ${user.username}...`)
        .setDescription(`Banned ${user} for: ${reason}`)
        .setColor(hexcols[~~(Math.random() * hexcols.length)])
        message.channel.send({embed});
    })
	
	console.log(`[Spy] ${message.author.username}#${message.author.discriminator} used the Ban command in ${message.guild.name} (ID: ${message.guild.id}) - Member Count: ${message.guild.memberCount}`);

}