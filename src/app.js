// require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const { default: helmet } = require('helmet')
const compression = require('compression')
const app = express()


// console.log('process', process.env)

// init middleware
app.use(morgan('dev')) // 5 types: morgan('combined'), common, short, tiny
app.use(helmet())
app.use(compression())

// init db
require('./dbs/init.mongodb')
// init routers
app.use('', require('./routes'))

// handling error
module.exports = app