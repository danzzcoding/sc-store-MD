require('./config/setting')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { exec, spawn, execSync } = require("child_process")

//lib
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

//waktu
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')

//tanggal
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var harri = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = harri[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const tanggall = (hri + '' + buln[bulnh] + '' + syear)
const harii = (thisDaye)

module.exports = danzz = async (danzz, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await danzz.decodeJid(danzz.user.id)
        const isOwner = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPrem = global.premium
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const from = m.chat
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        
        //ucapan waktu
        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam 🌃'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang 🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore 🏙'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang 🌁'
}
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'Selamat Pagi 🌄'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Subuh 🌉'
}
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'Selamat Tengah Malam 🌌'
}

		//Group
        const groupMetadata = m.isGroup ? await danzz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isOwner
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = true
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: true,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = true
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateLocation' in setting)) setting.templateLocation = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: true,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateLocation: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        
        // Public & Self
        if (!danzz.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            danzz.readMessages([m.key])
            console.log(chalk.black(chalk.bgGreen('[ Chat ]')), chalk.black(chalk.blueBright(new Date)), chalk.black(chalk.greenBright(budy || m.mtype)) + '\n' + chalk.magentaBright('- from'), chalk.blueBright(pushname), chalk.greenBright(m.sender) + '\n' + chalk.blueBright('- in'), chalk.cyanBright(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
		//reset limit
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })    
	  //AntiLink
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin`)
        let gclink = (`https://chat.whatsapp.com/`+await danzz.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ngapain Lu Ngirim Link Group Ini?`)
        if (isAdmins) return m.reply(`Admin Mah Bebas Yakan?`)
        if (isOwner) return m.reply(`Owner Bot Mah Bebas Yakan?`)
        m.reply(`[ *ANTI LINK* ]\n\nKamu Terdeteksi Mengirim Link Grup, Kamu Akan Di Kick!!!`)
        danzz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
        //Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: danzz.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, danzz.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        danzz.ev.emit('messages.upsert', msg)
        }
        //Auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await danzz.setStatus(`${'©Danzz-MD'} | Runtime : ${runtime(process.uptime())}`)
		setting.status = new Date() * 1
	    }
	}
    switch(command) {
    	case 'menu': case 'help':
anu = `Hai ${pushname}👋, ${ucapanWaktu}.

Saya ${namabot}, Bot Whatsapp Yang Dibuat Oleh: DanzzCoding, Pada: 23/08/22
`
let menu = [{
                                quickReplyButton: {
                                    displayText: 'All Menu',
                                    id: 'allmenu'
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }  
                            }]
                         let setbott = db.data.settings[botNumber]
                        if (setbott.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.menuutama, menu, global.menuutama)
                        } else if (setbott.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.video, menu, global.menuutama)
                        } else if (setbott.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.video, menu, global.menuutama)
                        } else if (setbott.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, menu)
                        } else if (setbott.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.menuutama, menu)
                        }
            break
            case 'allmenu':
