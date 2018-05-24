const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});


 if (message.content === 'باك') {
              message.channel.sendFile("ﯡڷــﯖــم ۖ مــڼــﯜڔ ۛ ּڀــ̍ا ̨؏ــڛــڶ ۖ مــن ڙمــٱن ּ؏ــڼــک :green_heart:");
            }
         });
		 
		 
		 
		  if (message.content === 'برب') {
              message.channel.sendFile("تٌــيَــتٌ يَ حٍــلُــۆ،  لُآ تٌــطًــۆلُ :disappointed:");
            }
         });
		 
		 
		 
		 
		  if (message.content === 'رابط') {
              message.channel.sendFile("https://discord.gg/EXNztT6");
            }
         });
		 
		 
		 if (message.content === 'الرابط') {
              message.channel.sendFile("https://discord.gg/EXNztT6");
            }
         });
		 
		 
		  if (message.content === 'شكرا') {
              message.channel.sendFile("```آإلعفو قـ♥̨̥̬لبـ♥̨̥̬ي```");
            }
         });

client.on('ready', function(){
    var ms = 60000 ;
    var setGame = ['RMDAN KREM','RMDAN KREM','RMDAN KREM | RMDAN KREM','RMDAN KREM'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/GamerzBot`);
    }, ms);

});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
