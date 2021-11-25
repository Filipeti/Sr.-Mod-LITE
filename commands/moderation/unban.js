const { MessageEmbed } = require("discord.js")

module.exports = {
    commands: 'unban',
    description: "Sbanna un utente tramite l'ID",
    permissions: 'ADMINISTRATOR',
    permissionError: 'non hai il permesso di utilizzare questo comando.',
    expectedArgs: 'm!unban ID-utente',

    callback: (message, args) => {

        const userID = args[0]
        if(!userID) return message.reply("è necessario l'ID di un utente per sbannare")
        message.guild.fetchBans().then(bans => {
            if(bans.size == 0) return
            let bannedUser = bans.find(b => b.user.id == userID)

            if(bannedUser) {

                const embed =  new MessageEmbed()
                .setTitle('MadeInRP (Sban)')
                .setDescription(`<@${userID}> è stato sbannato.`)
                .addField('Sbannato da:', message.author)
                .addField('ID utente:-', userID)
                .setColor('RANDOM')
                .setTimestamp();

                message.channel.send(embed).then(message.guild.members.unban(bannedUser.user))
            } else {
                message.reply("l'utente non è bannato");
            }
        })


    }
}