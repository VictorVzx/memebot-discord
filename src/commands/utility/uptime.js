const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('uptime').setDescription('Shows how long the bot is online.'),
    async execute(interaction) {
        const uptime = process.uptime();
        const hours = Math.floor(uptime / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = Math.floor(uptime % 60);

        await interaction.reply(
            `Uptime: ${hours} hour(s), ${minutes} minute(s), and ${seconds} second(s).`
        );
    }
}