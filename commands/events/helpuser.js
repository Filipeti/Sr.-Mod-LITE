const Discord = require("discord.js");

module.exports = {
    commands: ['helpuser', 'huser'],
    description: 'Comando di supporto',
    callback: (message, args) => {
      var embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Supporto Sr.Moderation LITE (edizione limitata)")
      .setDescription("Di seguito potrai trovare tutti i comandi eseguibili dal bot per tutti gli utenti.\n\nPrefisso: '--'\n\n`helpuser` o `huser`: comandi di supporto per utenti;\n\n**Info**\n`infobot`: fornisce le informazioni del bot;\n\n`userinfo`: fornisce le informazioni dell'utente taggato;\n\n`serverinfo`: fornisce le informazioni del server.")
      .setTimestamp();

      message.channel.send(embed);
    } 
}