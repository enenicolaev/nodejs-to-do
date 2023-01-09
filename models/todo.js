const { DataTypes } = require('sequelize')
const sequalize = require('../utils/database')

const todoModel = sequalize.define('Todo', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER
  },
  done: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})

module.exports = todoModel