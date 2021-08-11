var express = require('express');
var app = express();
var mysqlDB = require('./db');

mysqlDB.connect();

app.listen(3000, function() {
  console.log('서버 실행 중...');
});

app.get('/search/:kname', function (req, res) {
  var sql = 'select kname from Kmenu';
  mysqlDB.query(sql, function(err, rows) {
    var kname = req.params.kname;
    if(kname) {
      var sql = "select * from Kmenu where kname=?";
      mysqlDB.query(sql, [kname], function(err, rows) {
        if(err) {
          console.log(err);
          res.sendStatus(400);
        } else if (rows.length > 0) {
          res.json(rows[0]);
        } else {
          res.send('데이터 없음');
        }
      });
    } else {
      res.sendStatus(400);
    }
  });
});

app.get('/random', function(req, res) {
  var sql = 'select * from Kmenu order by rand() limit 1';
  mysqlDB.query(sql, function(err, rows) {
    if(err) {
      console.log(err);
    } else {
      res.json(rows[0]);
    }
  });
});
