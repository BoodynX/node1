const router = require("./services/router")()

router.get('/', async (req, res) => {

    return res.send({message: 'Hello Response'})
})

module.exports = {
    root: router
}