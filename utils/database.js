const {Sequelize} = require('sequelize')

const {DB_NAME, DB_USER_NAME, DB_USER_PASS} = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER_NAME, DB_USER_PASS, {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize