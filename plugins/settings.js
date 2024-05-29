const { izumi } = require('../lib/');

izumi({
	pattern: 'reboot',
	fromMe: true,
	desc: 'Bot restart',
	type: 'system'
}, async (message, match, client) => {
await message.send("_rebooting_");
return require('pm2').restart('index.js');
});