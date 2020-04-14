const Discord = require('discord.js')
const client = new Discord.Client();
// توكن البوت
var token = "Njk5Mzg4MzEzMTQ4MDYzNzY1.XpTtIA.KD8Chjjo356HFxtBa_mBCAZGH7A";
// الاختصار المستخدم في الاوامر
var prefix = "#";
 // نشاط البوت
var activity = prefix + "help to get help!";
 // حالة البوت
var status = "Online";
/**
* @param {Discord.Message} message The received message
*/
async function onMessage(message)
{
	try
	{
		if (message.content.startsWith(prefix))
		{
			var arg_index = message.content.indexOf(' ');
			var command = message.content.slice(prefix.length);
			if(arg_index > 0) // != -1
				command = command.substr(0, arg_index - 1);
			const text = message.content.substr(arg_index + 1);
			switch(command)
			{
				case "help":
					

client.on('message', msg => {   if (msg.content === 'مصطفى') {     msg.reply('علاوي لو سمحت');   } });

client.on('message', msg => {   if (msg.content === 'ميمو') {     msg.reply('بيصرفكك اعرفه');   } });

client.on('message', msg => {   if (msg.content === 'نوب') {     msg.reply('حتى انا اعرفه');   } });


client.on("message", msg => {
  if (msg.content === "احبك") {
    msg.reply("** وانا احب علاوي بس  :sparkling_heart: :wink:**  ");
  }
});
client.on("message", msg => {
  if (msg.content === "باك") {
    msg.reply("** ولكم نورت :sparkling_heart: :wink:**  ");
  }
});

client.on("message", msg => {
  if (msg.content === "هاي") {
    msg.reply("** هاي يا عسل   :kissing_heart: :heart: **");
  }
});

client.on("message", msg => {
  if (msg.content === "تصبحون على خير") {
    msg.reply(
      "**  وانت من اهله حبيبي، أحلام سعيدة :smiling_face_with_3_hearts:   **"
    );
  }
});



client.on("message", msg => {
  if (msg.content === "ابي افوز") {
    msg.reply(
      "** نادي علاوي و ميمو بتفوز   :kissing_heart: :heart: **"
    );
  }
});


client.on("message", msg => {
  if (msg.content === "عاوز فطور") {
    msg.reply("** مقفلللين يالحبيييب **");
  }
});

client.on("message", msg => {
  if (msg.content === "أبغى اقدم شكوى كيف") {
    msg.reply("**  كلم علاوي خاص **");
  }
});


client.on("message", msg => {
  if (msg.content === "فانتم") {
    msg.reply("** اسطوره يتوارثها الاجيال   :kissing_heart: :heart: **");
  }
});

client.on("message", msg => {
  if (msg.content === "يا بوت") {
    msg.reply("**  أمر يالغالي ؟  **");
  }
});

client.on("message", msg => {
  if (msg.content === "انا زعلان ؟") {
    msg.reply("**  لااااااااااااااااا  يا زمن **");
  }
});

client.on("message", msg => {
  if (msg.content === "وين ميمو") {
    msg.reply("**  حليا في اجتماع الرجاء عدم الازعاج **");
  }
});

client.on("message", msg => {
  if (msg.content === "في قلتش تدبيل ؟") {
    msg.reply("**  لاااااااااااا حراااااااام **");
  }
});

client.on("message", msg => {
  if (msg.content === "يا بوت مرتبط ؟") {
    msg.reply(
      "** لا جالس ابحث عن حبيب بس مهري غالي 100 مليون سنبيم ينطح سنبيم **"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "يا بووت لا تسحب عليي") {
    msg.reply("** لاتكلمني لااجيبك ميوت كبر وجهكك    **");
  }
});

client.on("message", msg => {
  if (msg.content === "مساء الخير") {
    msg.reply("**  مساء النور   :heart: **");
  }
});

client.on("message", msg => {
  if (msg.content === "صباح الخير") {
    msg.reply("**  صباحك النور، نورتنا يا عسل:wave:   **");
  }
});

client.on("message", msg => {
  if (msg.content === "هلا") {
    msg.reply("**هلا بيك :heart: **");
  }
});

client.on("message", msg => {
  if (msg.content === "حمار") {
    msg.reply("** عييب بابا عيب **");
  }
});


client.on("message", msg => {
  if (msg.content === "حمار") {
    msg.reply("** عييب بابا عيب **");
  }
});




const dev = ["589531694848147458"]; ///تعديل مهم ايدي حسابك
const admin = "*";
var owner = "589531694848147458"; // Owner Bot Mention /// تعديل مهم ايدي حسابك
var number = "1"; // Unmber Bot
var ex = "2019/10/08";
client.on("message", message => {
  var argresult = message.content
    .split(` `)
    .slice(1)
    .join(" ");
  if (!dev.includes(message.author.id)) return;
  if (message.content === admin + "vip") {
    if (message.author.bot) return;
    if (!message.guild)
      return message.reply("**This Command Just In Servers**");
    message.channel.send("> **# - `Premium Info` » **" + `${message.author}`);
    message.channel.sendMessage(
      `> **# - Premium Number:** **[** ${number} **]**\n> **# - Ends in:** **[** ${ex} **]**\n> **# - Owner:** **[** <@${owner}> **]**`
    );
  }
});





client.on("typingStart", (ch, user) => {
  if (user.presence.status === "offline") {
    ch.send(`${user}اوف لاين هاهاهاا , اعترف مصرف مين`).then(msg => {
      msg.delete(100);
    });
  }
});



client.on("message", message => {
  if (message.content === "#قفل") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply(" <a:46:691400133304385597> تم تقفيل الشات");
      });
  }
  if (message.content === "#فتح") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply(" <a:46:691400133304385597> تم فتح الشات ");
      });
  }
});




