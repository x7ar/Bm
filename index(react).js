
const Discord = require("discord.js");

const client = new Discord.Client({
	intents: ['GUILDS', 'GUILD_MESSAGES']
  });
  


  let id = ['1015117338997178438', '', ''];
  let snap = ['1019226036195561502', '', ''];

  client.on("messageCreate", message => {
    if (message.author.bot || !message.channel.guild) return;
      
      let args = message.content.split(',')  
      if(snap.includes(message.channel.id)){  
      message.channel.send("https://cdn.discordapp.com/attachments/959108273519357962/1027693964507234415/line_small.png")
     
      }
     }); 
    
client.on("messageCreate", message => {
if (message.author.bot || !message.channel.guild) return;
  
  let args = message.content.split(',')  
  if(id.includes(message.channel.id)){
  
  message.delete()
    
  const embed = new Discord.MessageEmbed()

    
.setColor(message.member.displayHexColor)   
.setTitle(message.author.username)
    .setThumbnail(message.author.avatarURL({ dynamic: true }))
    
.setDescription(`${args}`)
    
.setTimestamp()
  
let attachm = message.attachments.first()
if (attachm) {
    embed.setImage(attachm.proxyURL)
}
  message.channel.send({ embeds: [embed],  }).then((message) => {
    message.react(`<:Black_Movie_995:987392819666759743>`)
    message.channel.send("https://cdn.discordapp.com/attachments/959108273519357962/1027693964507234415/line_small.png")
  })
 
  }
 }); 


 client.login("token")