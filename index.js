const Discord = require('discord.js')
const bot = new Discord.Client()
const YTDL = require('ytdl-core')
const config = require("./config.json")
const prefix = "Yakama"
const fs = require("fs");



emitter=Infinity

var channel = bot.channels.get("name", "general"); 

bot.on('ready', function () {
	bot.user.setActivity("Y help | Yakama by Archimatt")
    console.log("Connecté !")
    console.log(`Utilisateurs : ${bot.users.size} Channel : ${bot.channels.size} Serveurs: ${bot.guilds.size} `);
})


bot.login(process.env.TOKEN);



bot.on('message', message => {
  if (message.content === 'Salut Yakama !') {
     message.channel.send('Hey !')
console.log("Salut effectué")
  }

  // If the message is "what is my avatar"
  if (message.content === 'Y quel est mon avatar ?') {
    // Send the user's avatar URL
     message.channel.send(message.author.avatarURL);
  }

  if (message.content === 'Y jtm') {
     message.channel.send('Vous êtes donc robotphile. Lol.')
console.log(message.author)

  }

  if (message.content === 'Y comment va tu ?') {
     message.channel.send('Je suis un robot. Un robot n éprouve aucun sentiment Owo')
console.log('humeur demandée')
message.react('🤔')
  .then(console.log)

  }
  if (message.content === 'Y cv ?') {
    message.channel.send('Je suis un robot. Un robot n éprouve aucun sentiment Owo')
console.log('humeur demandée')

  }
  if (message.content === 'Y tu m\'aimes ?') {
    message.channel.send('Non.')
    
console.log('Amour demandé')
  }
  if (message.content === 'Y t ki') {
   message.channel.send('Salut, moi c\'est Yakama, chuis un bot discord créé @Archimatt#0731 ! Tu peux m\'appeller en disant "Yakama"dans le tchat !')
console.log('Info T ki')
  }
  if (message.content === 'Y fais-tu partie du complot ?') {
    message.channel.send('```>Shutting Down System```')
console.log('Complot découvert')
  }
  if (message.content === 'Y qui est ton créateur ?') {
     message.channel.send('C est @Archimatt#0731 , hésites pas à lui proposer des suggestions pour m améliorer d ailleurs, si tu veux !')
console.log('Créateur Demandé')
  }
  if (message.content === 'Y quel est ton sexe ?') {
     ('Euh... je suis... hermaphrodite ?')
console.log('Sexe demandé')
  }



bot.on('message', message => {
if(message.content.startsWith ('Y c ki') ){
      
        var joueur = message.mentions.users.first() ? message.mentions.users.first() : message.author
        var image = joueur.avatarURL 
      
      const embed = new Discord.RichEmbed()
      
        .setAuthor(joueur.username ,)
      
      .setColor(0x00AE86)
      
      .setImage(joueur.avatarURL)
      .setThumbnail(bot.user.avatarURL)
      
      .addField("Pseudo :", joueur.username)
      .addField("Statut :",joueur.presence.status, true)
      .addBlankField(true)
      .addField("Dernier message :", joueur.lastMessage, true)

      .setTimestamp()
      .setFooter(message.author.username, message.author.avatarURL, "|Yakama by Archimatt")
      
      message.channel.send({embed})}
    })

    //aide
    bot.on('message', message => {
      if (!message.content === 'Y help' || message.author.bot) return;
      if (message.content === 'Y help') {
        message.channel.send({embed: {
          color: 3447003,
          author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL
          },
          title: "Menu d'aide",
          description: "Voici le menu d'aide de Yakama",
          fields: [{
              "name": "👉Y help",
              "value": "Affiche ce menu"
            },
            {
              "name": "🤔Y t ki",
              "value": "C'est qui elle ?"
            },
            {
              "name": "🤔Y c ki (+ mention)",
              "value": "Avoir une information sur un joueur"
            },
            {
              "name": "👤Y quel est mon avatar ?",
              "value": "Affiche votre avatar"
            },
            {
              "name": "💔Y tu m'aimes ?",
              "value": "Pour vous faire friendzoner"
            },
            {
              "name": "Y fais-tu partie du complot ?",
              "value": "...."
            },
            {
              "name": "👦Y quel est ton sexe ?",
              "value": "C'est vrai ça, on se le demande pas souvent...."
            }
          ],
          timestamp: new Date(),
          footer: {
            icon_url: bot.user.avatarURL,
            text: "Yakama"
          }
        }
      });}})

      ////////

 function play(connection, message) {
        var server = servers[message.guild.id];
    
        server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    
        server.queue.shift();
    
        server.dispatcher.on("end", function() {
            if (server.queue[0]) play(connection, message);
            else connection.disconnect();
        });
    }
    
    var servers = {};
    
    client.on("message", function(message) {
        if (message.author.equals(client.user)) return;
        
        if (!message.content.startsWith(prefix)) return;
        
        var args = message.content.substring(prefix.length).split(" ");
        
        switch (args[0].toLowerCase()) {
            case "play":
            var argsplay = message.content.substring(prefix.length).split(" ");
                            if (!message.member.voiceChannel) {
                    message.channel.send("Tu dois être dans un channel vocal. :warning:");
                    return;
                }

                if (!argsplay[1]) {
                    message.channel.send("Merci d'envoyer le lien. :warning:");
                    return;
                }
    
                if(!servers[message.guild.id]) servers[message.guild.id] = {
                    queue: []
                };
var server = servers[message.guild.id];
    
                server.queue.push(argsplay[1]);
    
                if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                    play(connection, message);
                    message.channel.send("Lancement de votre musique. :notes: ( si une musique est déjà en cours, la musique que vous venez de demander sera jouée après celle-ci. )")
                });
                break;
            case "skip":
                var server = servers[message.guild.id];
    
                if (server.dispatcher) server.dispatcher.end();
                message.channel.send("Musique skipée !:fast_forward:")
                break;
            case "stop":
                var server = servers[message.guild.id];
    
                if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
                message.channel.send("Musique arrêtée.:end:")
                }
            })
    ///
    bot.on('guildMemberAdd', member => {
      message.channel.send("Bienvenue à "); 
   });
   bot.on("message", message => {
   if(message.content.startsWith(config.prefix + "prefix")) {
    // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    // change the configuration in memory
    config.prefix = newPrefix;
  
    // Now we have to save the file.
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  }
  
const fs = require("fs");


});
// Here we load the config.json file that contains our token and our prefix values. 
// config.token contains the bot's token
// config.prefix contains the message prefix.



