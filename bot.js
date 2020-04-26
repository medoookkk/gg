const Discord = require("discord.js");
const client = new Discord.Client();


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('message', message => {
    if(message.content.startsWith(prefix + 'avatar')) {
        var mentionned = message.mentions.users.first();
          var getvalueof;
          var bot;
          if(mentionned) {
            getvalueof = mentionned;
          } else {
            getvalueof = message.author;
          }
          let avatar = new Discord.RichEmbed()
          .setTitle(`${getvalueof.username}\'s Avatar`)
          .setImage(`${getvalueof.avatarURL}`);
          message.channel.sendEmbed(avatar);
      }
});



client.on('message', message => {
if (message.content.split(' ')[0] == '-bc')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
member.send(  "
" + " :loudspeaker:" + message.guild.name + ":
 " + message.content.substr(3));
                                                            message.delete();
});});

client.on("message", message => {
    var prefix = "برافيكس بوتك";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription("لم تقم بكتابة الرسالة ؟ | ⚠")
                                .setColor("FFFF00")
                                message.channel.sendEmbed(embed3);
                            } else {

                            let embed4 = new Discord.RichEmbed()
                                    .setDescription('تم جاري ارسالة الرسالة ...| 📢')

                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }

     
});



if (message.content.startsWith(prefix + 'mute')) {
                if(!message.channel.guild) return;
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`__**Access Denied**__\nYou must have __MANAGE_MESSAGES__ perms to use this command.`);
        let member = message.mentions.members.first();
                if(!member) {
            message.channel.send("**Mention Someone To Mute.**");
            return;
        }
    
            message.channel.overwritePermissions(member.user.id, {
        SEND_MESSAGES: false
        }).then(() => {
        message.reply(`**Successfully, <@${member.user.id}> Muted :ballot_box_with_check: **`)
        });
    
    
    }
        if (message.content.startsWith(prefix + 'unmute')) {
                    if(!message.channel.guild) return;
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`__**Access Denied**__\nYou must have __MANAGE_MESSAGES__ perms to use this command.`);
        let member = message.mentions.members.first();
        
        if(!member) {
            message.channel.send("**Mention Someone To UnMute.**");
            return;
        }
    
            message.channel.overwritePermissions(member.user.id, {
        SEND_MESSAGES: true
        }).then(() => {
        message.reply(`**Successfully, <@${member.user.id}> UnMuted :ballot_box_with_check: **`)
        });
    
    
    }
