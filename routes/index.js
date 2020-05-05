const router = require("koa-router")();
const helloworld = require("./helloworld");
const ping = require("./ping");
const msg = require("./message");

router.use(helloworld.routes());
router.use(ping.routes());
router.use(msg.routes());

module.exports = router;