client.on("message", message => {
  var prefix = "#";
  let command = message.content.split(" ")[0];
  if (command == prefix + "server") {
    var server = client.guilds.find(
      c => c.id === message.content.split(" ")[1]
    );
    if (!server)
      return message.channel.send("**I Can't find this server :x:**");
    message.channel.send(
      new Discord.RichEmbed()
        .setColor("#36393e")
        .setTitle(`📖 **${server.name}** Info`)
        .setImage(
          `https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png?size=1024`
        )
        .addField(
          "**Members Cout:**",
          `**${server.memberCount -
            server.members.filter(m => m.user.bot).size}** | **${
            server.members.filter(m => m.user.bot).size
          }** bots`,
          true
        )
        .addField(
          `**Channels [${server.channels.size}]**`,
          `**${
            server.channels.filter(m => m.type === "text").size
          }** Text | **${
            server.channels.filter(m => m.type === "voice").size
          }** Voice | **${
            server.channels.filter(m => m.type === "category").size
          }** Category`,
          true
        )
        .addField("**Server Region:**", server.region, true)
        .addField("**Server Owner**", `**${server.owner}**`, true)
        .addField(`**Roles Count [${server.roles.size}]**`, `** **`, true)
        .addField(
          `**verification Level [ ${server.verificationLevel} ]**`,
          `** **`,
          true
        )
    );
  }
});





client.on("message", message => {
  var prefix = "#";
  let command = message.content.split(" ")[0];
  if (message.content === prefix + "help1") {
    message.channel.send(
      `**| تــم رســال اوامــر الــعــامــه فــى الــخــاص ..**`
    );

    message.author.sendMessage(` ✽ **__ℳℰ ღ Bot__**
**__الاوامر العامه__** 
**  *bot • لعرض معلومات عن البوت** 
**  *user • لعرض معلومات عنك** 
**  *avt • يعرض لك صورت  اي شخص عن طريق الايدي** 
**  *avatar • لعرض صورتك أو صورة الي تمنشنه** 
**  *color • لأختيار لونك في السيرفر **


`);
  }
});



client.on("message", message => {
 var prefix = "#";
  if (message.content.startsWith(prefix + "bc")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(" ");
    message.guild.members
      .filter(m => m.presence.status !== "all")
      .forEach(m => {
        m.send(`${argresult}\n  `);
      });
    message.channel.send(
      `\`${
        message.guild.members.filter(m => m.presence.status !== "all").size
      }\`تم`
    );
    message.delete();
  }
});





