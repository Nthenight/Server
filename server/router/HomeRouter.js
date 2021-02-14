// 首页数据相关路由配置
const connect = require('../../static/js/Connect');
const serve = require('../app');


const express = require('express');
// 导入集合
const Slide = connect.homeslide;
const Recommend = connect.homerecommend;
const Goods = connect.homegoods;
// 实现服务器路由
const app = serve.app;
const home = express.Router(); 
// 创建多级路由
app.use('/index/home', home);

home.get('/', async (req, res) => {
  // 允许跨域请求
  res.setHeader('Access-Control-Allow-Origin', '*');
  // 查询数据
  const homerecommend = await Recommend.find();
  const homeslide = await Slide.find();
  // 将所有搜集的数据整合起来
  const data = {
    homeslide,
    homerecommend
  };
  // 将整合的数据响应给客户端
  res.send(data);
}).get('/list', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const value = req.query.type;
  const n = req.query.page;
  const goodsdata = await Goods.find({ type: value }).skip(10*n).limit(10*n);
  res.send(goodsdata)
})


module.exports={
app
}