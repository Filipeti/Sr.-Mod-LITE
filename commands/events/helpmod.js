const Discord = require("discord.js");

module.exports = {
    commands: ['helpmod', 'hmod'],
    description: 'Comando di supporto moderazione',
    callback: (message, args) => {
      var embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Supporto moderazione")
      .setDescription("Di seguito potrai trovare tutti i comandi di moderazione eseguibili dal bot.\n\n**FONDAMENTALE: non si usano i comandi kick/ban attraverso utenti/bot di ruolo superiore (al bot verranno effettuati ultetiori aggiornamenti).**\n\n`clear` o `cl`: eliminazione dei messaggi;\n\n`kick`: espelli un utente;\n\n`ban`: banna un utente;\n\n`unban`: sbanna un utente.\n\n`tempban` o `tban`: tempbanna un utente.")
      .setTimestamp();

      message.channel.send(embed);
    } 
}