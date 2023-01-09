const {Router} = require('express')

const router = Router()

router.use('/', (req, res) => {
  res.json({a: 1})
})

module.exports = router