anu = `Hai ${pushname}👋, ${ucapanWaktu}.

${symbol1} *INFO USER*
${symbol2} Name : ${pushname}
${symbol2} Number : ${m.sender.split('@')[0]}

${symbol1} *INFO BOT*
${symbol2} Name : ${global.namabot}
${symbol2} Owner : ${global.namaowner}
${symbol2} Creator : Ramdani
${symbol2} Prefix : ${prefix}
${symbol2} Mode : ${danzz.public ? 'Public' : 'Self'}
${symbol2} Runtime : ${runtime(process.uptime())}
${symbol2} Library : Baileys Multi Device

${symbol1} *INFO SERVER*
${symbol2} Date : ${tanggall}
${symbol2} Time : ${time}
${symbol2} WIB : ${moment().utcOffset('+0700').format('HH:mm')}
${symbol2} WIB : ${moment().utcOffset('+0900').format('HH:mm')}
${symbol2} WITA : ${moment().utcOffset('+0800').format('HH:mm')}


${symbol1} *INFO MENU*
${symbol2} ${prefix}ping
${symbol2} ${prefix}speed
${symbol2} ${prefix}botstatus

${symbol1} *HOSTING MENU*
${symbol2} ${prefix}domain <hostname|ip>
${symbol2} ${prefix}listdomain
${symbol2} ${prefix}shorlink
${symbol2} ${prefix}loginwhm
${symbol2} ${prefix}logincpanel
${symbol2} ${prefix}linkadd
${symbol2} ${prefix}linksubdo

${symbol1} *STORE MENU*
${symbol2} ${prefix}topupgame
${symbol2} ${prefix}script
${symbol2} ${prefix}sewabot
${symbol2} ${prefix}jadipremium
${symbol2} ${prefix}testimoni

${symbol1} *OWNER MENU*
${symbol2} ${prefix}join <link>
${symbol2} ${prefix}leave
${symbol2} ${prefix}public
${symbol2} ${prefix}self
${symbol2} ${prefix}setppbot
${symbol2} ${prefix}block
${symbol2} ${prefix}unblock
`
let allmenu = [{
                                quickReplyButton: {
                                    displayText: 'Sewa',
                                    id: 'sewa'
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }  
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.allmenu, allmenu, global.allmenu)
                        } else if (setbot.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.video, allmenu, global.allmenu)
                        } else if (setbot.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.video, allmenu, global.allmenu)
                        } else if (setbot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btn)
                        } else if (setbot.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.allmenu, allmenu)
                        }
            break
            case 'command': case 'c':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hai ${pushname}👋, ${ucapanWaktu}\n\nKalo ada yg error lapor ke owner.\n\n`,
                    description: "*Click below here*",
                    buttonText: "SELECT MENU",
                    footerText: "© Danzz Coding",
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "All Menu",
								"rows": [
									{
										"title": "All Menu",
										"description": "Menampilkan Semua Menu",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "Store Menu",
										"description": "Menampilkan Store Menu",
										"rowId": `${prefix}storemenu2`
									}
								]
							},
							{
								"title": "List Menu",
								"rows": [
									{
										"title": "Info Menu",
										"description": "Menampilkan Info Menu",
										"rowId": `${prefix}infomenu`
									},
									{
										"title": "Hosting Menu",
										"description": "Menampilkan Hosting Menu",
										"rowId": `${prefix}hostingmenu`
									},
									{
										"title": "Store Menu",
										"description": "Menampilkan Store Menu",
										"rowId": `${prefix}storemenu`
									},
									{
										"title": "Owner Menu",
										"description": "Menampilkan Owner Menu",
										"rowId": `${prefix}ownermenu`
									}
										]
										},
							{
								"title": "Developer",
								"rows": [
									{
										"title": "Developer",
										"description": "Menampilkan Nomor Developer",
										"rowId": `${prefix}owner`
									}
								]
							}
						],
          listType: 1
                }
            }), { userJid: m.chat, quoted: m })
            danzz.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case 'store2': case 'storemenu2':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hai ${pushname}👋, ${ucapanWaktu}\n\nMau Beli Apa Kak?\n\n`,
                    description: "*Click below here*",
                    buttonText: "SELECT MENU",
                    footerText: "© Danzz Coding",
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Store Menu",
								"rows": [
									{
										"title": "Top Up Game",
										"description": "",
										"rowId": `${prefix}topupgame`
									},
									{
										"title": "Script Bot",
										"description": "",
										"rowId": `${prefix}scriptbot`
									},
									{
										"title": "Sewa Bot",
										"description": "",
										"rowId": `${prefix}sewabot`
									},
									{
										"title": "Jadi Premium",
										"description": "",
										"rowId": `${prefix}jadipremium`
									}
								]
							}
						],
          listType: 1
                }
            }), { userJid: m.chat, quoted: m })
            danzz.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case 'topup': case 'topupgame':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hai ${pushname}👋, ${ucapanWaktu}\n\nMau Top Up Apa Kak?\n\n`,
                    description: "*Click below here*",
                    buttonText: "SELECT MENU",
                    footerText: "© Danzz Coding",
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Top Up Menu",
								"rows": [
									{
										"title": "Top Up Mobile Legends",
										"description": "",
										"rowId": `${prefix}topupml`
									},
									{
										"title": "Top Up Free Fire",
										"description": "",
										"rowId": `${prefix}topupff`
									}
								]
							}
						],
          listType: 1
                }
            }), { userJid: m.chat, quoted: m })
            danzz.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            //MENU
            case 'infomenu': {
anu = `${ucapanWaktu} ${pushname}

