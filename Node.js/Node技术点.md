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
  