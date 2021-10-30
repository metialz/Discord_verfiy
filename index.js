const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
	client.user.setPresence({
   	status: "online",
   	activity: {
        name: "𝗦𝗘𝗡𝗧𝗜𝗠𝗘𝗡𝗧",
        type: "LISTENING"
    }
});
});



client.on('message', message => {
	if (message.channel.id === '887347686083285012'){
		message.delete();
	}
	
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;
	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const cmd = args.shift().toLowerCase();

	if (cmd === 'pm'){
	const starrr = client.emojis.cache.get("887011094420414505")
	const poll = new Discord.MessageEmbed()
	  .setTitle('** PV Commands **')
     	 .setAuthor(message.guild.name, 'https://cdn.discordapp.com/icons/826535079656161310/a_ba9495a9515a94b90623745a91bbf4bc.gif?size=1024')
     	 .setDescription(` ${starrr} ** !nv c limit 2 ** : برای لیمیت گذاشتن و تنظیم تعداد چنل خود دستور  \n \n ${starrr} ** !nv c hide ** : برای پنهان کردن و هاید کردن چنل خود دستور   \n \n ${starrr} ** !nv c show ** : و بلعکس برای در آوردن چنل از حالت پنهان و نمایش آن برای عموم دستور     \n \n ${starrr} ** !nv c lock ** : برای قفل کردن و لاک کردن چنل خود دستور   \n \n ${starrr} ** !nv c unlock ** : و برای باز کردن قفل چنل \n \n ${starrr}  ** !nv c rename Moody 🧞 ** : و برای عوض کردن اسم چنل `, '__ __')
     	 .setFooter(message.guild.name, 'https://cdn.discordapp.com/icons/826535079656161310/a_ba9495a9515a94b90623745a91bbf4bc.gif?size=1024')
    	 .setColor('blue')
	.setImage('https://cdn.discordapp.com/attachments/781822832245342208/887366452741545984/5005dbccb59bc9929274c043b848eb84.gif')
    	 message.channel.send(poll)
	}
  // verficition start
  if (cmd === 'setup') {
    if (message.member.roles.cache.some(role => role.id === '874693067045732363')) {
      const poll = new Discord.MessageEmbed()
      .setAuthor(message.guild.name, 'https://cdn.discordapp.com/attachments/875067202057961504/903728560261451796/freedom_4.gif?size=1024')
      .addField('به سرور 𝗦𝗘𝗡𝗧𝗜𝗠𝗘𝗡𝗧 خوش آمدید\n برای گرفتن رول و وریفای شدن ری اکت :green_circle:  زیر را بزنید و در چنل Waiting منتظر  ادمین های ما بمونید', '__ __')
      .setFooter(message.guild.name, 'https://cdn.discordapp.com/attachments/875067202057961504/903728560261451796/freedom_4.gif?size=1024')
      .setColor('blue')
      message.channel.send(poll).then(embedMessage => {
        embedMessage.react('🟢')
          client.on('messageReactionAdd', function (messageReaction, user) {
            if (messageReaction.emoji.name === '🟢') {
              client.channels.cache.get('875067202057961504').send(`<@&874693067045732363> Yeki To Waitinge Check Konid ${user}`)
            }
          })
      })
    }
  }
	

  // verficition finish
  if (cmd === 'v'){
    if (message.member.roles.cache.some(role => role.id === '874693067045732363')) {
      const Ommaree = client.emojis.cache.get("886972590013435934")
      const member = message.mentions.members.first()
      member.roles.remove('875620544010133544')
      member.send(`Salam , be servere 𝗠𝗢𝗢𝗗𝗬 khosh omadi azizam , shoma verify shodid ${Ommaree}`);
      client.channels.cache.get('885829156020027393').send(`${message.author.username} New Member ${member} ra Verify Kard.`)
    }
  }

  if (cmd === 'r'){
    if (message.member.roles.cache.some(role => role.id === '874693067045732363')) {
      const member = message.mentions.members.first()
      member.roles.add('886511292314185758')
      client.channels.cache.get('885829208813740062').send(`:green_square: ${message.author.username} be <@${member.id}> role reject dad`)
      fs.writeFileSync(`./ban/bans.json`, `${member.id} \n`)
    }
      else{
      message.channel.send('koskesh kiri bia kiramo bokhor')
    }
  }
	
   if (cmd === 'reject') {
    if (message.member.roles.cache.some(role => role.id === '874693067045732363')) {
      const poop = client.emojis.cache.get("881296160764092466")
      const poll = new Discord.MessageEmbed()
      .setAuthor(message.guild.name, 'https://cdn.discordapp.com/attachments/875067202057961504/903728560261451796/freedom_4.gif?size=1024')
      .addField(`یه پیام دارم برا ممبر عزیزی که لفت دادی از ریجکت در بیای بیا بشین روش عزیز منظورم کانکت تو ادمین:eggplant:`, '__ __')
      .setFooter(message.guild.name, 'https://cdn.discordapp.com/icons/826535079656161310/a_ba9495a9515a94b90623745a91bbf4bc.gif?size=1024')
      .setColor('blue')
      .setImage('https://cdn.discordapp.com/attachments/781822832245342208/885833148619952138/doc_2021-09-10_14-43-50.gif')
      .setThumbnail('https://media.discordapp.net/attachments/781822832245342208/885836645058899968/ezgif.com-gif-maker.gif')
      message.channel.send(poll)
    }
  }
  // give role end
  if (cmd === 'nickname'){
    if (message.member.roles.cache.some(role => role.id === '874693067045732363')) {
      const canal = message.guild.channels.cache.get('876910027858903081');
      canal.join()
    }
  }
})

client.on("guildMemberAdd", member => {
	fs.readFile("./ban/bans.json", function (err, data) {
	  if (err) throw err;
	  if(data.indexOf(`${member.id}`) >= 0){
	    member.roles.add('886511292314185758')
            member.roles.remove('875620544010133544')
            member.guild.channels.cache.get("885829208813740062").send(`Yek Madar Jende Ba Id  <@${member.id}> Reject Shode bood Left Dad Ta Maro Kir Kone Ke Nanash Kir Khord`);
	  }
	});
});

client.login(config.token);
