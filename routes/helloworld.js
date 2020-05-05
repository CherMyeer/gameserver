const client = require("koa-router")();

client.get("/", ctx => {
  ctx.response.type = "html";
  ctx.response.body = "OnConnect";

  console.log("---------------------------------- on connect -----------------------------------------");
});

module.exports = client;
