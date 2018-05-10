const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const ffmpeg = require('ffmpeg');

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
    if (message.content === 'çal aleyna') { // eğer prefix ve çay yan yana kullanılırsa burda alttaki şeyleri yap
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) { // eğer kullanıcı sesli kanalda değilse resti çek
            return message.reply('Bir kanala gir öyle çaldır yoksa ohooo');
        }

        voiceChannel.join().then(connection => { // ve çal bakalım
            const stream = ytdl('https://www.youtube.com/watch?v=yJpJCZYTL74', { filter: 'audioonly' });
            const dispatcher = connection.playStream(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        });
    }
		
	
});


client.login(process.env.token);
