const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'ban',
    description: 'Banna un utente.',
    permissions: 'ADMINISTRATOR',
    permissionError: 'non hai il permesso di utilizzare questo comando.',
    expectedArgs: 'm!ban @utente',

    callback: (message, args) => {
        var banner = message.mentions.members.first();

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.reply('non hai il permesso di utilizzare questo comando.');
            return;
        }

        if (!banner) {
            message.reply('menziona un utente valido per bannare.');
            return;
        }

        if (!banner.bannable) {
            message.reply('non ho il permesso di utilizzare questo comando.');
            return
        }
        
        const embed = new MessageEmbed()
        .setTitle('MadeInRP (BAN)')
        .setDescription(`<@${banner.user.id}> è stato bannato.`)
        .addField('Bannato da: ', message.author)
        .setColor('RANDOM')

        banner.ban()
            .then(() => message.channel.send(embed))
    }
}