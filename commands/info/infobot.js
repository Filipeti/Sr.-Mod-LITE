const { MessageEmbed } = require("discord.js");

module.exports = {
  commands: "infobot",
  description: "Restituisce le infornazioni del bot",
  usage: "--infobot",

  callback: (message, args, text) => {
    
const embed = new MessageEmbed()
.setTitle("Informazioni del bot")
.setColor("RANDOM")
.addField(":arrow_right:Versione:", "Versione LITE 1.0.4\n(`infobot` per visualizzare gli aggiornamenti.)")
.addField(":arrow_right:Supporto:", "`--help`")
.addField(":arrow_right:Hosting:", "orario dalle 15:00 alle 06:00\n(Orario mattutino solo per ulteriori test)");

message.channel.send(embed);

  }
}