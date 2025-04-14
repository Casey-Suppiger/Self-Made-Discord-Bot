**AUTHOR:**
Casey Suppiger

**DESCRIPTION:**
This is a personal project of a discord bot I made to screw with my friends. It doesn't really do anything but I'm sharing it here.

**INSTRUCTIONS:**
1. On your browser open discord developer tools and create a new bot and give it basic permissions
2. Once you give it proper permissions copy the bot's Token
3. Open vsc or another IED
4. create a new file titled .env
5. add a variable named "Token" and set it to equal your bot's token
6. Open your discord server and find your guild's ID and ClientID
7. create another variable named "ClientID" and set it equal to the server's clientID
8. create another variable with your server's guildID
9. Open register-commands.js and delete lines 45 and 46
10. Replace them with the line: process.env. + your guildID from the .env file from earlier
11. Open terminal and make sure it is on poweshell, also ensure you have the most recent version of node.js
12. Enter in the console "node src/register-commands.js"
13. Enter in the console "nodemon" (Check developer notes section if problems are arriving)
14. Once you see the bot's name + "is online." in the console the bot should be up and running

**DEVELOPER NOTES:**
I'm not exactly sure what the permissions the bot needs for it to work but they were pretty basic admin things
The bot works for me, sorry if the instructions are off
Make sure discord is open and enabled before starting the bot
errors will be thrown if the bot fails to start
if the bot throws an error while using a command or at all you can restart it with the line: "nodemon"
