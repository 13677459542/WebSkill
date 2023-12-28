Node.js 是一个基于 Chrome V8引的 JavaScript 运行环境
## 运行环境
1、浏览器是JavaScript的前端运行环境
1、Node.js 是JavaScript 的后端运行环境
1、Node.js 中无法调用 DOM和 BOM等浏览器内置 API

## fs 文件系统模块
fs 模块是 Node.js 官方提供的、用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求.
导入 fs 模块，来操作文件: const fs = require('fs')
# fs.readFile()方法，用来读取指定文件中的内容
    //    调用 fs.readFile() 方法读取文件
    //    参数1：读取文件的存放路径
    //    参数2：读取文件时候采用的编码格式，一般默认指定 utf8  可选参数
    //    参数3：回调函数，拿到读取失败和成功的结果  err  dataStr  
    fs.readFile('./files/11.txt', 'utf8', function(err, dataStr) {
    // 如果读取成功，则 err 的值为 null,如果读取失败，则 err 的值为 错误对象，dataStr 的值为 undefined
    if (err) {
    return console.log('读取文件失败！' + err.message)
    }
    console.log('读取文件成功！' + dataStr)
    })
# fs.writeFile()方法，用来向指定的文件中写入内容
1. 只能用来创建文件，不能用来创建路径。如果新建文件地址有未存在的文件夹，需要先新建。
2. 重复调用fswriteFile()写入同一个文件，新写入的内容会覆盖之前的旧内容
    //    调用 fs.writeFile() 方法，写入文件的内容
    //    参数1：表示文件的存放路径
    //    参数2：表示要写入的内容
    //    参数3: 可选参数，表示以什么格式写入文件内容，默认值是utf8.
    //    参数4：回调函数
    fs.writeFile('./files/3.txt', 'ok123', function(err) {
    // 2.1 如果文件写入成功，则 err 的值等于 null。2.2 如果文件写入失败，则 err 的值等于一个 错误对象
    if (err) {
        return console.log('文件写入失败！' + err.message)
    }
    console.log('文件写入成功！')
    })

# __dirname 文件当前所处的目录
在上面读取和写入的方法的文件路径是以执行路径拼接出绝对路径的，当执行的cd位置发生改变时，拼接出的绝对路径就会出错。
    fs.readFile(__dirname + '/files/1.txt', 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('读取文件失败！' + err.message)
    }
    console.log('读取文件成功！' + dataStr)
    })

## path路径模块
path 模块是 Node.js 官方提供的、用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求。
导入path路径模块：const path = require('path')
# path.join()方法，用来将多个路径片段拼接成一个完整的路径字符串
注意：今后凡是涉及到路径拼接的操作，都要使用 path.join() 方法进行处理。不要直接使用 + 进行字符串的拼接。
    path.join(__dirname + '/files/1.txt')
# path.basename()方法，用来从路径字符串中，将文件名解析出来
const fileNmae=path.basename(文件地址)
# path.extname() 方法，获取路径中的文件扩展名
const fileExtname=path.extname(文件地址)  返回值带.  比如.html
  
## http模块
http 模块是 Node.js 官方提供的、用来创建 web 服务器的模块。通过 http 模块提供的 http.createServer()方法，就能方便的把一台普通的电脑，变成一台Web 服务器，从而对外提供Web 资源服务
# 创建基本服务器
// 1. 导入 http 模块
const http = require('http')
// 2. 创建 web 服务器实例
const server = http.createServer()
// 3. 为服务器实例绑定 request 事件，监听客户端的请求
server.on('request', function (req, res) {
 // 定义一个字符串，包含中文的内容
  const str = `您请求的 URL 地址是 ${req.url}，请求的 method 类型为 ${req.method}`   // req.url 只是ip后面的地址而不是完整地址
  // 调用 res.setHeader() 方法，设置 Content-Type 响应头，解决中文乱码的问题
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // res.end() 将内容响应给客户端
  res.end(str)
})
// 4. 启动服务器
server.listen(8080, function () {  
  console.log('server running at http://127.0.0.1:8080')
})

