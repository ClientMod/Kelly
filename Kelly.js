const Discord = require(`discord.js`);
const db = require(`quick.db`);
const Kelly = new Discord.Client();

const { TOKEN, VERSION } = require(`./util/botsettings.json`);

Kelly.on(`message`, message => {

    db.fetchObject(`guildPrefix_${message.guild.id}`).then(i => {

        if(i.text){
            PREFIX = i.text;
        }else{
            PREFIX = `k?`;
        }
        

        if(message.author.bot) return;
        if(message.channel.type == `dm`) return;
        if(message.content.indexOf(PREFIX) !== 0) return;

        const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        try {
            const commands = require(`./commands/${command}.js`);
            commands.run(Kelly, message, args);
        } catch (error) {
            console.log(error);
        }
    })
});

Kelly.on(`guildCreate`, guild => {

    guild.owner.send(`I've been added to your discord, i just wanted to say thank you. here is info on how to use the bot:\n**1)** The default prefix is \`\`${PREFIX}\`\`\n**2)** Commands don't work in dm\n**3)** Support server is: https://discord.gg/Z5jVg2G`);
    console.log(`[Spy] I was added to ${guild.name} (ID: ${guild.id}) - Member Count: ${guild.memberCount}`);

})

Kelly.on(`guildDelete`, guild => {
    
    console.log(`[Spy] I was removed from ${guild.name} (ID: ${guild.id}) - Member Count: ${guild.memberCount}`);
    
});

Kelly.on(`guildMemberAdd`, (member, message) => {

    console.log(`[Spy] ${member.user.username}#${member.user.discriminator} joined ${member.guild.name} (ID: ${member.guild.id}) - Member Count: ${member.guild.memberCount}`);

    /*db.fetchObject(`messageChannel_${member.guild.id}`).then(i => {

        db.fetchObject(`joinMessageDM_${member.guild.id}`).then(o => {
            if(!o.text) return;
            else 
            const embed = new Discord.RichEmbed(member, o.tet.replace('${user}', member).replace*`{members}`, member.guild.memberCount);

            if(!member.guild.channels.get(i.text)) return;


        })

    })*/

});

Kelly.on(`guildMemberRemove`, member => {
    
    console.log(`[Spy] ${member.user.username}#${member.user.discriminator} left ${member.guild.name} (ID: ${member.guild.id}) - Member Count: ${member.guild.memberCount}`);
    
});

function game1(){

    var PREFIX = `k?`;

    Kelly.user.setGame(`need help? type ${PREFIX}help`);
    setTimeout(game2, 30000);
};

function game2(){
    Kelly.user.setGame(`made by Tyler#1975`);
    setTimeout(game3, 30000);
};

function game3(){
    Kelly.user.setGame(`on ${Kelly.guilds.array().length} guilds with ${Kelly.users.size} users`);
    setTimeout(game1, 30000);
};

Kelly.on(`ready`, () => {

    var PREFIX = `k?`;

    console.log(`Ready in ${Kelly.guilds.array().length} Servers:\n${Kelly.guilds.map(g=>g.name + ` (ID: ${g.id}) - Member Count: ${g.memberCount}`).join(`\n`)}`);
    Kelly.user.setGame(`${PREFIX}help | v${VERSION}`)
    setTimeout(game1, 30000);
});

Kelly.login(TOKEN);