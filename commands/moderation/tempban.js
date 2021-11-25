const ms = require('ms')
const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['tempban', 'tban'],
    description: 'Tempbanna un utente.',
    permissions: 'ADMINISTRATOR',
    permissionError: 'non hai il permesso di utilizzare questo comando.',
    usage: 'm!tempban <utente> <tempo>',

    callback: async(message, args) => {

        const member = message.mentions.members.first()
        if(!member) return  message.reply('menziona un utente valido per bannare.')

        const time = args [1]
        if(!time) return message.reply('specifica un periodo di ban.')

        await member.ban()

        const embed = new MessageEmbed()
        .setTitle('MadeInRP (TEMPBAN)')
        .setDescription(`<@${member.user.id}> è stato bannato.\n\nPeriodo di ban: ${time}.`)
        .addField('Bannato da:', message.author)
        .setColor('RANDOM')
        message.channel.send(embed)

        setTimeout(async () => {
            await message.guild.members.unban(member)
            message.channel.send(`<@${member.user.id}> è stato sbannato dopo ${time} di ban.`)
        }, ms(time))


    }
}