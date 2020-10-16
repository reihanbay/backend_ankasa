const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const customerRouter = require('./src/routes/customers')

app.use('/uploads', express.static('uploads'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))

app.use('/customer', customerRouter)

const usersRouter = require('./src/routes/users')
app.use('/users', usersRouter)

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})

app.get('/', (_request, response) => { response.send('Rest-Api Team Pythagoras') })

app.listen(process.env.PORT, () => {
  console.log(`App Listen on Port ${process.env.PORT}!`)
})
