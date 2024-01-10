const mysql = require('mysql')

const db = mysql.createPool({
  host: '127.0.0.1',
  port:3306,
  user: 'root',
  password: 'li2442',
  database: 'test',
})

module.exports = db
