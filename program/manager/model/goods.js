var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var Goods = new Schema({
	goods_num	    : Number,
	name			: String,
	huohao          : String,
	price	        : String,
	shangjia	    : String,
	jingpin         : String,
	xinpin          : String,
	rexiao          : String,
	rank            : Number,
	kusave          : Number,
	amount          : Number,
	imgPath         : String,
	create_date : { type: Date, default: Date.now }

});

//公开对象，暴露接口
var GoodsModel = mongoose.model("goods",Goods);
module.exports = GoodsModel;