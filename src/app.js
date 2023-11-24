const express = require('express')
const { root } = require('./infra/routes/root.routes')
const { user } = require('./infra/routes/user.routes')


const app = express()

// EXPRESS CONFIG

// auto parsing json body requests to objects
app.use(express.json())

// Adding Routes
app.use(root)
app.use(user)

module.exports = app