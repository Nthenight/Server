// 建立首页轮播图数据库的规则
// 导入数据库的连接
const mongo = require('../server/mongodblink/MongoDBLink');
const mongoose = require('mongoose');
const mongodblink = mongo.mongodblink;
// 创建数据库
const link = 'mongodb://localhost/shopdata'
mongodblink(link);
// 创建数据库规则
const SlideSchema = new mongoose.Schema({
  url: String,
  link:String
});
const RecommendSchema = new mongoose.Schema({
  img: String,
  title:{
    type: String,
    minlength: 2,
    trim: true
  },
  link: String
});
const GoodSchema = new mongoose.Schema({
  type:String,
  img: String,
  link:String,
  content: {
    type: String,
  },
  price: {
    type:Number
  }
});
// 创建外键
const ListShema = new mongoose.Schema({
  pop: {
    type: mongoose.SchemaTypes.ObjectId,
    // 要关联的集合名称
    ref:''
  },
  news: {
    type: mongoose.SchemaTypes.ObjectId,
    ref:''
  },
  sell: {
    type: mongoose.SchemaTypes.ObjectId,
    ref:''
  }
})
// 使用规则
const Slide = mongoose.model('Slide', SlideSchema);
const Recommend = mongoose.model('Recommend', RecommendSchema);
const Good = mongoose.model('Good', GoodSchema);
// 添加数据
// Goods.create({type:'pop',price:123}).then(result=>{console.log(result)})

module.exports = {
  Slide,
  Recommend,
  Good
}