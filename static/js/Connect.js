// 导入home页面相关连接
const homedata = require('../../databaselink/HomeDataLink')
const homeslide = homedata.Slide;
const homerecommend = homedata.Recommend;
const homegoods = homedata.Good;
const homeitemdata = homedata.ItemData;


module.exports = {
  homeslide,
  homerecommend,
  homegoods,
  homeitemdata
}