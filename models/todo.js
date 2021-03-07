const sequelize = require('../utils/database')
const { DataTypes } = require('sequelize')

const todo = sequelize.define('todo', {
  id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, allowNull: false},
  done: {type: DataTypes.BOOLEAN, allowNull: false}
})

module.exports = todo