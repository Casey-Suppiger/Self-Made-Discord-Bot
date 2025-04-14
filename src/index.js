require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

//Activates when the bot enables itself
client.on('ready', (c) => {
	console.log(`${c.user.tag} is online.`);
});

//When a message is sent This code runs
client.on('messageCreate', (message) => {
	console.log(`${message.author.tag} said: ${message.content}`);
	
	if (message.author.bot) {
		if (message.mentions.users.first() !== undefined)
		{
			message.mentions.users.first().send('You lost the game!');
			message.delete();
		}
		return;
	}

	if (message.content === 'Hello') {
		message.reply('Hey!');
	}

	if (message.content.toUpperCase().includes('I THINK')) {
		message.reply('Dogshit oppinion: you should feel ashamed');
	}
});

//When a slash command is sent
client.on('interactionCreate', (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	console.log(`${interaction.user.tag} sent command: /${interaction.commandName}`);

	if (interaction.commandName === 'hey') {
		interaction.reply('hey!');
	}

	if (interaction.commandName === 'insult_mitch') {
		interaction.reply('Mitch is dumb');
	}

	if (interaction.commandName === 'shutup_drew') {
		interaction.reply('Shutup Drew!');
	}

	if (interaction.commandName === 'oppentimer') {
		interaction.reply('https://e123movieswatch.com/film/872585/oppenheimer/');
	}
	
	if (interaction.commandName === 'make_lose') {
		const chosenUser = interaction.options.get('user').user;

		interaction.reply({ content: `Telling <@${chosenUser.id}> he lost the game`, ephemeral: true });
		interaction.channel.send(`Hello <@${chosenUser.id}>! Suspect nothing`);
	}
});

//Login
client.login(process.env.Token);
