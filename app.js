const express = require('express')
const app = express()
const port = 3000
const engine = require('express-handlebars').engine

app.use(express.static('public'))
app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

// Function

function passwordGenerate(passLength, lowerChecked, upperChecked, numberChecked, symbolChecked, excludeCharacters) {
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const uppercaseLetters = lowercaseLetters.toUpperCase()
  const symbols = "()[]{}<>+-*/?,.:;\"'_\\|~`!@#$%^&="
  const numbers = '1234567890'

  const options = {
    length: passLength,
    lower: lowerChecked,
    upper: upperChecked,
    number: numberChecked,
    symbol: symbolChecked,
    excludeCharacters: excludeCharacters
  }

  let collections = []

  if (options.lower === "on") {
    collections = collections.concat(lowercaseLetters.split(""))
  }

  if (options.upper === "on") {
    collections = collections.concat(uppercaseLetters.split(""))
  }

  if (options.number === "on") {
    collections = collections.concat(numbers.split(""))
  }

  if (options.symbol === "on") {
    collections = collections.concat(symbols.split(""))
  }

  if (options.excludeCharacters) {
    collections = collections.filter(character => !options.excludeCharacters.includes(character))
  }

  console.log('collections: ', collections)

  function sample(collections) {
    let randomIndex = Math.floor(Math.random() * collections.length)
    let samplePassword = collections[randomIndex]
    return samplePassword
  }
  let password = ''
  if (collections.length !== 0) {
    for (let i = 1; i <= options.length; i++) {
      password += sample(collections)
    }
    return password
  } else {
    return "There is no valid characters in your selection."
  }
 
}

// Router


app.get('/', (req, res)=>{
  let passwordLength = req.query.passwordLength
  let lowerChecked = req.query.lowercase
  let upperChecked = req.query.uppercase
  let numberChecked = req.query.number
  let symbolChecked = req.query.symbol
  let excludeCharacters = req.query.excludeCharacters
  let password = passwordGenerate(passwordLength, lowerChecked, upperChecked, numberChecked, symbolChecked, excludeCharacters)
  res.render('index2', {password, passwordLength, lowerChecked, upperChecked, numberChecked, symbolChecked, excludeCharacters}) 
})

app.listen(port, ()=>{
  console.log(`passwordGenerator Server on ${port}`)
})