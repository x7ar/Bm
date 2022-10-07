



const {token , prefix} = require('./configs/config.json')

const Discord = require("discord.js");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');


const {DiscordModal, ModalBuilder, ModalField} = require('discord-modal');

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
    message.react(`<:ss:1027696098699116544>`)
    message.channel.send("https://cdn.discordapp.com/attachments/959108273519357962/1027693964507234415/line_small.png")
  })
 
  }
 }); 

client.on('ready', () =>  console.log(`Logged in as ${client.user.tag} (${client.user.id})`));
// client.on('debug',console.log)
client.on('error',console.log)

const ms = require("ms");
const { truncate } = require("fs");
const { title } = require("process");

DiscordModal(client)

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (message.content ===  'lol') {
       const row = new Discord.MessageActionRow()
			.addComponents(
				new Discord.MessageSelectMenu()
					.setCustomId('resources_' + (Math.random() + 1).toString(36).substring(7))
					.setPlaceholder('Choose the resource you want')
					.addOptions([
						{
							label: 'warn',
							description: 'This is a description',
							value: 'mute',
						},
						{ 
							label: 'warn',
							description: 'warn',
							value: 'warn',
						},
					]),
			);
      await message.channel.send({ content: 'Test', components: [row] })
  }
  if (message.content === 'نظام الرسائل') {
     const embedtest= new Discord.MessageEmbed()
     .setColor("#444de9")
     .setTitle(`نظام الرسائل`)

    return message.channel.send({
      embeds: [embedtest],
      components: [
        {
          type: 1, components: [
            { type: 2, style: 3, custom_id:'submit_a_support_rank_button', label: 'اضغط هنا', emoji: '944715501987315872' }
          ]
        }
      ]
    })
  }
})

client.on(`interactionCreate`,async(interaction)=>{
  if(interaction.isSelectMenu()){
   if(interaction.customId.startsWith('resources_')){
     if(interaction.values[0].split("_")[1] == 1){
       await interaction.reply({content:"Test",ephemeral:true})
     }
     if(interaction.values[0].split("_")[1] == 2){
       await interaction.reply({content:"Test 2",ephemeral:true})
     }
   }
  }
  const filter_s = i => i.customId === 'submit' && i.user.id === '1013942581970870273';
  const filter_u = i => i.customId === 'urlss' && i.user.id === '1013942581970870273';

  const collector = interaction.channel.createMessageComponentCollector({ filter_s, time: 1000 });
  
  const collectorr = interaction.channel.createMessageComponentCollector({ filter_u, time: 1000 , componentType:'TEXT_INPUT' });

  const wait = require('node:timers/promises').setTimeout;

  if(interaction.isButton()){
  
    if(interaction.customId == 'submit'){
    
    
      collector.on('collect', async i => {
        if (i.customId === 'submit') {
          await i.deferUpdate();
          await i.editReply({ content: 'A button was clicked!', components: [] , ephemeral: false,fetchyReply: true});
        }
      });
      
      collector.on('end', collected => console.log(`Collected ${collected.size} items`));
        }
  }
  if(interaction.isButton()){

  client.on("modalSubmitInteraction",  async(interaction) =>{


      if(interaction.customId == 'urlss'){  
        
      
      
        
        collectorr.on('collect', async (i) => {

          if (i.customId === 'urlss') {
            await interaction.deferReply()
            await i.deferUpdate();
            await i.wait(5000)
            await i.editReply({ components: [ {
              type: 1, components: [
                { type: 2, style: 5, custom_id:"urlss", url:interaction.fields.getTextInputValue("url_one"), label:interaction.fields.getTextInputValue("name_url_one"),  emoji: '938532585234124850' },
                { type: 2, style: 3,  custom_id:"submit", label:"submit", disabled:false ,emoji: '938532585234124850' }, 


        
                  


              ]
              
            }
  ] , ephemeral: true,
  fetchyReply: true});
          }})
        };
        
        collectorr.on('end', collected => console.log(`Collected ${collected.size} items`));
          
} )}
    

  if(interaction.isButton()){
    if(interaction.customId == 'submit_a_support_rank_button'){

     const textinput = new ModalBuilder()
     .setCustomId("submit_a_support_rank")
     .setTitle("Submit a support rank")
     .addComponents(
       new ModalField()
       .setLabel("NAME")//0
       .setStyle("short")
       .setPlaceholder("اكتب هنا")
       .setCustomId("name")
       .setMin(2)
       .setMax(4000)
       .setRequired(true),
       new ModalField()
       .setLabel("TYPE")//1
       .setStyle("short")
       .setMin(2)
       .setMax(4000)
       .setPlaceholder("اكتب هنا")
       .setCustomId("type"),
       new ModalField()
       .setLabel("STORY")//2
       .setStyle("paragraph")
       .setCustomId("story")
       .setPlaceholder("اكتب هنا"),
      new ModalField()
       .setLabel("AGE")//3
       .setStyle("paragraph")
       .setCustomId("age")
       .setPlaceholder("اكتب هنا"),
      new ModalField()
       .setLabel("IMAGE")//4
       .setStyle("paragraph")
       .setCustomId("IMAGE")
       .setPlaceholder("هنا"),
       
       
       )
       client.modal.open(interaction, textinput) 

    }}
    if(interaction.isButton()){
    if(interaction.customId == 'urlss'){

      const textinput = new ModalBuilder()
      .setCustomId("urls")
      .setTitle("url (s)")
      .addComponents(
        
        new ModalField()
        .setLabel("url")//0
        .setStyle("short")
        .setPlaceholder("اكتب هنا")
        .setCustomId("name_url_one")
        .setMin(2)
        .setMax(4000)
        
        .setRequired(true),
        new ModalField()
        .setLabel("url")//1
        .setStyle("paragraph")
        .setMin(2)
        .setMax(4000)
        .setPlaceholder("اكتب هنا")
        .setCustomId("url_one")
        .setRequired(false),
        new ModalField()
        .setLabel("url")//2
        .setStyle("paragraph")
        .setCustomId("urlonetow")
        .setPlaceholder("اكتب هنا")
        .setRequired(false),
       new ModalField()
        .setLabel("AGE")//3
        .setStyle("paragraph")
        .setCustomId("ask2_3")
        .setPlaceholder("اكتب هنا")
        .setRequired(false),
       new ModalField()
        .setLabel("url")//4
        .setStyle("paragraph")
        .setCustomId("urlfive")
        .setPlaceholder("هنا")
        .setRequired(false),
        
        

        
        
        )
        client.modal.open(interaction, textinput) 
      } 
  }


})

