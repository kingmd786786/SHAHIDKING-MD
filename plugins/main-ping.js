const config = require('../config');
const { cmd, commands } = require('../command');

// Array of different fancy text styles for QADEER-AI
const botNameStyles = [
    "𝑆𝐻𝐴𝐻𝐼𝐷-𝑋𝑀𝐷",
    "𝑺𝑯𝑨𝑯𝑰𝑫-𝑿𝑴𝑫",
    "𝐒𝐇𝐀𝐇𝐈𝐃-𝐗𝐌𝐃",
    "𝚂𝙷𝙰𝙷𝙸𝙳-𝚇𝙼𝙳",
    "𝙎𝙃𝘼𝙃𝙄𝘿-𝙓𝙈𝘿",
    "ＳＨＡＨＩＤ-ＸＭＤ",
    "ѕнaнιd-хмd",
    "sнαнι∂-xм∂",
    "sʜᴀʜɪᴅ-xᴍᴅ",
    "ˢᴴᴬᴴᴵᴰ-ˣᴹᴰ"
];

// Track current style index
let currentStyleIndex = 0;

cmd({
    pattern: "ping",
    alias: ["speed","pong"],
    use: '.ping',
    desc: "Check bot's response time.",
    category: "main",
    react: "🌡️",
    filename: __filename
},
async (conn, mek, m, { from, quoted, sender, reply }) => {
    try {
        const start = new Date().getTime();

        const reactionEmojis = ['🔥', '⚡', '🚀', '💨', '🎯', '🎉', '🌟', '💥', '🕐', '🔹'];
        const textEmojis = ['💎', '🏆', '⚡️', '🚀', '🎶', '🌠', '🌀', '🔱', '🛡️', '✨'];

        const reactionEmoji = reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];
        let textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];

        // Ensure reaction and text emojis are different
        while (textEmoji === reactionEmoji) {
            textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];
        }

        // Send reaction using conn.sendMessage()
        await conn.sendMessage(from, {
            react: { text: textEmoji, key: mek.key }
        });

        const end = new Date().getTime();
        const responseTime = (end - start) / 1000;

        // Get current fancy bot name and rotate for next time
        const fancyBotName = botNameStyles[currentStyleIndex];
        currentStyleIndex = (currentStyleIndex + 1) % botNameStyles.length;

        const text = `> *${fancyBotName} SPEED: ${responseTime.toFixed(2)}ms ${reactionEmoji}*`;

        await conn.sendMessage(from, {
            text,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363420842499241@newsletter',
                    newsletterName: "𝗦𝗛𝗔𝗛𝗜𝗗 𝗞𝗜𝗡𝗚-𝗠𝗗",
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in ping command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});

// ping2 remains unchanged
cmd({
    pattern: "ping2",
    desc: "Check bot's response time.",
    category: "main",
    react: "🍂",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*PINGING...*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `*🔥 S
        𝗦𝗛𝗔𝗛𝗜𝗗 𝗞𝗜𝗡𝗚-𝗠𝗗 SPEED : ${ping}ms*` }, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
