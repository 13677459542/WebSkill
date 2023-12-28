// 1. 导入 express
const express = require('express')
// 2. 创建 web 服务器
const app = express()

// 1. 导入路由模块
const router = require('./router')
// 2. 注册路由模块
app.use('/api', router)   //第一个参数加上 '/api' ，为路由模块加上统一的前缀

// 注意： app.use() 函数的作用，就是来注册全局中间件

// 3. 启动 web 服务器
app.listen(8080, () => {
  console.log('express server running at http://127.0.0.1:8080')
})
