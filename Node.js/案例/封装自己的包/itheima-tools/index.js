 // 这是包的入口文件

const date = require('./src/dateFormat')
const escape = require('./src/htmlEscape')

// Object.assign(require('./src/dateFormat'),require('./src/htmlEscape'))

// 向外暴露需要的成员。...是展开运算符，把对象的每个属性展开了赋给exports
module.exports = {
  ...date,   
  ...escape
}
