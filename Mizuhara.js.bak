///dependência
const {
  default: makeWASocket,
    useSingleFileAuthState,
    MessageType,
    MessageOptions,
    DisconnectReason,
    BufferJSON,
    prepareWAMessageMedia,
    Mimetype,
    downloadContentFromMessage
  } = require('@adiwajshing/baileys');

const {
    state,
    saveState
  } = useSingleFileAuthState('./session.json');
  const {
    Boom
  } = require('@hapi/boom');
  const {
    execSync
  } = require('child_process');
const {
    mess,
    boton,
    color,
    getGroupAdmins,
    fetch,
    fetchText
} = require('./lib/function');
const {
  smsg,
  formatp,
  tanggal,
  formatDate,
  getTime,
  isUrl,
  sleep,
  clockString,
  runtime,
  fetchJson,
  getBuffer,
  jsonformat,
  format,
  parseMention,
  getRandom
} = require('./lib/myfunc')
const os = require('os');
const pino = require('pino');
const fs = require('fs');
const yts = require('yt-search');
const cfonts = require('cfonts');
const speed = require('performance-now');
const moment = require("moment-timezone");
const {menu} = require('./lib/menu.js');
const { yta, ytv } = require('./lib/y2mate');
const { mediafireDl } = require('./lib/mediafire.js');
//const { Sticker  } = require('wa-sticker-formatter')
//config edited
  const prefix = "!";
  const Mashiro = "mizuhara";
  const numero = '5592991533031';
  // Função Para a hora/data
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
//start function
  async function startMizuhara() {
    const Mizuhara = makeWASocket({
      logger: pino({
        level: 'silent'
      }),
      printQRInTerminal: true,
      auth: state,
      browser: [" Mizuhara Bot Multi Device", "      Dekstop", "3.0"]
    })

  
    //conexão
    Mizuhara.ev.on('connection.update', (update) => {
      const {
        connection, lastDisconnect
      } = update
      if (connection === 'close') {
     const shouldReconnect = (lastDisconnect.error =
          Boom?.output?.statusCode !== DisconnectReason.loggedOut);
          console.log("connection closed due to ",
          lastDisconnect.error,", reconnecting ",shouldReconnect);
        if (shouldReconnect) {
          startMizuhara()}
      } else if (connection === 'open') {
        console.log("CONEXÃO BEM SUCEDIDA!");
      }});
    Mizuhara.ev.on("creds.update",saveState);
    Mizuhara.ev.on('messages.upsert', async ms => {
        try { //quoted
          const msg = ms.messages[0];
        await Mizuhara.sendReadReceipt(msg.key.remoteJid, msg.key.participant, [msg.key.id])
         if (!msg.key.participant) msg.key.participant = msg.key.remoteJid 
          msg.key.participant = msg.key.participant.replace(/:[0-9]+/gi, "")
          if (!msg.message) return
          const fromMe = msg.key.fromMe
          const content = JSON.stringify(msg.message)
          const from = msg.key.remoteJid
          const type = Object.keys(msg.message).find((key) => !["senderKeyDistributionMessage", "messageContextInfo"].includes(key))
          
           //respomse auto
const body = (type === "conversation" &&
msg.message.conversation.startsWith(prefix)) ?
msg.message.conversation: (type == "imageMessage") &&
msg.message[type].caption.startsWith(prefix) ?
msg.message[type].caption: (type == "videoMessage") &&
msg.message[type].caption.startsWith(prefix) ?
msg.message[type].caption: (type == "extendedTextMessage") &&
msg.message[type].text.startsWith(prefix) ?
msg.message[type].text: (type == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : 
(type == "listResponseMessage") &&
msg.message[type].singleSelectReply.selectedRowId ?
msg.message.listResponseMessage.singleSelectReply.selectedRowId: (type == "templateButtonReplyMessage") ?
msg.message.templateButtonReplyMessage.selectedId: (type === "messageContextInfo") ?
msg.message[type].singleSelectReply.selectedRowId: (type == "Mizuhara.sendMessageButtonMessage") &&
msg.message[type].selectedButtonId ?
msg.message[type].selectedButtonId: (type == "stickerMessage") && ((msg.message[type].fileSha256.toString("base64")) !== null && (msg.message[type].fileSha256.toString("base64")) !== undefined) ? (msg.message[type].fileSha256.toString("base64")): ""
const budy = (type === "conversation") ?
msg.message.conversation: (type === "extendedTextMessage") ?
msg.message.extendedTextMessage.text: ""

//string
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const isCmd = body.startsWith(prefix)
const enviar = (text) => {Mizuhara.sendMessage(from, {text: text}, { quoted: msg})}

    /////
 //linguagem de grupo
const isGroup = from.endsWith("@g.us")
const groupMetadata = isGroup ? await Mizuhara.groupMetadata(from): ""
const groupName = isGroup ? groupMetadata.subject: ""
const sender = isGroup ? msg.key.participant: msg.key.remoteJid
const pushname = msg.pushName ? msg.pushName: `${Mashiro}`
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isGroupAdmins = groupAdmins.includes(sender) || false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const isBotGroupAdmins = getGroupAdmins(sender) || false
const groupDesc = isGroup ? groupMetadata.desc : ''
const packname = `${Mashiro}` //ur sticker watermark packname
const author = `${pushname}` //ur sticker watermark author

// bem vindo Grupo

.  Mizuhara.ev.on('group-participants.update',async Update => {
   let UpdateMenbs =  await Mizuhara.groupMetadata(Update.id)
        try {
            let welcomegif = 'https://i.ibb.co/MCLQczy/47d6fdf8-4d77-4f83-aefe-75cb95a3fc88.gif'
            let participants = Update.participants 
           console.log(participants)
                if (Update.action == 'add') {
             mashirushin = `┌─❖
│「 Olá 👋 」
└┬❖ 「 @${participants[0].split("@")[0]}  」
   │✑  bem vindo
   │✑  ${UpdateMenbs.subject}
   │✑ 
   │✑  
   └───────────────┈ ⳹`
   let buttons = [
{buttonId: `wkwwk`, buttonText: {displayText: 'Welcome 💐'}, type: 1}
]
let buttonsMessage = {

fileLength: 99999999999999,
image: {url: 'https://i.ibb.co/vqWS57y/053f5e0aae0ba55c1d70848384165aaf.jpg',
quoted:contato},
caption:mashirushin,
footer: '@mizuhara',
buttons: buttons,
headerType: 4,
}
            Mizuhara.sendMessage(from, buttonsMessage) { video: { url: welcomegif }
            Mizuhara.sendMessage(Update.id,buttonsMessage, {gifPlayback: true })
                  
           }
}catch (err) {
            console.log(err)
        }})
       
/// MÉDIA ETC
const quoted = ms.quoted ? ms.quoted : msg
const mime = (quoted.mess || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)

//selo
const contato = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}
//reaçao :)
function reaction(emoji){
      const reactionEmoji = {
              react : {
                      text: emoji,
                      key: msg.key
              }
     }
    Mizuhara.sendMessage(from, reactionEmoji)
}


/// PING
const cpus = os.cpus().map(cpu => {
			cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
		})
const cpu = cpus.reduce((last, cpu, _, {
			length
		}) => {
			last.speed += cpu.speed / length
			return last
		}, {
			speed: 0,
			times: {
			}
		})

/// inclusões
const dono = `${numero}@s.whatsapp.net`
const isCriador = dono.includes(sender)

//if 

if(!isCmd && !isGroup) console.log(
color('[ MSG E CMD  EM PV ]','red'),'\n',
color('NOME :','yellow'),color(pushname,'cyan'),'\n',
color('MSG :','yellow'),color(budy,'cyan'),'\n',
color('CMD :','yellow'),color(comando,'cyan'),'\n',
color('HORA :','yellow'),color(hora,'cyan'),'\n',
color('DATA :','yellow'),color(data,'cyan'),'\n')

if(isCmd && isGroup) console.log(
color('[ CMD EM GRUPO ]','red'),'\n',
color('GRUPP :','yellow'),color(groupName,'cyan'),
color('NOME :','yellow'),color(pushname,'cyan'),'\n',
color('CMD :','yellow'),color(comando,'cyan'),
color('MSG :', 'blue',),color(budy, 'cyan'),
color('HORA :','yellow'),color(hora,'cyan'),'\n',
color('DATA :','yellow'),color(data,'cyan'),'\n')

switch(comando){

case 'play': case 'yt': {
enviar('*_Analisando sua pesquisas 🔍...._*')
reaction("🔍")
const search = await yts(`${text}`).catch(e => { enviar('_Não consegui encontrar oque você queria._')})
anu = await yts( { videoId: `${search.all[0].videoId}` } )
let buttons = [{buttonId: `${prefix}mp3 ${anu.url}`, buttonText: {displayText: 'Audio'}, type: 1},{buttonId: `${prefix}mp4 ${anu.url}`, buttonText: {displayText: 'Video'}, type: 1}]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `_*Pesquisa Encontrada*_

⭔ *_Titulo_* : ${anu.title}
⭔ *_Views_* : ${anu.views}`,
footer: Mizuhara.user.name,
buttons: buttons,
headerType: 4
}
Mizuhara.sendMessage(from, buttonMessage, { quoted: msg })
} 
break
case 'mp3':{
let { yta } = require('./lib/y2mate')
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return enviar('arquivo grande '+util.format(media))
Mizuhara.sendMessage(from, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg'}, { quoted: msg })
}
break

case 'mp4':{
let { ytv } = require('./lib/y2mate')
let quality = args[1] ? args[1] : '1080p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return enviar('Arquivo acima do limite '+util.format(media))
Mizuhara.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4'}, { quoted: msg })
}
reaction('🎥')
break

case 'mediafire': {
  if (!text) return enviar(msg.dono)
  if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return enviar(`O link que você forneceu é inválido`)
  const testando = await mediafireDl(text)
  if (testando[0].size.split('MB')[0] >= 999) return enviar('*Arquivo acima do limite* ' + util.format(testando))
  const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Nome* : ${testando[0].nama}
*Tamanho* : ${testando[0].size}
*Tipo* : ${testando[0].mime}
*Link* : ${testando[0].link}`
  enviar(`${result4}`)
  Mizuhara.sendMessage(from, { document: { url: testando[0].link }, fileName: testando[0].nama, mimetype: testando[0].mime }, { quoted: msg }).catch((err) => enviar(mess.error))
}
reaction('🗃️')
break

case 'a':
 xeonbody = `kkkk`
let buttons = [
{buttonId: `wkwwk`, buttonText: {displayText: 'Welcome 💐'}, type: 1}
]
let buttonsMessage = {
document: fs.readFileSync('./Smedia/theme/Mizuhara.xlsx'),
fileName: `@マスクの後ろ`,
fileLength: 99999999999999,
caption: xeonbody,
footer: '@mizuhara',
buttons: buttons,
headerType: 4,
}
Mizuhara.sendMessage(from, buttonsMessage)
break

//MENU
  case 'menu':
templateButtons = [
{index: 1, urlButton: {displayText: 'Grupo', url: 'NULO'}},
{index: 2, urlButton: {displayText: ' Dono ', url: 'https://wame/5592993533041'}},
{index: 3, quickReplyButton: {displayText: 'Criador!', id: `${prefix}criador`}},
{index: 4, quickReplyButton: {displayText: 'Ping!', id: `${prefix}ping`}},
]
templateMessage = {
image: {url: 'https://i.ibb.co/nDqhkDm/chizuru1-jpg-976912859.jpg',
quoted:contato},
caption:menu,
footer: '@mizuhara',
templateButtons: templateButtons
}

reaction("💤")
Mizuhara.sendMessage(from,templateMessage)
break
//ping
case 'ping':
let timestamp = speed()
let latensi = speed() - timestamp
enviar(`Respondendo em ${latensi.toFixed(4)} Segundo`)
reaction('🚀')
break

case 'update': {
if(!isCriador) return enviar(msg.dono)
update = execSync('git remote set-url origin https://github.com/flaviotn595/Mizuhara-Bot.git && git pull')
enviar(update.toString())
}
break
case 'ban':{
  if(!isGroup) return enviar(mess.grupos)
  if(!isBotGroupAdmins) return enviar(mess.notAdm)
 if(!isAdmins) return enviar(mess.adm)
}
break 
 

/* case 'sticker':
   //chamando a função de donwload;
   const stream = await downloadContentFromMessage(msg.message.imageMessage, 'image');
   enviar("Preparando requisição...");
   
   //sistema de download ;
   const buffer = Buffer.from([]);
   
   for await(const chunk of stream){
     buffer = Buffer.concat([buffer , chunk]);
  
//salvando a image com o numero da pessoa ;
  const media = `./figus/${getNumber}.jpeg`;
 //salva o arquivo
  fs.writeFileSync(media, buffer);
  // wa-sticker-formatter 
  const sticker = new Sticker(`./${getNumber}.jpeg`,{
    pack : pushname, // the pack name;
    author: '@mizuharaBot', //the author name;
    type : StickerTypes.FULL, // the sticker type;
    categories: ['' , '💤'], //the sticker category;
    id: `${getNumber}`, // the sticker id;
    quality: 10, // the quality of the output file;
    background : '#00000000' // the color background 
})

const save = await sticker.toBuffer() //convert to buffer 

await sticker.toFile(`${getNumber}.webp`);

Mizuhara.sendMessage(from,{
    sticker: {
        url: getNumber + ".webp"
        }})
     reaction('✅')
     
     try {
     
     fs.unlinkSync(getNumber + ".jpeg");
     await sleep(500)
     fs.unlinkSync(getNumber + ".webp");
     
     } catch (error){
     
     enviar(" 🤨 1 momento meu chapa");
     reaction("🥱");
     }

break
*/
   }}catch (error) {
          console.log(error)
        //  enviar(error);
        }
      })
  }
startMizuhara();
