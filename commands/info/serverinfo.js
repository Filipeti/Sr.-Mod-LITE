const { MessageEmbed } = require("discord.js")

module.exports = {
    commands: 'serverinfo',
    description: 'Fornisce le informazioni del server',

    callback: (message, args) => {

      const { guild } = message;
      console.log(guild)

      const { name, region, memberCount, owner, afkTimeout, ID} = guild
      const icon = guild.iconURL()

      const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Informazioni del server "${name}"`)
      .setThumbnail(icon)
      .addFields({
        name: ":arrow_right:Owner:",
        value: owner.user.tag,
      },
      {
        name: ":arrow_right:ID del server:",
        value: guild.id,
      },
      {
        name: ":arrow_right:Potenziamenti:",
        value: guild.premiumTier,
      },
      {
         name: ":arrow_right:Livello potenziamento:",
         value: guild.premiumSubscriptionCount,
      },
      {
         name: ":arrow_right:Ruolo principale:",
         value: guild.roles.highest,
      },
      {
        name: ":arrow_right:Membri:",
        value: memberCount,
      },
      {
        name: ":arrow_right:AFK timeout:",
        value: afkTimeout / 60,
      });

      message.channel.send(embed)

      console.log(name, region, memberCount, icon, afkTimeout, ID)
      console.log(owner.user.tag)

    }
}
