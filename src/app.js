const express = require('express')
const root = require('./infra/routes/root')


const app = express()

app.use(root)

module.exports = app