client.on("message", message => {
 var prefix = "#";
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if (message.content.startsWith(prefix + "مسابقه")) {
    //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if (!message.guild.member(message.author).hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        ":heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**"
      );
    message.channel
      .send(
        `:eight_pointed_black_star:| **منشن الروم الذي تريد به القيف اواي**`
      )
      .then(msgg => {
        message.channel
          .awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ["time"]
          })
          .then(collected => {
            let room = message.guild.channels.find(
              "giveaway",
              collected.first().content
            );
            if (!room)
              return message.channel.send(
                ":heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**"
              );
            room = collected.first().content;
            collected.first().delete();
            msgg
              .edit(":eight_pointed_black_star:| **اكتب مدة القيف اواي**")
              .then(msg => {
                message.channel
                  .awaitMessages(filter, {
                    max: 1,
                    time: 20000,
                    errors: ["time"]
                  })
                  .then(collected => {
                    if (isNaN(collected.first().content))
                      return message.channel.send(
                        ":heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**"
                      );
                    duration = collected.first().content * 60000;
                    collected.first().delete();
                    msgg
                      .edit(
                        ":eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**"
                      )
                      .then(msg => {
                        message.channel
                          .awaitMessages(filter, {
                            max: 1,
                            time: 20000,
                            errors: ["time"]
                          })
                          .then(collected => {
                            title = collected.first().content;
                            collected.first().delete();
                            try {
                              let giveEmbed = new Discord.RichEmbed()
                                .setAuthor(
                                  message.guild.name,
                                  message.guild.iconURL
                                )
                                .setTitle(title)
                                .setDescription(
                                  `المدة : ${duration / 60000} دقائق`
                                )
                                .setFooter(
                                  message.author.username,
                                  message.author.avatarURL
                                );
                              message.guild.channels
                                .find("name", room)
                                .send(giveEmbed)
                                .then(m => {
                                  let re = m.react("🎉");
                                  setTimeout(() => {
                                    let users = m.reactions.get("🎉").users;
                                    let list = users
                                      .array()
                                      .filter(u => u.id !== m.author.id);
                                    let gFilter =
                                      list[
                                        Math.floor(
                                          Math.random() * list.length
                                        ) + 0
                                      ];
                                    if (users.size === 1)
                                      gFilter = "**لم يتم التحديد**";
                                    let endEmbed = new Discord.RichEmbed()
                                      .setAuthor(
                                        message.author.username,
                                        message.author.avatarURL
                                      )
                                      .setTitle(title)
                                      .addField(
                                        "انتهى القيف اواي !",
                                        `الفائز هو : ${gFilter}`
                                      )
                                      .setFooter(
                                        message.guild.name,
                                        message.guild.iconURL
                                      );
                                    m.edit(endEmbed);
                                  }, duration);
                                });
                              msgg.edit(
                                `:heavy_check_mark:| **تم اعداد القيف اواي**`
                              );
                            } catch (e) {
                              msgg.edit(
                                `:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`
                              );
                              console.log(e);
                            }
                          });
                      });
                  });
              });
          });
      });
  }
});


client.on("message", message => {
 var prefix = "#";
  if (message.content.startsWith("#مسح")) {
    if (!message.channel.guild)
      return message.reply(`** This Command For Servers Only**`);
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(`** You don't have Premissions!**`);
    if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))
      return message.channel.send(`**I don't have Permission!**`);
    let args = message.content.split(" ").slice(1);
    let messagecount = parseInt(args);
    if (args > 100)
      return message
        .reply(`** The number can't be more than **100** .**`)
        .then(messages => messages.delete(5000));
    if (!messagecount) args = "100";
    message.channel
      .fetchMessages({ limit: messagecount })
      .then(messages => message.channel.bulkDelete(messages))
      .then(msgs => {
        message.channel
          .send(`** تم , مسح \`${msgs.size}\` رساله.** `)
          .then(messages => messages.delete(5000));
      });
}
}); 




client.on("message", message => {
 var prefix = "#";
  if (message.content.startsWith("#حظر")) {
    if (!message.guild || message.author.bot) return undefined;
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send("لايوجد لديك صلاحيه لحظره !");
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.channel.send("لا امتلك صلاحيات !.");
    let args = message.content.split(" ").slice(1);
    let user =
      message.guild.members.get(message.content.split(" ")[1]) ||
      message.mentions.members.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!user)
      return message.channel.send(`Usage: ${prefix}حظر @mention السبب`);
    if (!reason) reason = "No reason provided.";
    if (user.user.id === message.author.id)
      return message.channel.send("لاتستطيع حظر نفسك !");
    if (
      message.guild.member(user.user).highestRole.position >=
      message.guild.member(client.user).highestRole.position
    )
      return message.channel.send(
        `I can't ban **${user.user.tag}** because his role highest than my role!`
      );
    if (!message.guild.member(user.user).bannable)
      return message.channel.send(`I can't ban **${user.user.tag}**.`);
    message.guild.member(user).ban(reason, user);
    message.channel.send(
      `تم :+1:, حظرته لعيونك ${user.user.username} from the server!\nReason: \`\`${reason}\`\``
    );
  }
});




