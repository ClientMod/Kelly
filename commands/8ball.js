const Discord = require('discord.js');
const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20b046, 0xf2e807, 0xf207d1, 0xee8419, 0x8a2be2];

function eightBall() {

    const sayings = [
        `It is certain`,
        `It is decidedly so`,
        `Without a doubt`,
        `Yes, definitely`,
        `You may rely on it`,
        `As I see it, yes`,
        `Most likely`,
        `Outlook good`,
        `Yes`,
        `Signs point to yes`,
        `Reply hazy try again`,
        `Ask again later`,
        `Better not tell you now`,
        `Cannot predict now`,
        `Concentrate and ask again`,
        `Don't count on it`,
        `My reply is no`,
        `My sources say no`,
        `Outlook not so good`,
        `Very doubtful`,
    ];

    return sayings[Math.floor(Math.random() * sayings.length)];

}

exports.run = (Kelly, message, args) => {

    const question = args.join(` `);

    if(!question) return message.reply(`You Might wanna ask a question...`);

    const embed = new Discord.RichEmbed()
    .setThumbnail(message.author.displayAvatarURL)
    .setColor(hexcols[~~(Math.random() * hexcols.length)])
    .setDescription(`Question:\n${question} \n\nAnswer:\n${eightBall()}`);
    message.channel.send({embed});
	
	console.log(`[Spy] ${message.author.username}#${message.author.discriminator} used the 8ball command in ${message.guild.name} (ID: ${message.guild.id}) - Member Count: ${message.guild.memberCount}`);
	
}
