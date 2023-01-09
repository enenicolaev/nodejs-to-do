const {Router} = require('express')

const todoModel = require('../../../models/todo')

const router = Router()

router.post('/', async (req, res) => {
  try {
    const todo = await todoModel.create({
      title: req.body.title,
      done: false,
    })

    res.status(201).json({todo})
  } catch (error) {
    console.error("CANT SAVE TODO MODEL")
    res.status(500).json({message: "SERVER ERROR"})
  }
})

module.exports = router