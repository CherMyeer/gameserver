const login = require("koa-router")();
const koa2Req = require("koa2-request")
const config = require("../config");
let WXBizDataCrypt = require("../login/WXBizDataCrypt")

// 登陆处理
login.get("/login", async(ctx, next) => {
    //ctx.require
    //ctx.response.type = "html";
    //ctx.response.body = "on login";
    //let { encryptedData, iv, code } = ctx.request.body;

    let openid = "null";
    do{
        let ctx_query = ctx.query;
        if(ctx_query == null){
            break
        }

        let encryptedData = ctx_query.encryptedData;
        let iv = ctx_query.iv
        let code = ctx_query.code
        if(encryptedData == null || iv == null || code == null){
            break;
        }

        const res = await koa2Req({
            url: `https://api.weixin.qq.com/sns/jscode2session?appid=${config.appid}&secret=${config.appsecret}&js_code=${code}&grant_type=authorization_code`
          })
          
          let body = JSON.parse(res.body);
          let { session_key } = body; // 提取session_key解密

          console.log("session_key:", session_key)
          let pc = new WXBizDataCrypt(config.appid, session_key);
          var data = pc.decryptData(encryptedData, iv)

          openid = data.openid;
    }while(false);

    let sendData = {"openid":openid};

    // states
    ctx.response.states = 200;
    
    // type
    ctx.response.type = 'text/html; charset=utf-8' //'application/json';//'text/html; charset=utf-8'
    //ctx.data = sendData;
    //ctx.response.data = sendData;
    ctx.response.body = JSON.stringify(sendData);

    
    /*
    let strData = JSON.stringify(data)
    ctx.body = {
        data: strData,
        success: true
      }
    //*/
    await next();
});


module.exports = login;