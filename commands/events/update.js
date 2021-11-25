const Discord = require("discord.js");

module.exports = {
    commands: 'update',
    description: 'Comando di supporto',
    callback: (message, args) => {
      var embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Sr. Moderation LITE updater")
      .addField("1.0.4", "Fixati i comandi `kick` e `ban`.")
      .addField("1.0.3", "Aggiornamento comando `update`")
      .addField("1.0.2", "Fixato il comando `helpuser`")
      .addField("1.0.1", "Aggiornamento comandi premium.")
      .addField("1.0.0", "Prima versione.")
      .setTimestamp();

      message.channel.send(embed);
    } 
}