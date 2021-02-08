// 首页数据相关路由配置
const connect = require('../../static/js/Connect');
const serve = require('../app');


const Slide = connect.homeslide;
const Recommend = connect.homerecommend;
const app = serve.app;
app.use('/home',async (req, res) => {
  // let data = await (await Slide.find()).toString();
  res.setHeader('Access-Control-Allow-Origin', '*');

  const homerecommend = await Recommend.find();
  const homeslide = await Slide.find();
  
  const data = {
    homeslide,
    homerecommend
  };
  console.log(data);
  res.send(data);
});

module.exports={
app
}