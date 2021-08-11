var mysql = require("mysql");

var conn = mysql.createConnection({
  host: "dbinstance.ceng6touaieb.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  database: "menu",
  password: "rla981109",
  port: 3306
});

module.exports = conn;
