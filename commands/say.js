exports.run = (Kelly, message, args) => {

    if(message.author.id == "383961325132316682") {
    message.delete();
    const msg = args.join(` `);

    message.channel.send(msg);
    }else{
        console.log(`[Spy] ${message.author.username}#${message.author.discriminator} tried using the Say command in ${message.guild.name} (ID: ${message.guild.id}) - Member Count: ${message.guild.memberCount}`);
        message.channel.send("Only Tyler#1975 can use this");
    }
}