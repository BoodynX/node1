const express = require('express')

const app = express()

const router = express.Router()

router.get('/', async (req, res) => {

    console.log('Hello Request')
    console.log(req);
    
    return res.send('Hello Response')
})

app.use(router)

module.exports = app