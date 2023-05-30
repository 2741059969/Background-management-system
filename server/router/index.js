const express = require('express')
const router = express.Router()
router.get('/test', (req, res) => {
  res.send('测试成功')
})
module.exports = router
