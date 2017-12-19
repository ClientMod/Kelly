var reload = (message, cmd) => {
    delete require.cache[require.resolve('../commands/' + cmd)];
    try {
      let cmdFile = require('../commands/' + cmd);
    } catch (err) {
      message.channel.send(`Problem loading ${cmd}: ${err}`).then(
        response => (error => console.log(error.stack))
      ).catch(error => console.log(error.stack));
    }
    message.channel.send(`${cmd} was successfully reloaded!`).then( 
      response => (error => console.log(error.stack))
    ).catch(error => console.log(error.stack));
  }
  exports.reload = reload;

exports.run = (Kelly, message, args) => {

    if(message.author.id === "383961325132316682"){

    let cmd = args.join(' ');
    reload(message, cmd);
    }else{
        console.log(message.author.tag + " tried to RELOAD a COMMAND in " + message.guild.name + ".")
        message.channel.send("Only Tyler#1975 can use this")
    }
}