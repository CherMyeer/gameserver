const msg = require("koa-router")();
//const fs = require("fs");
// const pt = require("path");

msg.get("/message", ctx => {
  ctx.response.type = "html";
  ctx.response.body = "heartbeat";

  console.log("--------------------------------------msg get ------------------------------------");
  console.log(ctx.require)
  /*= fs.createReadStream(
    pt.join(__dirname, "../views/ping.html")
  );
  */
});

module.exports = msg;