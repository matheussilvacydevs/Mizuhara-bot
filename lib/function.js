const cfonts = require('cfonts');
const chalk = require('chalk');
const fetch = require('node-fetch');

exports.fetch = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})

exports.fetchText = fetchText = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.text())
        .then(text => {
            // console.log(text)
            resolve(text)
        })
        .catch((err) => {
            reject(err)
        })
})

const color = (text, color) => {
return !color ? chalk.Red(text) : chalk.keyword(color)(text)
}


const mess = {
dono: 'vo',
adm: ' comando apenas para adm ! ',
bot: ' teste ',
playOn: ' teste ',
videoOn: ' teste ',
aguarde: ' teste ',
notAdm: 'Comando só funciona se eu ser adm Zé!',
grupos: 'Comando apenas para grupos!'
}

const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}
const boton = '  '

module.exports = {
mess,
color,
boton,
getGroupAdmins,
fetch,
  fetchText
}
