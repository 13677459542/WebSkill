const express = require('express')
const app = express()

// 在这里，调用 express.static() 方法，快速的对外提供静态资源
// 注意:Express在指定的静态目录中查找文件，并对外提供资源的访问路径因此，存放静态文件的目录名不会出现在 URL 中。
// 如果同时对外提供多个静态资源，那么按照先后顺序查找。如果在前面的找不到指定文件再往下按顺序查找。

app.use('/files', express.static('./files'))  //如果希望在托管的静态资源访问路径之前，挂载路径前缀.可以在第一个参数添加参数  '/路径前缀'  可以不是文件夹名称。加完后访问文件必须在前面加上路径前缀
app.use(express.static('../html代码拆分时钟案例/clock'))

app.listen(8080, () => {
  console.log('express server running at http://127.0.0.1:8080')
})
