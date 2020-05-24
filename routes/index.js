const router = require("koa-router")();
const helloworld = require("./helloworld");
const ping = require("./ping");
const msg = require("./message");
const login = require("./login")

router.use(helloworld.routes());
router.use(ping.routes());
router.use(msg.routes());
router.use(login.routes());

module.exports = router;
