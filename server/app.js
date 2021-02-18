// 创建服务器架构
const express = require('express');
const app = express();
app.listen(3000);
console.log('服务器启动成功!端口号是：3000')

module.exports = {
  app
}