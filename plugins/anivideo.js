const { izumi,mode, getJson } = require("../lib/");
izumi ({
    pattern: "naruto",
    fromMe: mode,
    desc: "random Naruto anime videos",
    type: "AnimeVideo",
}, async (message, match, client) => {
const { result } = await getJson('https://api.maskser.me/api/anime/naruto')
message.sendFromUrl(result.url,{caption: "Iᴢᴜᴍɪ"})
});

izumi ({
    pattern: "anime",
    fromMe: mode,
    desc: "random  anime videos",
    type: "AnimeVideo",
}, async (message, match, client) => {
const { result } = await getJson('https://api.maskser.me/api/anime/anivideo')
message.sendFromUrl(result.url,{caption: "Iᴢᴜᴍɪ"})
});