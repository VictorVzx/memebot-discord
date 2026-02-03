const { SlashCommandBuilder } = require('discord.js');
const { data } = require('./user');

module.exports = {
    data: new SlashCommandBuilder().setName('menu').setDescription('Displays a menu of utility commands.'),
    async execute(interaction) {
        const commandList = [
            { name: 'ping', description: 'Replies with Pong!' },
            { name: 'uptime', description: 'Shows how long the bot is online.' },
            { name: 'user', description: 'Provides information about the user.' }
        ];

        let replyMessage = 'Here are the available utility commands:\n\n';
        commandList.forEach(cmd => {
            replyMessage += `**/${cmd.name}**: ${cmd.description}\n`;
        });

        await interaction.reply(replyMessage);
    }
}