client.on("message", async message => {
 var prefix = "#";
  let args = message.content.split(" ");
  if (args[0] == `#طرد`) {
    if (!message.guild || message.author.bot) return undefined;
    if (
      !message.member.hasPermission("KICK_MEMBERS") ||
      !message.guild.member(client.user).hasPermission("KICK_MEMBERS")
    )
      return;
    let user =
      message.guild.members.get(args[1]) || message.mentions.members.first();
    let reason = args.slice(2).join(" ");
    if (!user)
      return message.channel.send(`**Usage:** ${prefix}طرد @member [السبب]`);
    if (!reason) reason = "No reason provided.";
    if (
      message.guild.member(user.user).highestRole.position >=
      message.guild.member(message.member).highestRole.position
    )
      return message.channel.send(
        `لا تستطيع طرده **${user.user.username}** بسب انه رتبته اعلى من رتبتي!`
      );
    if (
      message.guild.member(user.user).highestRole.position >=
      message.guild.member(client.user).highestRole.position
    )
      return message.channel.send(
        `لا استطيع طرده **${user.user.username}** بسب انه رتبته اعلى من رتبتي !`
      );
    if (!message.guild.member(user.user).kickable)
      return message.channel.send(`لا استطيع طرده **${user.user.username}**.`);
    await message.guild.member(user).kick(reason, user);
    await message.channel.send(
      `**${user.user.username}** تم طرده من السيرفر ! \`\`${reason}\`\``
    );
  }
});
 



client.on("message", async message => {
 var prefix = "#";
  let args = message.content.split(" ");
  if (args[0] == `#ping`) {
    const bot = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor("#00000")
      .addField(
        "✽ **Bot Ping** : ",
        true
      )
      .addField("**Servers** :  ", `» ${client.guilds.size}`, true)
      .addField("**Channels** : ", `» ${client.channels.size} `, true)
      .addField("**Users** : ", `» ${client.users.size} `, true)
      .addField("**Bot Name** :  ", `» ${client.user.tag} `, true)
      .addField("**Bot Owner** :  ", `» <589531694848147458>`, true) // تعديل مهم عدل هذا الرقم لايدي حسابك
      .setImage("")
  }
});

client.on("message", async message => {
 var prefix = "#";
  let args = message.content.split(" ");
  if (args[0] == `#دعوه`)  {
    const invite = `**Invite: [No Any Perms](${await client.generateInvite()})\nInvite: [Administrator Perm](${await client.generateInvite(
      ["ADMINISTRATOR"]
    )})**`;
    message.channel.send(invite);
  }
});

client.on("message", async message => {
 var prefix = "#";
  let args = message.content.split(" ");
  if (args[0] == `#in`) {
    let oi = message.mentions.users.first()
      ? message.mentions.users.first().id
      : message.author.id;
    let Tag = message.mentions.users.first()
      ? message.mentions.users.first().tag
      : message.author.tag;
    let Username = message.mentions.users.first()
      ? message.mentions.users.first().username
      : message.author.username;
    let Avatar = message.mentions.users.first()
      ? message.mentions.users.first().avatarURL
      : message.author.avatarURL;

    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(oi);
      let personalInvites = invs.filter(i => i.inviter.id === oi);
      let urll = invs.filter(i => i.inviter.id === oi);
      let link = urll.reduce(
        (p, v) =>
          v.url + ` , Total de membros recrutados no convite: ${v.uses}.\n` + p,
        `\nServidor: ${message.guild.name} \n `
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      let inviteCode = personalInvites.reduce((p, v) => v.code);
      let possibleInvites = [["Total de membros recrutados:"]];
      possibleInvites.push([inviteCount, inviteCode]);
      let user = message.mentions.users.first() || message.author;
      let mem = message.guild.member(user);
      let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
      let daysJoined = millisJoined / 1000 / 60 / 60 / 24;

      var inviteInfo = new Discord.RichEmbed()
        .setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)
        .addField(
          "**عدد الدعوات للسيرفر**",
          `**➥** [ شخص **${Number(inviteCount)}** ]   `
        )
        .addField(
          "**تاريخ انضمامك لسيرفرنا **",
          `**➥** [ منذ  **${daysJoined.toFixed(0)}** يوم ]   `
        )
        .addField(
          "**رابط الدعوة الذي دخلت منه**  ",
          `**➥** [ **https://discord.gg/Nm9dju${inviteCode || "Zm2U6we"}** ]   `
        )
        .setImage("")
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(Tag, Avatar);

    });
  }
});
client.login(token);
