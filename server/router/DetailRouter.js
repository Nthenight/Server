// 首页数据相关路由配置
const connect = require('../../static/js/Connect');
const serve = require('../app');


const express = require('express');
// 导入集合

const Good = connect.homegoods;
// 实现服务器路由
const app = serve.app;
const detail = express.Router(); 
// 创建多级路由
app.use('/index/detail', detail);

detail.get('/', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
//  获取id
  const valueId = req.query.id;
  const data = await Good.find({ _id: valueId }).populate('param');
  res.send(data)
})


module.exports={
app
}