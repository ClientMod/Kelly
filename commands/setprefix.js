const db = require(`quick.db`);

exports.run = (Kelly, message, args) => {

    db.fetchObject(`guildPrefix_${message.guild.id}`).then(i => {

    if(!message.guild.member(message.author).hasPermission(`ADMINISTRATOR`)) return message.reply("You do not have the required permission(s): **ADMINISTRATOR**");
    if(!args.join(` `)) return message.reply(`Enter a prefix!. Usage: ${i.text}setprefix <prefix`);

    db.updateText(`guildPrefix_${message.guild.id}`, args.join().trim()).then(i => {

        console.log(`[Spy] ${message.author.username}#${message.author.discriminator} changed the prefix to ${i.text} in ${message.guild.name} (ID: ${message.guild.id}) - Member Count: ${message.guild.memberCount}`);
        message.channel.send(`Successfully changed prefix to **${i.text}**!`);
        })
    })
	var time = new Date();
	console.log(`[${`Spy - ` + time.getHours() + `:` + time.getMinutes() + `:` + time.getSeconds()}] ${message.author.username}#${message.author.discriminator} used the setprefix command in ${message.guild.name} (ID: ${message.guild.id}) - Member Count: ${message.guild.memberCount}`);
}