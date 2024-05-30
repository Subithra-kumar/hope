const { izumi,mode, getJson } = require("../lib/");
izumi ({
    pattern: "naruto$",
    fromMe: mode,
    desc: "random Naruto anime videos",
    type: "AnimeVideo",
}, async (message, match) => {
const { result } = await getJson('https://api.maskser.me/api/anime/naruto?apikey=izumi-v3')
message.sendFromUrl(result.url,{caption: "Iᴢᴜᴍɪ"})
});

izumi ({
    pattern: "anime$",
    fromMe: mode,
    desc: "random  anime videos",
    type: "AnimeVideo",
}, async (message, match) => {
const { result } = await getJson('https://api.maskser.me/api/anime/anivideo?apikey=izumi-v3')
message.sendFromUrl(result.url,{caption: "Iᴢᴜᴍɪ"})
});
 izumi ({
    pattern: "mstatus$",
    fromMe: mode,
    desc: "random Malayalam status videos",
    type: "media",
}, async (message, match) => {
const { result } = await getJson('https://api.maskser.me/api/randomvideo/msts?apikey=izumi-v3')
message.sendFromUrl(result.video,{caption: "Iᴢᴜᴍɪ"})
});
 izumi ({
    pattern: "sexy$",
    fromMe: mode,
    desc: "random girls reels videos",
    type: "media",
}, async (message, match, client) => {
let url = `https://api.maskser.me/api/randomvideo/sexy?apikey=izumi-v3`
message.sendFromUrl(url,{caption: "Iᴢᴜᴍɪ"})
});