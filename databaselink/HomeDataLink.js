// 建立首页轮播图数据库的规则
// 导入数据库的连接
const mongo = require('../server/mongodblink/MongoDBLink');
const mongoose = require('mongoose');
const mongodblink = mongo.mongodblink;
// 创建数据库
const link = 'mongodb://localhost/shopdata'
mongodblink(link);
// 创建数据库规则

// 轮播图规则
const SlideSchema = new mongoose.Schema({
  url: String,
  link:String
});
// 推荐栏规则
const RecommendSchema = new mongoose.Schema({
  img: String,
  title:{
    type: String,
    minlength: 2,
    trim: true
  },
  link: String
});
// 商品规则
const GoodSchema = new mongoose.Schema({
  type:String,
  img: String,
  link:String,
  content: {
    type: String,
  },
  price: {
    type:Number
  },
  // 创建商品参数的外键
  param: {
    type: mongoose.SchemaTypes.ObjectId,
    // 要关联的集合名称
    ref:'ItemData'
  },
  comment: {
    type:Array
  }
});
// 创建商品参数数据规则
const ItemDataShame = new mongoose.Schema({
  itemName: String,
  itemNumber: String,
  itemWeight: String,
  itemRAM: String,
  itemType: String,
  itemCPU: String,
  itemIPS: String,
  itemSSD: String,
  itemColor: String,
  itemStore: String,
})
// 使用规则(创建表单)
const Slide = mongoose.model('Slide', SlideSchema);
const Recommend = mongoose.model('Recommend', RecommendSchema);
const Good = mongoose.model('Good', GoodSchema);
const ItemData = mongoose.model('ItemData', ItemDataShame);
// 添加数据


module.exports = {
  Slide,
  Recommend,
  Good,
  ItemData,
}