bot.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`Nouveau : ${guild.name} (id: ${guild.id}). Serveur : ${guild.memberCount} membres!`);
});

bot.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`Supprimé de : ${guild.name} (id: ${guild.id})`);
});


bot.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latence de ${m.createdTimestamp - message.createdTimestamp}ms. API : ${Math.round(bot.ping)}ms`);
  }

  
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Mods", "Moderator","Modérateur","Administrator","Administrateur","Admin","Yakama"].includes(r.name)) )
      return message.channel.send("Tu n'as pas les permissions de faire cela ( Y modrolelist )");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.channel.send("Veuillez mentionner un utilisateur de ce serveur");
    if(!member.kickable) 
      return message.channel.send("Je ne pas éjecter cet utilisateur ( Y modrolelist)");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Aucune raison";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.channel.send(`Erreur : ${error}`));
      message.channel.send(`${member.user.tag} a été ejecté du serveur par ${message.author.tag} Raison : ${reason}`);

  }
  
  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Mods", "Moderator","Modérateur","Administrator","Administrateur","Admin","Yakama"].includes(r.name)) )
      return message.channel.send("Tu n'as pas les permissions de faire cela ( Y modrolelist )");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.channel.send("Veuillez mentionner un utilisateur de ce serveur");
    if(!member.bannable) 
      return message.channel.send("Je ne peux pas bannir cet utilisateur !");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Aucune raison ";
    
    await member.ban(reason)
      .catch(error => message.channel.send(`Erreur : ${error}`));
    message.channel.send(`${member.user.tag} à été ban par ${message.author.tag} Raison: ${reason}`);
  }
  
  if(command === "delete") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 10000)
      return message.channel.send("Veuillez écrire un nombre entre 2 et 1000");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.channel.send(`${error}`));
  }
});


bot.on('message', message => {
 if (message.content === 'Y modrolelist') {
    message.channel.send('Voici la liste des roles compris pour les moderateurs : "Mods", "Moderator","Modérateur","Administrator","Administrateur","Admin","Yakama"')
console.log('modrolelist')
 }

})
})
