// 建立首页轮播图数据库的规则
// 导入数据库的连接
const mongo = require('../../../server/mongodblink/MongoDBLink');
const mongoose = require('mongoose');
const mongodblink = mongo.mongodblink;
// 创建数据库
const link = 'mongodb://localhost/homedata'
mongodblink(link);
// 创建数据库规则
const SlideSchema = new mongoose.Schema({
  url: String
});
const RecommendSchema = new mongoose.Schema({
  image: String,
  title: String
});
// 使用规则
const Slide = mongoose.model('Slide', SlideSchema);
const Recommend = mongoose.model('Recommend', RecommendSchema);

module.exports = {
  Slide,
  Recommend
}