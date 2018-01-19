var express = require('express');
var router = express.Router();
var UserModel = require("../model/User");
var GoodsModel = require("../model/goods");
var multiparty = require("multiparty");
/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//登录
router.get('/admin', function(req, res, next) {
  res.render('admin', {});
});

//商品主页
router.get('/shopList', function(req, res, next) {
  res.render('shopList', {});
});


//添加商品
router.get('/add_goods', function(req, res, next) {
	
  res.render('add_goods', {});
});

//添加商品信息
router.post('/api/addGoods', function(req, res, next) {
	var form = new multiparty.Form({
		uploadDir: "public/images"
	});
	var result = {
		code: 1,
		message: "商品信息添加成功!"
	};
	form.parse(req, function(err, body, files){
		if(err) {
			console.log(err);
		}
		//console.log(body);
		var goods_num = body.goods_num[0];
		var name = body.name[0];
		var huohao = body.huohao[0];
		var price = body.price[0];
		var imgPath = files["pics"][0].path.replace("public\\", "");
		var gm = new GoodsModel();
		gm.goods_num = goods_num;
		gm.name = name;
		gm.huohao= huohao;
		gm.price = price;
		gm.imgPath = imgPath;
		gm.save(function(err){
			if(err) {
				result.code = -99;
				result.message = "商品信息保存失败";
			}
			res.json(result);
		})
	})
});


//商品显示分页
router.get('/data', function(req, res, next) {
	var condition = req.query.condition;
	//分为多少页
	var pageNO = req.query.pageNO || 1;
	pageNO = parseInt(pageNO);
	//每页显示多少
	var perPageCnt = req.query.perPageCnt || 5;
	perPageCnt = parseInt(perPageCnt);

	//GoodsModel.count查询数据总个数,模糊查询
	GoodsModel.count(function(err, count){
		//console.log("数量:" + count);
		var query = GoodsModel.find()
		.skip((pageNO-1)*perPageCnt).limit(perPageCnt);
		//查询
		query.exec(function(err, docs){
			console.log(err, docs);
			res.render('data', {
				docs:docs,
				//数据总量
				total:count,
				//分为几页
				recodes:pageNO,
				//每页显示数量
				evePage:perPageCnt
			});
		});
	})
});




router.post("/api/login_ajax",function(req, res, next){
	var username = req.body.username;
	var pwd = req.body.pwd;
	var result = {
		codeStaus :1,
		message: "登录成功！"
	};
	UserModel.find({username:username,pwd:pwd},function(err,docs){
		console.log(docs);
		if(docs.length == 0){
			result.codeStaus = -101;
			result.message = "您的账号或密码有误，请重新登录！";
		}else{
			req.session.username = username;
		}
		res.json(result);
	})
})


module.exports = router;
