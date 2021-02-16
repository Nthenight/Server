// 数据库连接的封装
const mongoose = require('mongoose');
function mongodblink(databasepath){
  return mongoose.connect(databasepath,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('数据库连接成功!') })
  .catch(error => { console.log(error) });
}

exports.mongodblink = mongodblink;
