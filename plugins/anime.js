const { izumi, mode, getJson } = require("../lib");

izumi({
  pattern: "waifu",
  fromMe: mode,
  desc: "waifuuuu",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.waifu.pics/sfw/waifu');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "neko",
  fromMe: mode,
  desc: "waifuuuu",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.waifu.pics/sfw/neko');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "anna",
  fromMe: true,
  desc: "waifuuuu",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/anna');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "shinobu",
  fromMe: true,
  desc: "waifuuuu",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://waifu.pics/api/sfw/shinobu');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "akira",
  fromMe: true,
  desc: "waifuuuu",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/akira');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "shota",
  fromMe: true,
  desc: "waifuuuu",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/shota');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "husbu",
  fromMe: true,
  desc: "anime",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/husbu');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "sasuke",
  fromMe: true,
  desc: "anime",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/sasuke');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "sakura",
  fromMe: true,
  desc: "anime",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/sakura');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "nezuko",
  fromMe: true,
  desc: "anime",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/nezuko');
  await message.sendFromUrl(url);
});
/*
izumi({
  pattern: "naruto",
  fromMe: true,
  desc: "anime",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/naruto');
  await message.sendFromUrl(url);
});
*/
izumi({
  pattern: "miku",
  fromMe: true,
  desc: "anime",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/miku');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "kurumi",
  fromMe: true,
  desc: "anime",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/kurumi');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "kotori",
  fromMe: true,
  desc: "anime",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/kotori');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "kaori",
  fromMe: true,
  desc: "anime",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/kaori');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "kaga",
  fromMe: true,
  desc: "anime",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/kaga');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "itori",
  fromMe: true,
  desc: "anime",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/itori');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "itachi",
  fromMe: true,
  desc: "anime",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/itachi');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "inori",
  fromMe: true,
  desc: "anime",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/inori');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "erza",
  fromMe: true,
  desc: "anime",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/erza');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "elaina",
  fromMe: true,
  desc: "anime",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/elaina');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "eba",
  fromMe: true,
  desc: "anime",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/eba');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "chihi",
  fromMe: true,
  desc: "anime",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/chiho');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "boruto",
  fromMe: true,
  desc: "anime",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/boruto');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "asuna",
  fromMe: true,
  desc: "anime",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/asuna');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "kaneki",
  fromMe: true,
  desc: "anime",
  type: "anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.maher-zubair.tech/anime/kaneki');
  await message.sendFromUrl(url);
});

izumi({
  pattern: "sanime",
  fromMe: mode,
  desc: "Anime Status",
  type: "anime",
}, async (message, match) => {
  var { result } = await getJson('https://api.maher-zubair.tech/anime/status');
  await message.sendFromUrl(result.url);
});