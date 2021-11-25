const Discord = require("discord.js");

module.exports = {
    commands: 'premium',
    description: 'Lista comandi bot premium.',
    callback: (message, args) => {
      var embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("SuperModeration premium")
      .setDescription("**Versione premium in uscita!**\n\nAcquistando il bot premium potrai accedere a vari comandi:\n\n- creare i messaggi embed;\n\n- utilizzare il sistema dei suggerimenti;\n\n- utilizzare il sistema dei ticket per il supporto di ogni server;\n\n- potrai warnare gli utenti del tuo server (senza abusi);\n\n- avrai il contatore di membri automatico del tuo server;\n\n- potrai avviare i GiveAway con i tuoi utenti;\n\n- avrai il livellamento automatico per ogni utente del tuo stesso server.")
      .setTimestamp();

      message.channel.send(embed);
    } 
}