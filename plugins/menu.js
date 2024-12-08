const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

        cmd({
    pattern: "menu",
    desc: "get cmd list",
    react: "⚙️",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, pushname, reply }) => {
    try {
        // Initialize menu categories
        let menu = {
            main: '',
            download: '',
            group: '',
            owner: '',
            convert: '',
            search: ''
        };

        // Iterate through commands and categorize them
        for (let i = 0; i < commands.length; i++) {
            if (commands[i].pattern && !commands[i].dontAddCommandList) {
                menu[commands[i].category] += `⬡│▸  .${commands[i].pattern}\n`; // Added `.` before pattern
            }
        }

        let madeMenu = `*╭─────────────────❒⁠⁠⁠⁠*
*CREATOR:- 𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐞𝐦𝐩𝐢𝐫𝐞*
*OWNER:- ${config.OWNER_NAME}*
*VERSION:- v1.0.0*
*UPTIME:- ${runtime(process.uptime())}*
*MEM:- ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB*
*┕─────────────────❒*

──〈 *ᴏᴡɴᴇʀ* 〉───◆
│╭─────────────···▸
┴│▸
${menu.owner}
┬│▸
│╰────────────···▸▸
└───────────────···▸

──〈 *ᴍᴀɪɴ* 〉───◆
│╭─────────────···▸
┴│▸
${menu.main}
┬│▸
│╰────────────···▸▸
└───────────────···▸

──〈 *ɢʀᴏᴜᴘ* 〉───◆
│╭─────────────···▸
┴│▸
${menu.group}
┬│▸
│╰────────────···▸▸
└───────────────···▸

──〈 *ᴅᴏᴡɴʟᴏᴀᴅ* 〉───◆
│╭─────────────···▸
┴│▸
${menu.download}
┬│▸
│╰────────────···▸▸
└───────────────···▸

──〈 *ᴄᴏɴᴠᴇʀᴛ* 〉───◆
│╭─────────────···▸
┴│▸
${menu.convert}
┬│▸
│╰────────────···▸▸
└───────────────···▸

──〈 *sᴇᴀʀᴄʜ* 〉───◆
│╭─────────────···▸
┴│▸
${menu.search}
┬│▸
│╰────────────···▸▸
└───────────────···▸

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ Only_one_🥇Empire*
`;

        // Send the dynamic menu to the user
        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: madeMenu }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