${symbol1} *INFO USER*
${symbol2} Name : ${pushname}
${symbol2} Number : ${m.sender.split('@')[0]}

${symbol1} *INFO BOT*
${symbol2} Name : ${global.namabot}
${symbol2} Owner : ${global.namaowner}
${symbol2} Creator : Ramdani
${symbol2} Prefix : ${prefix}
${symbol2} Mode : ${danzz.public ? 'Public' : 'Self'}
${symbol2} Runtime : ${runtime(process.uptime())}
${symbol2} Library : Baileys Multi Device

${symbol1} *INFO SERVER*
${symbol2} Date : ${tanggall}
${symbol2} Time : ${time}
${symbol2} WIB : ${moment().utcOffset('+0700').format('HH:mm')}
${symbol2} WIB : ${moment().utcOffset('+0900').format('HH:mm')}
${symbol2} WITA : ${moment().utcOffset('+0800').format('HH:mm')}


${symbol1} *INFO MENU*
${symbol2} ${prefix}ping
${symbol2} ${prefix}speed
${symbol2} ${prefix}botstatus
`
let btn = [{
                                urlButton: {
                                    displayText: 'Youtube',
                                    url: 'https://youtube.com/c/DanzzCoding'
                                }
                                }, {
                                urlButton: {
                                    displayText: 'My Rest Api`s',
                                    url: 'https://danzz-api.herokuapp.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btn)
                        } else if (setbot.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.thumb, btn)
                        }
                     }
            break
            case 'hostingmenu': {
anu = `${ucapanWaktu} ${pushname}

${symbol1} *INFO USER*
${symbol2} Name : ${pushname}
${symbol2} Number : ${m.sender.split('@')[0]}

${symbol1} *INFO BOT*
${symbol2} Name : ${global.namabot}
${symbol2} Owner : ${global.namaowner}
${symbol2} Creator : Ramdani
${symbol2} Prefix : ${prefix}
${symbol2} Mode : ${danzz.public ? 'Public' : 'Self'}
${symbol2} Runtime : ${runtime(process.uptime())}
${symbol2} Library : Baileys Multi Device

${symbol1} *INFO SERVER*
${symbol2} Date : ${tanggall}
${symbol2} Time : ${time}
${symbol2} WIB : ${moment().utcOffset('+0700').format('HH:mm')}
${symbol2} WIB : ${moment().utcOffset('+0900').format('HH:mm')}
${symbol2} WITA : ${moment().utcOffset('+0800').format('HH:mm')}


${symbol1} *HOSTING MENU*
${symbol2} ${prefix}domain <hostname|ip>
${symbol2} ${prefix}listdomain
${symbol2} ${prefix}shorlink
${symbol2} ${prefix}loginwhm
${symbol2} ${prefix}logincpanel
${symbol2} ${prefix}linkadd
${symbol2} ${prefix}linksubdo
`
let btn = [{
                                urlButton: {
                                    displayText: 'Youtube',
                                    url: 'https://youtube.com/c/DanzzCoding'
                                }
                                }, {
                                urlButton: {
                                    displayText: 'My Rest Api`s',
                                    url: 'https://danzz-api.herokuapp.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btn)
                        } else if (setbot.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.thumb, btn)
                        }
                     }
            break
            case 'storemenu': {
anu = `${ucapanWaktu} ${pushname}

${symbol1} *INFO USER*
${symbol2} Name : ${pushname}
${symbol2} Number : ${m.sender.split('@')[0]}

${symbol1} *INFO BOT*
${symbol2} Name : ${global.namabot}
${symbol2} Owner : ${global.namaowner}
${symbol2} Creator : Ramdani
${symbol2} Prefix : ${prefix}
${symbol2} Mode : ${danzz.public ? 'Public' : 'Self'}
${symbol2} Runtime : ${runtime(process.uptime())}
${symbol2} Library : Baileys Multi Device

${symbol1} *INFO SERVER*
${symbol2} Date : ${tanggall}
${symbol2} Time : ${time}
${symbol2} WIB : ${moment().utcOffset('+0700').format('HH:mm')}
${symbol2} WIB : ${moment().utcOffset('+0900').format('HH:mm')}
${symbol2} WITA : ${moment().utcOffset('+0800').format('HH:mm')}


${symbol1} *STORE MENU*
${symbol2} ${prefix}topupgame
${symbol2} ${prefix}script
${symbol2} ${prefix}sewabot
${symbol2} ${prefix}jadipremium
${symbol2} ${prefix}testimoni
`
let btn = [{
                                urlButton: {
                                    displayText: 'Youtube',
                                    url: 'https://youtube.com/c/DanzzCoding'
                                }
                                }, {
                                urlButton: {
                                    displayText: 'My Rest Api`s',
                                    url: 'https://danzz-api.herokuapp.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btn)
                        } else if (setbot.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.thumb, btn)
                        }
                     }
            break
case 'ownermenu': {
anu = `${ucapanWaktu} ${pushname}

${symbol1} *INFO USER*
${symbol2} Name : ${pushname}
${symbol2} Number : ${m.sender.split('@')[0]}

${symbol1} *INFO BOT*
${symbol2} Name : ${global.namabot}
${symbol2} Owner : ${global.namaowner}
${symbol2} Creator : Ramdani
${symbol2} Prefix : ${prefix}
${symbol2} Mode : ${danzz.public ? 'Public' : 'Self'}
${symbol2} Runtime : ${runtime(process.uptime())}
${symbol2} Library : Baileys Multi Device

${symbol1} *INFO SERVER*
${symbol2} Date : ${tanggall}
${symbol2} Time : ${time}
${symbol2} WIB : ${moment().utcOffset('+0700').format('HH:mm')}
${symbol2} WIB : ${moment().utcOffset('+0900').format('HH:mm')}
${symbol2} WITA : ${moment().utcOffset('+0800').format('HH:mm')}


${symbol1} *OWNER MENU*
${symbol2} ${prefix}join <link>
${symbol2} ${prefix}leave
${symbol2} ${prefix}public
${symbol2} ${prefix}self
${symbol2} ${prefix}setppbot
${symbol2} ${prefix}block
${symbol2} ${prefix}unblock
`
let btn = [{
                                urlButton: {
                                    displayText: 'Youtube',
                                    url: 'https://youtube.com/c/DanzzCoding'
                                }
                                }, {
                                urlButton: {
                                    displayText: 'My Rest Api`s',
                                    url: 'https://danzz-api.herokuapp.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules',
                                    id: 'rules'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Select Menu',
                                    id: 'command'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.danzzz, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btn)
                        } else if (setbot.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.thumb, btn)
                        }
                     }
            break
       //FITUR
       //INFO MENU
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speed': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            //SERVER MENU
            case 'domain': 
            if (!isPremium) throw mess.premium
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone1 = "e8de8d9cbc96b323b53f596417e909b1";
            let apiToken1 = "W-qRsQzS4c0UKglamuRQ9QP_em9AcdgLqTfeybYR";
            let tld1 = "newvira.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone1}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld1, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apiToken1,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return m.reply(`Harap Masukan Host&Ip!\n\nExample: ${prefix + command} danzz-api.duckdns.org | 114.79.1.246`);
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) m.reply(`*SUCCESS ADD DOMAIN*\n\nIP: ${e['ip']}\nDOMAIN:${e['name']}`);
          else m.reply(`404 ERROR, Msg: Domain Sudah Terdaftar, Silahkan Pakai Id Host/Ip Baru`)
        });
        break
        case 'shorlink':
        if (!isPremium) throw mess.premium
        m.reply(`*SHORT LINK*\n\nLINK: https://t-qw.tutorevent2022.cf/add.php?keyini=Y`)
        break
