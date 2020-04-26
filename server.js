const http = require("http");
const express = require("express");
const cmd = require("node-cmd");
const app = express();

app.get("/", (_, r) => r.sendStatus(200));
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://my-private-music.glitch.me/`);
}, 4 * 60 * 1000);

cmd.run("java -jar JMusicBot-0.2.6.jar");
