var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('ua-collector', {
  	title: 'useragent收集器'
  });
});

router.post('/', function(req, res, next) {
  res.render('ua-collector', {
  	title: 'useragent收集器'
  });
});

router.post('/records', function(req, res, next){
	res.json({
		success: true,
		code: 200,
		msg: '操作成功'
	});
});

module.exports = router;