case 'loginwhm':
if (!isPremium) throw mess.premium
m.reply(`*LINK LOGIN WHM*\n\nLINK: https://papernesia.cloudnesia.tk:2087`)
break
case 'logincpanel':
if (!isPremium) throw mess.premium
m.reply(`*LOGIN CPANEL*\n\nLINK: https://papernesia.cloudnesia.tk:2083`)
break
case 'linksubdo':
if (!isPremium) throw mess.premium
m.reply(`*SUBDO*\n\nLINK: https://subdomain.rakapay.my.id/domain.php`)
break
case 'linkadd':
if (!isPremium) throw mess.premium
m.reply(`*LINK ADD*\n\nLINK: https://paperpack.cloudnesia.tk`)
break
case 'listdomain': {
if (!isPremium) throw mess.premium
                anu = `*LIST DOMAIN*
- barux2022.tk
- baruxx.my.id 
- xbaru.my.id
- terbarux2022.my.id
- barux.ink 

contoh : https://danzzcodingweb.barux2022.tk
`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./src/foto/listdomain.jpg') }, { upload: danzz.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Youtube',
                                    url: 'https://youtube.com/c/DanzzCoding'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'My Website',
                                    url: 'https://danzzcodingweb.vercel.app'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'menu'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                danzz.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            //STORE MENU
            case 'sc': case 'script': case 'scriptbot':
anu = `*SCRIPT BOT*
- IDR: 10K

*KELEBIHAN BOT*
- WORK ALL FITUR
- NO PASARAN

*FITUR*
- STORE
- HOSTING
- ANTI LINK ( AUTO KICK )
- WELCOME ( OTOMATIS )
- DAN FITUR LAINYA

Minat? wa.me/6288296339947?text=bang+mau+beli+scbot

*PAYMENT*
- DANA
- GOPAY
- QRIS ALL PAY
`
let bttn = [{
                                quickReplyButton: {
                                    displayText: 'Dana',
                                    id: 'dana'
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Gopay',
                                    id: 'gopay'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Qris All Pay',
                                    id: 'qrisallpay'
                                }  
                            }]
                         let setboot = db.data.settings[botNumber]
                        if (setboot.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.script, bttn, global.script)
                        } else if (setboot.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.video, bttn, global.script)
                        } else if (setboot.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.video, bttn, global.script)
                        } else if (setboot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, bttn)
                        } else if (setboot.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.script, bttn)
                        }
            break
            case 'sewabot':
