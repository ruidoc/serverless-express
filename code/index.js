import express from 'express'

var app = express()

app.get('*', (req, res) => {
  res.json({
    code: 200,
    message: '欢迎使用云函数',
  })
})

app
  .listen(9000, () => {
    console.log('start success.')
  })
  .on('error', e => {
    console.error(e.code, e.message)
  })
