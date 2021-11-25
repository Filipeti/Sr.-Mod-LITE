const Discord = require('discord.js');
const client = new Discord.Client();

const { token } = require('./config.json');
const loadCommands = require('./commands/load-commands');


client.once('ready', () => {
    console.log('ONLINE')
    
    setInterval(() => {
        const statuses = [
            `--help per supporto`,
            `Versione LITE`,
            `--update per visualizzare tutti gli update`,
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "PLAYING"})
    }, 2000)
    loadCommands(client)
})

client.login(process.env.token)