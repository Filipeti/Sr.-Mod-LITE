const { MessageEmbed } = require("discord.js")

module.exports = {
    commands: 'unmute',
    description: 'Muta un utente.',
    permissions: 'ADMINISTRATOR',
    permissionError: 'non hai il permesso di utilizzare questo comando.',
    expectedArgs: 'm!unmute <utente>',

    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('menziona un utente valido per smutare.')
        member.roles.remove('800737969870471168')
        if(!member.roles.cache.has('800737969870471168')) return message.reply("l'utente è già smutato.");

        const embed = new MessageEmbed()
        .setTitle('MadeInRP (UNMUTE)')
        .setDescription(`<@${member.user.id}> è stato smutato.`)
        .addField('Smutato da: ', message.author)
        .setColor('RANDOM');
        message.channel.send(embed)
    }
}