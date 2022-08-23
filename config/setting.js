const fs = require('fs')
const chalk = require('chalk')

//web api
global.APIs = {
	danzzz: 'https://danzz-api-docs.herokuapp.com',
}

// Apikey api
global.APIKeys = {
	'https://danzz-api-docs.herokuapp.com': 'danzz',
}

// Other
global.namabot = ['Danzz Botz']
global.namaowner = ['DanzzCoding']
global.owner = ['6288296339947']
global.premium = ['6288296339947']
global.packname = '© Created By'
global.author = 'DanzzXCode'
global.sessionName = 'session.data'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.symbol1 = '•'
global.symbol2 = '>'
global.wm = '© Danzz Coding'
global.mess = {
    success: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Khusus Group Chat',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus Nomor Bot',
    wait: 'Waittt...',
    premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./src/foto/image.jpg')
global.menuutama = fs.readFileSync('./src/foto/menuutama.jpg')
global.allmenu = fs.readFileSync('./src/foto/allmenu.jpg')
global.storemenu= fs.readFileSync('./src/foto/storemenu.jpg')
global.topup = fs.readFileSync('./src/foto/topup.jpg')
global.donasi = fs.readFileSync('./src/foto/donasi.jpg')
global.sewabot = fs.readFileSync('./src/foto/sewabot.jpg')
global.premium = fs.readFileSync('./src/foto/premium.jpg')
global.listdomain = fs.readFileSync('./src/foto/listdomain.jpg')
global.script = fs.readFileSync('./src/foto/script.jpg')
global.video = { url: 'https://telegra.ph/file/45c29d1789968d9a28eac.jpg' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
