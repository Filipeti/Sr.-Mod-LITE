const { MessageEmbed } = require("discord.js");

module.exports = {
  commands: ["embed", "ticket", "suggest", "warn", "giveaway", "setprefix"],
  permission: ["MANAGE_CHANNELS"],
  permissionError: "non hai il permesso di utilizzare questo comando.",
  description: "Restituitsce le funzioni del bot premium.",
  usage: "--premium",

  callback: (message, args, text) => {
    
message.channel.send("Aquista il bot completo per utilizzare il comando.")

  }
}