// require("./sqlite/db_index")

const config = require("./config")
const Koa = require("koa");
const app = new Koa();
const routers = require("./routes/index");
app.use(routers.routes());

app.listen(3000);

console.log("基础配置信息：")
console.log(config);
/*
const port = 3000;
const server = require("http").Server(app.callback());
let socketio = require("socket.io")(server);
let ws = socketio.of("/ws");
ws.on("connect", socket => {
  console.log("connect, socket id: " + socket.id);
  let count = 0;

  socket.on("messagePing", data => {
    count++;
    socket.emit("messagePong", "receive " + count + " ping(s), response pong");
  });

  socket.on("disconnect", () => {
    console.log("disconnect socket id: " + socket.id);
  });

  socket.on("message", data=>{
    let tData = JSON.parse(data);
    console.log("receive msg data:");
    console.log(tData);
  })
});

server.listen(port, "localhost", () => {
  console.log(`server listening on port ${port}!`);
});
//*/