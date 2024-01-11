const joi = require('@hapi/joi')
// 具体方法：
// .string()：数据必须为字符串类型
// .number()：数据必须为数字类型
// .integer()：数据必须为整数类型
// .alphanum()：数据只能包含[a-zA-Z0-9]的字符
// .max(number|string)：number：最大长度 | string：最大日期
// .min(number|string)：number：最小长度 | string：最小日期
// .required()：数据为必填项，不能为null或undefined
// .pattern(正则表达式)：以正则表达式的形式验证数据
// .regex(正则表达式)：定义字段必须匹配正则规则。
// .email()：验证邮箱
// .joi.ref(key:string)：引言同辈的键值，就是拿到value
// .not(values:any[])：当前属性的值不能同参数值相同
// .valid(...values:any[])：当前属性的值必须于参数值相同
// .dataUri()：image/png;base64,VE9PTUFOWVNFQ1JFVFM=
// .allow(...values:any[])：该字段允许为指定参数的值
// .default(any[])：设置该字段的默认值，值可以为string、number、boolean……等

// 分别定义 标题、分类Id、内容、发布状态的校验规则
const title = joi.string().required()
const cate_id = joi.number().integer().min(1).required()
const content = joi.string().required().allow('')
const state = joi.string().valid('已发布', '草稿').required()

// 验证规则对象 - 发布文章
exports.add_article_schema = {
  body: {
    title,
    cate_id,
    content,
    state,
  },
}
