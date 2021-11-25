const { MessageEmbed } = require('discord.js')
const moment = require('moment')
moment.locale('ITA')

module.exports ={
    commands: 'userinfo',
    description: 'Fornisce le informazioni di un utente taggato.',

    callback: (message, args) => {

        const member = message.mentions.members.first() || message.member
        const status = {
            online: '🟢 Online',
            idle: '🟡 Inattivo',
            dnd: '🔴 Non disturbare',
            offline: '⚫ Offline'
        }

        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Informazioni utente ${member.user.username}`, member.user.displayAvatarURL())
        .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
        .addField('<a:arrow_right:805663924267384852> **Username:**', `${member.user.username}#${member.user.discriminator}`)
        .addField('<a:arrow_right:805663924267384852> **ID utente:**', `${member.id}`)
        .addField('<a:arrow_right:805663924267384852> **Stato:**', `${status[member.presence.status]}`)
        .addField('<a:arrow_right:805663924267384852> **Account creato:**', `${moment.utc(member.user.createdAt).format('LLLL')}`)
        .addField('<a:arrow_right:805663924267384852> **Dentro il server:**', `${moment.utc(member.joinedAt).format('LLLL')}`)
        .addField('<a:arrow_right:805663924267384852> **Vocali:**', member.voice.channel ? member.voice.channel.name + `(${member.voice.channel.id})` : 'Nessuna.')
        .addField('<a:arrow_right:805663924267384852> **Ruoli:**', `${member.roles.cache.map(role => role.toString())}`, true)
        message.channel.send(embed)
    }
}
