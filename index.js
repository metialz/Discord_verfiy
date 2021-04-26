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
    if (message.member.roles.cache.some(role => role.id === '803596203341774858')) {
      const poll = new Discord.MessageEmbed()
      .setAuthor(message.guild.name, 'https://cdn.discordapp.com/icons/831878642362744845/a_db7f583da611c9fd595ea5838f10228a.gif?size=1024')
      .addField('به سرور فریکی مود خوش آمدید\n برای گرفتن رول و وریفای شدن ری اکت :green_circle:  زیر را بزنید و در چنل Waiting منتظر  ادمین های ما بمونید', '__ __')
      .setFooter(message.guild.name, 'https://cdn.discordapp.com/icons/831878642362744845/a_db7f583da611c9fd595ea5838f10228a.gif?size=1024')
      .setColor('blue')
      message.channel.send(poll).then(embedMessage => {
        embedMessage.react('🟢')
          client.on('messageReactionAdd', function (messageReaction, user) {
            if (messageReaction.emoji.name === '🟢') {
              client.channels.cache.get('808049888947470406').send('<@&782771797677965323> Yeki To Waitinge Check Konid')
            }
          })
      })
    }
  }
  // verficition finish

  // give role end
  if (cmd === 'nickname'){
    if (message.member.roles.cache.some(role => role.id === '803596203341774858')) {
      const canal = message.guild.channels.cache.get('801850467751690281');
      canal.join()
      for (let i = 1; i < 9999; i++) {
        message.guild.members.cache.get("803592192219152384").setNickname("✠ 𝙈")
        message.guild.members.cache.get("803592192219152384").setNickname("✠ 𝙈𝙊")
        message.guild.members.cache.get("803592192219152384").setNickname("✠ 𝙈𝙊𝙊")
        message.guild.members.cache.get("803592192219152384").setNickname("✠ 𝙈𝙊𝙊𝘿")
        message.guild.members.cache.get("803592192219152384").setNickname("✠ 𝙈𝙊𝙊𝘿𝙔")
        message.guild.members.cache.get("803592192219152384").setNickname("✠ 𝙈𝙊𝙊𝘿𝙔 ✠")
        message.guild.members.cache.get("803592192219152384").setNickname("✠ 𝘽")
        message.guild.members.cache.get("803592192219152384").setNickname("✠ 𝘽𝙄")
        message.guild.members.cache.get("803592192219152384").setNickname("✠ 𝘽𝙄𝙏")
        message.guild.members.cache.get("803592192219152384").setNickname("✠ 𝘽𝙄𝙏𝘾")
        message.guild.members.cache.get("803592192219152384").setNickname("✠ 𝘽𝙄𝙏𝘾𝙃")
        message.guild.members.cache.get("803592192219152384").setNickname("✠ 𝘽𝙄𝙏𝘾𝙃𝙀")
        message.guild.members.cache.get("803592192219152384").setNickname("✠ 𝘽𝙄𝙏𝘾𝙃𝙀𝙎 ✠")
      }
    }
  }
})

client.login(config.token);