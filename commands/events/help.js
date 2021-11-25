const Discord = require("discord.js");

module.exports = {
    commands: 'help',
    description: 'Comando di supporto',
    callback: (message, args) => {
      var embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Supporto Sr.Moderation LITE (edizione limitata)")
      .setDescription("Di seguito potrai trovare tutti i comandi eseguibili dal bot.\n\nPrefisso: '--'\n\n`helpmod` o `hmod`: supporto comandi di moderazione.\n\n`helpuser` o `huser`: lista dei comandi eseguibili dagli utenti")
      .setTimestamp();

      message.channel.send(embed);
    } 
}