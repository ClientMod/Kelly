const Discord = require(`discord.js`);
const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20b046, 0xf2e807, 0xf207d1, 0xee8419, 0x8a2be2];

function clean(text) {
    if (typeof(text) === `string`)
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, `@` + String.fromCharCode(8203));
    else
        return text;
  }

exports.run = (Kelly, message, args) => {

        if(message.author.id == `383961325132316682`){
        try {
          const code = args.join(` `);
          let evaled = eval(code);
    
          if (typeof evaled !== `string`)
            evaled = require(`util`).inspect(evaled);

          const embed = new Discord.RichEmbed()
          .setTitle(`Evaluating...`)
          .setColor(hexcols[~~(Math.random() * hexcols.length)])
          .setDescription(`Input:\n${code}\n \nOutput:\n${clean(evaled)}`);
          message.channel.send({embed});
        } catch (err) {
          message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
            }
        }else{
            console.log(`[Spy] ${message.author.username}#${message.author.discriminator} tried using the Eval command in ${message.guild.name} (ID: ${message.guild.id}) - Member Count: ${message.guild.memberCount}`);
            message.channel.send(`Only Tyler#1975 can use this`);
    }
}