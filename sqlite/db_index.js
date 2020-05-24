var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');



class GameDBHandler{
  // 构造函数
  constructor(){
    this.db = null;
  }

  // 初始化数据库
  initDB(){
    var basefile = "./gamebase.db"
    var exists = fs.existsSync(basefile);

    // 不存在则创建
    if(!exists){
      console.log("create database file.");
      fs.openSync(basefile, "w");
    }

    this.db = new sqlite3.Database(basefile, function(err){
      console.log("创建数据库返回结果：" + err);
    });
  }

  // 初始化表
  InitTable(){
    // 玩家分数表创建语句
    const txtScoreTable = "CREATE TABLE IF NOT EXISTS score(openid VARCHAR(128) PRIMARY KEY NOT NULL, savekey INT,  score INTEGER, savetime INTEGER);";

    // 玩家金币表创建语句
    const txtGoldTable = "";

    // 玩家最高分数表
    const txtHistotyScore = "";

    var db = this.db;
    this.db.serialize(function(){
      db.run(txtScoreTable, function(err){
        console.log("创建表结果：" + err);
      });
    })
  }
};

var dbHandler = new GameDBHandler();
dbHandler.initDB();
dbHandler.InitTable();

//module.exports = dbHandler;


/*
var db = new sqlite3.Database(':memory:');
 
db.serialize(function() {
  db.run("CREATE TABLE lorem (info TEXT)");
 
  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();
 
  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});
*/
//db.close();