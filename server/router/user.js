const express = require('express')
const userrouter = express.Router()
userrouter.post('/login', (req, res) => {
  let { username, password } = req.body
  if (username === 'admin' && password === 'admin123') {
    res.send({
      token: 'abc',
      code: 200,
      desc: 'ok'
    })
  } else {
    res.send({
      token: '',
      code: 404,
      desc: 'error'
    })
  }
})
module.exports = userrouter
