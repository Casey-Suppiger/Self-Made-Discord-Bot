require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

//To add commands add to this matrix
const commands = [
	{
		name: 'hey',
		description: 'Replies with hey!',
	},
	{
		name: 'insult_mitch',
		description: 'Insult that rat bastard Mitch',
	},
	{
		name: 'shutup_drew',
		description: 'Quit your yapping boah',
	},
	{
		name: 'oppentimer',
		description: 'It\'s Oppin\' time',
	},
	{
		name: 'make_lose',
		description: 'Make the selected person lose the game',
		options: [
			{
				name: 'user',
				description: 'The user to message',
				type: ApplicationCommandOptionType.User,
				required: true,
			},
		],
	},
];

const rest = new REST({ version: '10' }).setToken(process.env.Token);

(async () => {
	try {
		console.log('Registering slash commands...');
		
		await rest.put(
			Routes.applicationGuildCommands(
				process.env.ClientId, 
				process.env.SBId,
				process.env.DMLId,
			),
			{ body: commands }
		);
		
		console.log('Slash commands were registered successfully!')
	} catch (error) {
		console.log(`There was an error: ${error}`);
	}
})();