var express = require('express');
var router = express.Router();
var dbPool = require('../db.js');

router.all('/add', function(req, res, next) { // 首页，支持post
  res.render('ua-collector/add', {
    title: 'useragent收集器'
  });
});

router.all('/list', function(req, res, next) { // 结果页，支持post
  var sql = 'select * from `records`';
  dbPool.getConnection(function(err, connection){
    var query = connection.query(sql, function(err, rows, fields){
      if(!err){
        res.render('ua-collector/list', {
          rows: rows
        });
      }else{
        res.render('error', {
          message: '页面错误',
          error: err
        });
      }

      connection.release();
    });
  });
});

router.post('/records', function(req, res, next){ // post --> /ua-collector/records 采集信息
  var post = req.body;
  var sql = 'INSERT INTO `records` set ?';

  dbPool.getConnection(function(err, connection){
    var query = connection.query(sql, post, function(err, rows, fields){
      if(!err){
        res.json({
          success: true,
          code: 200,
          msg: '执行成功'
        })
      }else{
        res.json({
          success: false,
          code: 500,
          msg: '执行失败'
        });
      }

      connection.release();
    });
  });
});

module.exports = router;