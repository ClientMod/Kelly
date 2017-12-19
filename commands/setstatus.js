const Discord = require("discord.js");
const db = require(`quick.db`);
const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20b046, 0xf2e807, 0xf207d1, 0xee8419, 0x8a2be2];

exports.run = (client, message, args) => {
   
    db.fetchObject(`guildPrefix_${message.guild.id}`).then(i => {

    let status = args.join(" ");

    if(!status){
        const Embed = new Discord.RichEmbed()
        .setAuthor("setstatus", message.author.displayAvatarURL)
        .setDescription(`Command: setstatus\nUsage: ${i.text}setstatus <Game>\nDescription: Sets the bots status\nType: Owner Only`)
        .setColor(hexcols[~~(Math.random() * hexcols.length)]);
            message.channel.send({
                embed : Embed
            })
            return;
        }

    if(message.author.id == "383961325132316682") {
        if(args.length == 0){
            message.reply('Please enter a Status!')
        } else {
            client.user.setStatus(status);
            message.channel.send(`Changed Status To ` + status);
    }}else{
	var time = new Date();
	console.log(`[${`Spy - ` + time.getHours() + `:` + time.getMinutes() + `:` + time.getSeconds()}] ${message.author.username}#${message.author.discriminator} tried using the setstatus command in ${message.guild.name} (ID: ${message.guild.id}) - Member Count: ${message.guild.memberCount}`);
        message.channel.send("Only Tyler#1975 can use this");
        }
    })
}