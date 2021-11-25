module.exports ={
    commands: ['clear', 'cl'],
    permissions: 'ADMINISTRATOR',
    permissionError: 'Non hai il permesso di utilizzare questo comando.',
    description: 'Elimina i messaggi',
    usage: "m!clear",
    
    callback: (message, args) => {
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply('inserisci un numero valido.')
        } else if (amount <= 1 || amount > 100) {
            return message.reply('puoi eliminare un numero massimo di 99 messaggi.')
        }

        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.reply("c'è stato un errore durante l'esecuzione, riprovare.")
        })
    }
}