const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('message' , function (message) {
    if (message.content === '!sub'){
        message.reply('Merci et bienvenue sur la chaîne ,tu vas voir on va sortir du lourd :)!toutoutoutoudoum')
    }
})

bot.on('message' , function (message) {
    if (message.content === 'fdp'){
        message.reply('Tu te calme et tu parle autrement')
    }
})

bot.on('ready', function () {
    bot.user.setActivity('a la PS5 avec Flop').catch(console.error)
})

bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
         return channel.send('Bienvenue dans le serveur officiel de la chaîne Youtube ,tu peux passer le bonjour dans le tchat général et par contre tu dit pas de gros mot sa peut blesser les gens alors fait gaffe ,sur ce , bye et passe un bon moment sur ce serveur ! @' + member.displayName)
    }).catch(console.error)
})

bot.on('message', message => {
    if (message.content === '!link') {
      message.reply('https://www.youtube.com/channel/UCOwdx0FZRFmpoIW0OmGOtsg')
    }
  })

  bot.on('message', message => {
    if (message.content === 'prout') {
      message.reply('Excuser-moi :( !')
    }
  })

  bot.on('message', message => {
    if (message.content === 'Tu as tué mon père !') {
      message.reply('Non Luc ,Je suis ton père !')
    }
  })

  bot.on('message', message => {
    if (message.content === 'Tu est un sorcier ,Harry !') {
      message.reply('Attend ... Je suis quoi ?')
    }
  })

bot.login ('NzEyMzU3NjkzNzcxMjE5MDU1.XsQYzQ.h4Uy1tx3gaPLVJ_lnF-CEOCJvVM')
