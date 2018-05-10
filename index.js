const Discord = require('discord.js');


const client = new Discord.Client();

client.on('ready', () => {
	console.log('- Pide Bot -');
	console.log('Aktif!');
    client.user.setActivity('Çıtır pide', { type: 'WATCHING' });

});

client.on('guildCreate', guild => {
	console.log(`${guild.name} Adlı sunucuya katıldım!`)
	let color = ((1 << 24) * Math.random() | 0).toString(16);
	var joinembed = new Discord.RichEmbed()
    .setTitle(`- Bildirim -`)
    .setDescription(`Pide bot kanalına eklendi!`)
	.setColor(`#${color}`);
	guild.owner.sendMessage(joinembed);
})

client.on('message', message => {
	if (message.channel.type === "dm") return message.channel.send("Artık özelden yardım edemiyoruz.");

		
	
});


client.login(process.env.token);
