const Discord = require(`discord.js`);

exports.run = (Kelly, message, args) => {

    var max = 12119;
    var min = 10000;
    var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
    var random = Math.round(MathRan);

    if(message.channel.nsfw){
        let embed = new Discord.RichEmbed()
        .setImage(`http://media.oboobs.ru/boobs_preview/${random}.jpg`)
        message.channel.send({embed});
    }else{
        if(!message.channel.nsfw){
            return message.channel.send(`I cannot send this outside a NSFW channel!, Please switch to a NSFW channel to use this command.`); 
        }
    }
	
	var time = new Date();
	console.log(`[${`Spy - ` + time.getHours() + `:` + time.getMinutes() + `:` + time.getSeconds()}] ${message.author.username}#${message.author.discriminator} used the boobs command in ${message.guild.name} (ID: ${message.guild.id}) - Member Count: ${message.guild.memberCount}`);

}