const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'kick',
    description: 'Kicka un utente.',
    permissions: 'ADMINISTRATOR',
    permissionError: 'Non hai il permesso di utilizzare questo comando',
    expectedArgs: 'm!kick <utente>',

    callback: (message, args) => {
        var esp = message.mentions.members.first();

        if (!message.member.hasPermission("KICK_MEMBERS")) {
            message.reply('non hai il permesso di utilizzare questo comando');
            return;
        }

        if (!esp) {
            message.reply('menziona un utente valido per kickare.');
            return;
        }

        if (!message.mentions.members.first().kickable) {
            message.reply('non ho il permesso di utilizzare il comando.');
            return
        }
        
        const embed = new MessageEmbed()
        .setTitle('MadeInRP (KICK)')
        .setDescription(`<@${esp.user.id}> e' stato kickato.`)
        .addField('Kickato da: ', message.author.username)
        .setColor('RANDOM')

        esp.kick()
            .then(() => message.channel.send(embed))
    }
}