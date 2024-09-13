const express = require('express')
const app = express()
const port = 3000
const engine = require('express-handlebars').engine

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

app.get('/', (req, res)=>{
  res.render('index')
})

app.listen(port, ()=>{
  console.log(`passwordGenerator Server on ${port}`)
})