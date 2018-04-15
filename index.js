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
	if (message.content.toLowerCase().includes('<@430078929068490752>')) {
	if (message.channel.type === "dm") return message.channel.send("Artık özelden yardım edemiyoruz.");
	
		
	if (message.content.toLowerCase().includes('merhaba')) message.channel.send(message.author.username + ' Sanada merhaba');
	if (message.content.toLowerCase().includes('hex kodu oluştur')) {
		let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
      let hexembed = new Discord.RichEmbed() //Embeds.
            .setTitle(`#${color}`)
            .setColor(`#${color}`);
     message.channel.send({embed: hexembed});
	}
	if (message.content.toLowerCase().includes('renk kodu oluştur')) {
		let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
      let hexembed = new Discord.RichEmbed() //Embeds.
            .setTitle(`#${color}`)
            .setColor(`#${color}`);
     message.channel.send({embed: hexembed});	
	}
	
	if (message.content.toLowerCase().includes('yardım et')) {
	let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.

		let helpe = new Discord.RichEmbed() //Embeds.
			.setTitle(`Pide Bot Rehberi`)
			.setDescription('Ben bir basit yapay zekayım. Türkçedeki kelimeleri kullanırım ne bildiğimi öğrenmek için dene :)')
			.setColor(`#${color}`);
     message.author.sendMessage({embed: helpe});	
	}
	
	
  if (message.content === "<@430078929068490752>") {
	  	let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.

		let yeni = new Discord.RichEmbed() //Embeds.
			.setTitle('Efendim ' + message.author.username)
			.setDescription('Eğer neler hakkında konuşabileceğini bilmiyorsan @Pide yardım et komutuyla pide hakkında bilgi sahibi olabilirsin.')
			.setColor(`#${color}`);
	message.channel.sendMessage({embed: yeni});
  }
	
	
	if (message.content.toLowerCase().includes('yazı tura at')) {
    	var result = Math.floor((Math.random() * 2) + 1);
    	if (result == 1) {
    		message.channel.send("Paranın üstü yazı çıktı!")
    	} else if (result == 2) {
    		message.channel.send("Paranın üstü tura çıktı!")
    	}
	}
	
	if (message.content.toLowerCase().includes('kullanıcı renklerini göster')) {
		let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
		if(colors.size < 1) return message.channel.send("Bu kanalda hiçbir kullanıcı rengi yok!")
			
		message.channel.send(colors.array().join(" "));
	}
	
	if (message.content.toLowerCase().includes('mesaj yazdır')) {
		
	}
	}
	
});


client.login(process.env.token);
