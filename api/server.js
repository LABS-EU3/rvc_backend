require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const recipeRoute = require('../rest-api/recipe/route/recipe-route')
const userRoute = require('../rest-api/user/route/user-route')

const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())
server.use('/recipe', recipeRoute)
server.use('/user', userRoute)


server.get('/', (req, res) => {
    res.json('just cook it')
})

module.exports = server