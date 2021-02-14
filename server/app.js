// 创建服务器架构
const express = require('express');
const app = express();
app.listen(2000);
console.log('服务器启动成功')

module.exports = {
  app
}