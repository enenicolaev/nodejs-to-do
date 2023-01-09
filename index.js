const path = require('path')

const express = require('express')

const todoRoutes = require('./routes/todo/index.js')

const PORT = 3000

const app = express()

const publicRoute = path.join(__dirname, 'public')

app.use(express.static(publicRoute))

app.use((req, res, next) => {
  res.sendFile(path.join(publicRoute, '/index.html'))
})

app.use('/api/todo', ...todoRoutes)

app.listen(PORT)