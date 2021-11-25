const { MessageEmbed } = require("discord.js")

module.exports = {
    commands: 'mute',
    description: 'Muta un utente.',
    permissions: 'ADMINISTRATOR',
    permissionError: 'non hai il permesso di utilizzare questo comando.', 
    expectedArgs: 'm!mute <utente>',

    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('menziona un utente valido per mutare.')
        member.roles.add('800737969870471168')
        if(member.roles.cache.has('800737969870471168')) return message.reply("l'utente è già mutato.")

        const embed = new MessageEmbed()
        .setTitle('MadeInRP (MUTE)')
        .setDescription(`<@${member.user.id}> è stato mutato.`)
        .addField('Mutato da: ', message.author)
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}