anu = `*SEWABOT*
- 1 BULAN : 20K

*KELEBIHAN BOT*
- FREE PREMIUM
- ON 24 JAM
- FITUR BANYAK

*KEUNTUNGAN*
- ANTI LINK ( AUTO KICK )
- WELCOME ( OTOMATIS )
- DAN FITUR LAINYA

Minat? wa.me/6288296339947?text=bang+mau+sewabot

*PAYMENT*
- DANA
- GOPAY
- QRIS ALL PAY
`
let btnn = [{
                                quickReplyButton: {
                                    displayText: 'Dana',
                                    id: 'dana'
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Gopay',
                                    id: 'gopay'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Qris All Pay',
                                    id: 'qrisallpay'
                                }  
                            }]
                         let setbotz = db.data.settings[botNumber]
                        if (setbotz.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.sewabot, btnn, global.sewabot)
                        } else if (setbotz.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.video, btnn, global.sewabot)
                        } else if (setbotz.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.video, btnn, global.sewabot)
                        } else if (setbot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btnn)
                        } else if (setbotz.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.sewabot, btnn)
                        }
            break
            case 'jadipremium': case 'premium':
anu = `*JADI PREMIUM*
- 1 BULAN : 7k

*MANFAAT PREMIUM*
- FITUR PREMIUM UNCLOCK
- FITUR HOST UNLOCK
- DAN FITUR LAINNYA

Minat? wa.me/6288296339947?text=bang+mau+jadipremium

*PAYMENT*
- DANA
- GOPAY
- QRIS ALL PAY
`
let btnz = [{
                                quickReplyButton: {
                                    displayText: 'Dana',
                                    id: 'dana'
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Gopay',
                                    id: 'gopay'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Qris All Pay',
                                    id: 'qrisallpay'
                                }  
                            }]
                         let setbootz = db.data.settings[botNumber]
                        if (setbootz.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.premium, btnz, global.premium)
                        } else if (setbootz.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.video, btnz, global.premium)
                        } else if (setbootz.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.video, btnz, global.premium)
                        } else if (setboot.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, btnz)
                        } else if (setbootz.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.premium, btnz)
                        }
            break
            //OWNER MENU
            case 'setppbot': {
                if (!isOwner) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await danzz.downloadAndSaveMediaMessage(quoted)
                await danzz.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
        case 'block': {
		if (!isOwner) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await danzz.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isOwner) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await danzz.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
            case 'join': {
                if (!isOwner) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await danzz.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isOwner) throw mess.owner
                await danzz.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'public': {
                if (!isOwner) throw mess.owner
                danzz.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isOwner) throw mess.owner
                danzz.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                danzz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            
            //
            case 'owner': case 'creator': {
                danzz.sendContact(m.chat, global.owner, m)
            }
            break
            
            case 'donasi':
anu = `Mau donasi kak? Silahkan pilih dibawah sini untuk memilih via pembayaran!`
let donatod = [{
                                quickReplyButton: {
                                    displayText: 'Dana',
                                    id: 'dana'
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Gopay',
                                    id: 'gopay'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Qris All Pay',
                                    id: 'qrisallpay'
                                }  
                            }]
                         let setbottt = db.data.settings[botNumber]
                        if (setbottt.templateImage) {
                        danzz.send5ButImg(m.chat, anu, `${wm}`, global.donasi, donatod, global.donasi)
                        } else if (setbottt.templateGif) {
                        danzz.send5ButGif(m.chat, anu, `${wm}`, global.video, donatod, global.donasi)
                        } else if (setbottt.templateVid) {
                        danzz.send5ButVid(m.chat, anu, `${wm}`, global.video, donatod, global.donasi)
                        } else if (setbottt.templateMsg) {
                        danzz.send5ButMsg(m.chat, anu, `${wm}`, donatod)
                        } else if (setbottt.templateLocation) {
                        danzz.send5ButLoc(m.chat, anu, `${wm}`, global.donasi, donatod)
                        }
            break            
case 'qrisallpay': {
                danzz.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/24861ac82715b3d495381.jpg' }, caption: `Qris All Pay` }, { quoted: m })
            }
            break
case 'dana': {
 m.reply('DANA : 088296339947')
}
break
case 'gopay': {
 m.reply('GOPAY : 089512545999')
}
break
case 'pulsa': {
m.reply('PULSA : 089512545999')
}
break
    	default:
                if (budy.startsWith('=>')) {
                    if (!isOwner) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isOwner) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isOwner) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    danzz.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
