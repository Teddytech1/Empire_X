const config = require('../config');
const { cmd, commands } = require('../command');

const prefix = config.PREFIX; // Get the prefix from the config
const exampleNumber = '2348078582627'; // Updated example number to exclude from being blocked/unblocked

cmd({
    pattern: "block",
    category: "owner",
    desc: "Block a number in the group or chat.",
    react: "🚫", // React emoji for block
    filename: __filename,
}, async (conn, mek, m, { from, isGroup, body, sender, pushname }) => {
    try {
        const numberToBlock = body.split(" ")[1];

        // If no number is provided
        if (!numberToBlock) {
            await conn.sendMessage(from, {
                text: `Use ${prefix}block 2348078582627`,
            }, { quoted: mek });
            return;
        }

        // Skip blocking the example number
        if (numberToBlock === exampleNumber) {
            await conn.sendMessage(from, {
                text: `The number ${exampleNumber} cannot be blocked.`,
            }, { quoted: mek });
            return;
        }

        // If it's a group, ask for the number if not provided
        if (isGroup) {
            const userId = `${numberToBlock}@s.whatsapp.net`;

            try {
                await conn.updateBlockStatus(userId, 'block');
                await conn.sendMessage(from, {
                    text: `Number ${numberToBlock} has been blocked successfully.`,
                }, { quoted: mek });
            } catch (err) {
                console.error(err);
                await conn.sendMessage(from, {
                    text: `Failed to block the number: ${err.message}`,
                }, { quoted: mek });
            }
        } else {
            const userId = `${numberToBlock}@s.whatsapp.net`;

            try {
                await conn.updateBlockStatus(userId, 'block');
                await conn.sendMessage(from, {
                    text: `Number ${numberToBlock} has been blocked successfully.`,
                }, { quoted: mek });
            } catch (err) {
                console.error(err);
                await conn.sendMessage(from, {
                    text: `Failed to block the number: ${err.message}`,
                }, { quoted: mek });
            }
        }
    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, {
            text: `An error occurred while blocking the number. Please try again.`,
        }, { quoted: mek });
    }
});

cmd({
    pattern: "unblock",
    category: "owner",
    desc: "Unblock a number in the group or chat.",
    react: "✅", // React emoji for unblock
    filename: __filename,
}, async (conn, mek, m, { from, isGroup, body, sender, pushname }) => {
    try {
        const numberToUnblock = body.split(" ")[1];

        // If no number is provided
        if (!numberToUnblock) {
            await conn.sendMessage(from, {
                text: `Use ${prefix}unblock 2348078582627`,
            }, { quoted: mek });
            return;
        }

        // Skip unblocking the example number
        if (numberToUnblock === exampleNumber) {
            await conn.sendMessage(from, {
                text: `The number ${exampleNumber} cannot be unblocked.`,
            }, { quoted: mek });
            return;
        }

        // If it's a group, ask for the number if not provided
        if (isGroup) {
            const userId = `${numberToUnblock}@s.whatsapp.net`;

            try {
                await conn.updateBlockStatus(userId, 'unblock');
                await conn.sendMessage(from, {
                    text: `Number ${numberToUnblock} has been unblocked successfully.`,
                }, { quoted: mek });
            } catch (err) {
                console.error(err);
                await conn.sendMessage(from, {
                    text: `Failed to unblock the number: ${err.message}`,
                }, { quoted: mek });
            }
        } else {
            const userId = `${numberToUnblock}@s.whatsapp.net`;

            try {
                await conn.updateBlockStatus(userId, 'unblock');
                await conn.sendMessage(from, {
                    text: `Number ${numberToUnblock} has been unblocked successfully.`,
                }, { quoted: mek });
            } catch (err) {
                console.error(err);
                await conn.sendMessage(from, {
                    text: `Failed to unblock the number: ${err.message}`,
                }, { quoted: mek });
            }
        }
    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, {
            text: `An error occurred while unblocking the number. Please try again.`,
        }, { quoted: mek });
    }
});