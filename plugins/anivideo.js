const { izumi,mode, getJson } = require("../lib/");
izumi ({
    pattern: "naruto",
    fromMe: mode,
    desc: "random Naruto anime videos",
    type: "AnimeVideo",
}, async (message, match) => {
const { result } = await getJson('https://api.maskser.me/api/anime/naruto')
message.sendFromUrl(result.url,{caption: "Iᴢᴜᴍɪ"})
});

izumi ({
    pattern: "anime",
    fromMe: mode,
    desc: "random  anime videos",
    type: "AnimeVideo",
}, async (message, match) => {
const { result } = await getJson('https://api.maskser.me/api/anime/anivideo')
message.sendFromUrl(result.url,{caption: "Iᴢᴜᴍɪ"})
});
 izumi ({
    pattern: "mstatus$",
    fromMe: mode,
    desc: "random Malayalam status videos",
    type: "media",
}, async (message, match) => {
const { result } = await getJson('https://api.maskser.me/api/randomvideo/msts')
message.sendFromUrl(result.video,{caption: "Iᴢᴜᴍɪ"})
});