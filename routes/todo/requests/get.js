const {Router} = require('express')

const todoModel = require('../../../models/todo')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const todos = await todoModel.findAll()

    res.status(200).json({ todos })
  } catch (error) {
    console.error("CANT GET TODO'S")
    res.status(500).json({message: "SERVER ERROR"})
  }
})

module.exports = router