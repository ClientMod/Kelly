const Discord = require(`discord.js`);
const db = require(`quick.db`);
const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20b046, 0xf2e807, 0xf207d1, 0xee8419, 0x8a2be2];

exports.run = (client, message, args) => {

    db.fetchObject(`guildPrefix_${message.guild.id}`).then(i => {

    let game = args.join(" ");

    if(!game){
        const Embed = new Discord.RichEmbed()
        .setAuthor(`setgame`, message.author.displayAvatarURL)
        .setDescription(`Command: setgame\nUsage: ${i.text}setgame <Game>\nDescription: Sets the bots playing game\nType: Owner Only`)
        .setColor(hexcols[~~(Math.random() * hexcols.length)]);
            message.channel.send({
                embed : Embed
            })
            return;
        }

    if(message.author.id == "383961325132316682") {
        if(args.length == 0){
            message.reply('Please enter a game!')
        } else {
            client.user.setGame(game);
            message.channel.send(`Changed Game To ` + game);
    }}else{
        console.log(`[Spy] ${message.author.username}#${message.author.discriminator} tried using the Eval command in ${message.guild.name} (ID: ${message.guild.id}) - Member Count: ${message.guild.memberCount}`);
        message.channel.send("Only Tyler#1975 can use this");
        }
    })
}