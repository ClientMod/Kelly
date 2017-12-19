exports.run = (Kelly, message, args) => {

    message.reply(`Kelly is now open source! **https://bit.ly/KellySRC **`);
	var time = new Date();
	console.log(`[${`Spy - ` + time.getHours() + `:` + time.getMinutes() + `:` + time.getSeconds()}] ${message.author.username}#${message.author.discriminator} used the src command in ${message.guild.name} (ID: ${message.guild.id}) - Member Count: ${message.guild.memberCount}`);

}