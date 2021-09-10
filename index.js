const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const cmd = args.shift().toLowerCase();


  // verficition start
  if (cmd === 'setup') {
    if (message.member.roles.cache.some(role => role.id === '874693067045732363')) {
      const poll = new Discord.MessageEmbed()
      .setAuthor(message.guild.name, 'https://cdn.discordapp.com/icons/826535079656161310/a_ba9495a9515a94b90623745a91bbf4bc.gif?size=1024')
      .addField('به سرور مودی خوش آمدید\n برای گرفتن رول و وریفای شدن ری اکت :green_circle:  زیر را بزنید و در چنل Waiting منتظر  ادمین های ما بمونید', '__ __')
      .setFooter(message.guild.name, 'https://cdn.discordapp.com/icons/826535079656161310/a_ba9495a9515a94b90623745a91bbf4bc.gif?size=1024')
      .setColor('blue')
      message.channel.send(poll).then(embedMessage => {
        embedMessage.react('🟢')
          client.on('messageReactionAdd', function (messageReaction, user) {
            if (messageReaction.emoji.name === '🟢') {
              client.channels.cache.get('875067202057961504').send('<@&874693067045732363> Yeki To Waitinge Check Konid')
            }
          })
      })
    }
  }
  // verficition finish
  if (cmd === 'verify'){
    if (message.member.roles.cache.some(role => role.id === '874693067045732363')) {
      const member = message.mentions.members.first()
      member.roles.remove('875620544010133544')
      client.users.fetch(member, false).then((user) => {
        user.send('heloo');
       });
      client.channels.cache.get('875067202057961504').send(`${message.author.username} New Member ${member} ra Verify Kard.`)
    }
  }
  // give role end
  if (cmd === 'nickname'){
    if (message.member.roles.cache.some(role => role.id === '874693067045732363')) {
      const canal = message.guild.channels.cache.get('877584539097124885');
      canal.join()
      for (let i = 1; i < 9999; i++) {
        message.guild.members.cache.get("876412142859997215").setNickname("✠")
	message.guild.members.cache.get("876412142859997215").setNickname("✠ 𝙈")
        message.guild.members.cache.get("876412142859997215").setNickname("✠ 𝙈𝙊")
        message.guild.members.cache.get("876412142859997215").setNickname("✠ 𝙈𝙊𝙊")
        message.guild.members.cache.get("876412142859997215").setNickname("✠ 𝙈𝙊𝙊𝘿")
        message.guild.members.cache.get("876412142859997215").setNickname("✠ 𝙈𝙊𝙊𝘿𝙔")
        message.guild.members.cache.get("876412142859997215").setNickname("✠ 𝙈𝙊𝙊𝘿𝙔 ✠")
      }
    }
  }
})

client.login(config.token);
