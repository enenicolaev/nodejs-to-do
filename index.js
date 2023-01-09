require('dotenv').config()

const path = require('path')

const express = require('express')

const todoRoutes = require('./routes/todo/index')
const sequelize = require('./utils/database')

const PORT = 3000

const app = express()

const publicRoute = path.join(__dirname, 'public')

app.use(express.static(publicRoute))
app.use(express.json())

app.use('/api/todo', ...todoRoutes)

app.use('', (req, res, next) => {
  res.sendFile(path.join(publicRoute, '/index.html'))
})

const startServer = async () => {
  try {
    await sequelize.sync({force: true});
    app.listen(PORT)
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startServer()