client.on("modalSubmitInteraction",async(interaction)=>{

  if(interaction.customId == "submit_a_support_rank"){
  
  
    

      const submit_embed = new Discord.MessageEmbed()
          .setColor('#808080')
          
          .setTitle(interaction.fields.getTextInputValue("name"))
          .setThumbnail()
          .addFields(
            { name: 'التصنيف العمري', value: interaction.fields.getTextInputValue("age") },
            { name: 'التصنيف', value:  interaction.fields.getTextInputValue("type") },
            { name: 'القصه', value: interaction.fields.getTextInputValue("story") },
            {name:  'تنويه ', value:"يرجى قراءة  <#953712780605812827> قبل المشاهدة",  }
            )

            .setImage(interaction.fields.getTextInputValue("IMAGE")           )
            const sb = submit_embed.fields
            client.channels.cache.get("1019226036195561502").send({embeds:[submit_embed],
            components:[
              {
                type: 1, components: [
                  { type: 2, style: 1,  custom_id:"urlss", label:"ADD URL",  emoji: '938532585234124850' }, 
                  { type: 2, style: 3,  custom_id:"submit", label:"submit", disabled:true, emoji: '938532585234124850' }, 

          
                    
    
                  
                ]
                
              }
            ], 
            ephemeral: true,
            fetchyReply: true}


)
          }
        
      



  // const embedu = new Discord.MessageEmbed()
  //     .setColor('#808080')
      
      // .setTitle(interaction.fields.getTextInputValue("name"))
      // .setThumbnail()
      // .addFields(
      //   { name: 'التصنيف العمري', value: interaction.fields.getTextInputValue("age") },
      //   { name: 'التصنيف', value:  interaction.fields.getTextInputValue("type") },
      //   { name: 'القصه', value: interaction.fields.getTextInputValue("story") },
      //   {name:  'تنويه ', value:"يرجى قراءة  <#953712780605812827> قبل المشاهدة",  }
      //   )
        
      //   .setImage(interaction.fields.getTextInputValue("IMAGE"))
      //   .setTimestamp();             

        //  client.channels.cache.get("1019226036195561502").send({ content:"hi",
        //   components:[
        //     {
        //       type: 2, components: [
        //         { type: 2, style: 5, customId:"submit_a_support_rank", url: interaction.fields.getTextInputValue("IMAGE"),  emoji: '944715501987315872' }, 
  
                
        //       ]
        //     }
        //   ], 
        //  })
  
        

      //
      
      
    })
    
    
    
    
    
    
    //             //   client.channels.cache.get("1019226036195561502").send({
    //             //    embeds:[movie]
    //             //   , components: [
    //             //      {
    //             //        type: 1, components: [
    //             //          { type: 2, style: 5, custom_id:'url',  emoji: '944715501987315872', url:interaction.fields[0].value, }, 
                         
    //             //        ]
    //             //      }
    //             //    ]
    //             //  }).then(err=>{
    //         //      console.log(err)
    //       //})
                  
              
              
                  
                
            
    // await interaction.reply({content:`✅ تم الإرسال بنجاح \n`,ephemeral:true})
    
    // const embed = new Discord.MessageEmbed()
    // .setColor('#808080')
    
    // // .setTitle(interaction.fields.getTextInputValue("name"))
    // .setThumbnail()
    // .addFields(
    //   { name: 'التصنيف العمري', value: age },
    //   // { name: 'التصنيف', value:  interaction.fields.getTextInputValue("type") },
    //   // { name: 'القصه', value: interaction.fields.getTextInputValue("story") },
    //   // {name:  'تنويه ', value:"يرجى قراءة  <#953712780605812827> قبل المشاهدة",  }
    //   )
      
    //   .setImage()
    //   .setTimestamp();             
      
    //   await client.channels.cache.get("1019226036195561502").send({ embeds: [embed],
    //     components:[
    //       {
    //         type: 1, components: [
    //           { type: 2, style: 3, custom_id:'url',  emoji: '944715501987315872' }, 
              
    //         ]
    //       }
    //     ], 
    //   })
    // }

    

client.login("")