## 模块化
模块化是指解决一个复杂问题时，自顶向下逐层把系统划分成若干模块的过程。对于整个系统来说，模块是可组合、分解和更换的单元。
# 编程领域中的模块化
编程领域中的模块化，就是遵守固定的规则，把一个大文件拆成独立并互相依赖的多个小模块
1. 提高了代码的复用性
2. 提高了代码的可维护性
3. 可以实现按需加载
# Node.js中的模块分类
Node.js 中根据模块来源的不同，将模块分为了3大类
1. 内置模块(内置模块是由 Nodejs 官方提供的，例如fs、path、http 等)
2. 自定义模块 (用户创建的每个js 文件，都是自定义模块)
3. 第三方模块(由第三方开发出来的模块，并非官方提供的内置模块，也不是用户创建的自定义模块，使用前需要先下载
# 加载模块
使用强大的 require() 方法，可以加载需要的内置模块、用户自定义模块、第三方模块进行使用。使用require()方法加载其它模块时，会执行被加载模块中的代码
// 1.加载内置的 fs 块 const fs = require('fs')
// 2.加载用户的自定义模块 const custom = require(' ./custom.js')  可省略.js后缀名，必须指定./或者../开头的路径标识符
    加载顺序：
    1.按照确切的文件名进行加载
    2.补全.js 扩展名进行加载
    3.补全.json 扩展名进行加载
    4.补全.node 扩展名进行加载
    5.加载失败，终端报错
// 3.加载第三方模块(关于第三方模块的下载和使用，会在后面的课程中进行专门的讲解)const moment = require('moment')
注意：如果把目录作为模块加载，例如：const custom = require(' ./custom')  那么加载顺序如下：
    1.在被加载的目录下查找一个叫做 package.json 的文件，并寻找 main 属性，作为 require 加载的入口
    2.如果目录里没有 packagejson 文件，或者 main 入口不存在或无法解析，则 Node,js 将会试图加载目录下的 index.js 文件.
    3.如果以上两步都失败了，则 Nodejs 会在终端打印错误消息，报告模块的缺失: Error: Cannot find modulexx'
# 模块作用域
和函数作用域类似，在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，叫做模块作用域。
好处：防止了全局变量污染的问题
# 向外共享模块作用域中的成员
1. module 对象
    在每个js 自定义模块中都有一个module 对象，它里面存储了和当前模块有关的信息 
2. module.exports 对象
    在自定义模块中，可以使用 module.exports 对象，将模块内的成员共享出去，供外界使用。
    外界用 require() 方法导入自定义模块时，得到的就是module.exports 所指向的对象。外界使用自定义模块里面的方法和字段可以挂载在exports中
3. exports 对象
    由于module.exports单词写起来比较复杂，为了简化向外共享成员的代码，Node 提供了exports对象。默认情况exports 和 module.exports 指向同一个对象。最终共享的结果，还是以 module.exports 指向的对象准
注意:为了防止混乱，建议不要在同一个模块中同时使用exports和 module.exports
# Nodejs 中的模块化规范
Node.is 遵循了 CommonS 模块化规范，CommonJS 规定了模块的特性和各模块之间如何相互依赖
1. 每个模块内部，module 变量代表当前模块
2. module 变量是一个对象，它的 exports 属性(即 module.exports)是对外的接口.
3. 加载某个模块，其实是加载该模块的 module.exports 属性。require() 方法用于加载模块

## npm与包
# 包
Node.js 中的第三方模块又叫做包。就像电脑和计算机指的是相同的东西，第三方模块和包指的是同一个概念，只不过叫法不同.
由于 Node.js 的内置模块仅提供了一些底层的 API，导致在基于内置模块进行项目开发的时，效率很低。
包是基于内置模块封装出来的，提供了更高级、更方便的 API，极大的提高了开发效率.包和内置模块之间的关系，类似于jQuery 和 浏览器内置 API 之间的关系
# 下载
npm,Inc.这家公司旗的网站: https://www.npmjs.com/，它是全球最大的包共享平台，你可以从这个网站上搜索到任何你需要的包，供我们使用
npm,Inc.公司提供了一个地址为 https://registry.npmjs.org/ 的服务器，来对外共享所有的包，我们可以从这个服务器上下载自己所需要的包。
## Node Package Manager (简称 npm 包管理工具)
这个包管理工具随着 Nodejs 的安装包一起被安装到了用户的电脑上。大家可以在终端中执行 npm -v 命令，来查看自己电脑上所安装的 npm 包管理工具的版本号
# 在项目中执行安装包的命令
如果想在项目中安装指定名称的包，需要运行如下的命令：npm install 包的完整名称 或者 npm i 包的完整名称 可以在后面加上 @版本号 来安装指定版本
# 初次安装
初次装包完成后，在项目文件夹下多一个叫做 node modules 的文件夹和 package-lockjson 的配置文件  
其中: node modules 文件夹用来存放所有已安装到项目中的包。require0 导入第三方包时，就是从这个目录中查找并加载包package-lock;json 配置文件用来记录 node modules 目录下的每一个包的下载信息，例如包的名字、版本号、下载地址等
注意：上述命令只能在英文的目录下成功运行!所以，项目文件夹的名称一定要使用英文命名，不要使用中文，不能出现空格。运行npm install 命令安装包的时候，npm 包管理工具会自动把包的名称和版本号，记录到 package.ison 中
# 一次性安装所有的包
可以运行npm install 命令(或 npm i)一次性安装所有的依赖包:
1. 执行 npm install 命令时,npm 包管理T具会先读取 package.json 中的 dependencies 节点,
2. 读取到记录的所有依赖包名称和版本号之后，npm 包管理工具会把这些包一次性下载到项目中
# 卸载包
可以运行 npm uninstall  包的完整名称  命令，来卸载指定的包。
# devDependencies 节点
如果某些包只在项目开发阶段会用到，在项目上线之后不会用到，则建议把这些包记录到 devDependencies 节点中
与之对应的，如果某些包在开发和项目上线之后都需要用到，则建议把这些包记录到 dependencies 节点中
// 安装指定的包，并记录到 devDependencies 节点中 npm i 包名 -D  // 注意:上述命令是简写形式，等价于下面完整的写法npm install 包名 -save-dev

## 包的分类
# 项目包
那些被安装到项目的 node modules 目录中的包，都是项目包。
项目包又分为两类，分别是:
    开发依赖包(被记录到 devDependencies 节点中的包，只在开发期间会用到)
    核心依赖包(被记录到 dependencies 节点中的包，在开发期间和项目上线之后都会用到)
# 全局包
在执行 npm install 命令时，如果最后面提供了-g 参数，则会把包安装为全局包全局包会被安装到 C:Users\用户目录\AppDataRoaming\npm\node_modules 目录下
    1. 只有工具性质的包，才有全局安装的必要性。因为它们提供了好用的终端命令
    2. 判断某个包是否需要全局安装后才能使用，可以参考官方提供的使用说明即可
# i5ting_toc
i5ting_toc是一个可以把md文档转为html页面的小工具，使用步骤如下
//将 i5ting_toc 安装为全局包
npm install -g i5ting_toc
//用 i5ting_toc，轻松实现 md 转 html 的功能
i5ting_toc -f 要转换的md文件路径(先cd到文件目录中，然后给文件名称) -o
# nodemon
在编写调试 Node.js 项目的时候，如果修改了项目的代码，则需要频繁的手动 close 掉，然后再重新启动，非常繁琐.现在，我们可以使用 nodemon (https://www.npmis.com/package/nodemon) 这个工具，它能够监听项目文件的变动，当代码被修改后，nodemon 会自动帮我们重启项目，极大方便了开发和调试.
npm install -g nodemon  安装为全局工具
安装后，我们可以将 node 命令替换为 nodemon 命令，使用 nodemon app.js 来启动项目。这样做的好处是:代码被修改之后，会被nodemon 监听到，从而实现自动重启项目的效果。

## Exoress
官方给出的概念: Express 是基于 Node.js 平台，快速、开放、极简的 Web 开发框架。通俗的理解: Express 的作用和 Node.js 内置的 http 模块类似，是专门用来创建 Web 服务器的.
Express的本质就是一个npm 上的第三方包，提供了快速创建Web 服务器的便捷方法
使用Node.js 提供的原生 http 模块也可以创建Web服务器。但是http 内置模块用起来很复杂，开发效率低，Express 是基于内置的 http 模块进一步封装出来的，能够极大的提高开发效率.
# 路由模板化
为了方便对路由进行模块化的管理，Express 不建议将路由直接挂载到 app 上，而是推荐将路由抽离为单独的模块。

