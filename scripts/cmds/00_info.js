const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "cliff",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const botName = "Shiro Chan";
		const botPrefix = "/";
		const authorName = "MD Romeo Islam Rasel";
		const ownAge = "18";
		const teamName = "Github team";
		const authorFB = "facebook.com/mdromeoislamrasel.5";
		const authorInsta = "mdromeoislamrasel";
		const tikTok = "tiktok.com/@romeoislamrasel";
    const bold = 'https://i.ibb.co/5YP584d/415816751.jpg'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id
     const videoPath = path.join(tmpFolderPath, 'owner.jpg'));
    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Dhaka');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `《  Bot & Owner Info 》
\Name: ${botName}
\Bot Prefix: ${botPrefix}
\owner: ${authorName}
\age : ${ownAge}
\Facebook: ${authorFB}
\Instagram: ${authorInsta}
\TikTok: ${tikTok}
\Datee: ${date}
\Time: ${time}
\Team: ${teamName}
\Uptime: ${uptimeString}
\===============`,
			attachment: const videoPath = path.join(tmpFolderPath, 'owner.jpg')
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
