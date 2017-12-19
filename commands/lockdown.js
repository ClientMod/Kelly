const ms = require(`ms`);

exports.run = (Kelly, message, args) => {

    if(!message.guild.member(message.author).hasPermission(`ADMINISTRATOR`)) return message.reply("You do not have the required permission(s): **ADMINISTRATOR**");

    if(!Kelly.lockit) Kelly.lockit = [];
    let time = args.join(' ');
    let unlocks = [`release`, `unlock`];
    if(!time) return message.reply(`Please enter a x time to lockdown the chat!`);

    if(unlocks.includes(time)){
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
        }).then(() => {
            message.channel.send(`Lockdown has been lifted!`);
            clearTimeout(Kelly.lockit[message.channel.id]);
            delete Kelly.lockit[message.channel.id];
        }).catch(error => {
            message.channel.send(`There's been a error: `, error);
        });
    }else{
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        }).then(() => {
            message.channel.send(`This Channel has been locked down for ${ms(ms(time), {long: true})}`).then(() => {
                Kelly.lockit[message.channel.id] = setTimeout(() => {
                    message.channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: null
                    }).then(message.channel.send(`Lockdown has been lifted!`)).catch(console.log);
                    delete Kelly.lockit[message.channel.id];
                }, ms(time));
            }).catch(error => {
                message.channel.send(`There has been a error: `, error);
            })
        })
    }
    console.log(`[Spy] ${message.author.username}#${message.author.discriminator} used the Lockdown command in ${message.guild.name} (ID: ${message.guild.id}) - Member Count: ${message.guild.memberCount}`);
}