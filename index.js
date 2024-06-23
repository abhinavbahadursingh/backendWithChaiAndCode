
require('dotenv').config()

const express = require('express')
const port = 4000
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twiter' , (req,res)=>{
    res.send("okay@hotmail.com")
})
app.get('/login' , (req,res)=>{
    res.send("<h1>login here</h1>")
})
app.get('/youtube' , (req,res)=>{
    res.send("<h2>Chai aur code ke sath backend</h2>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})