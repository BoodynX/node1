const router = require("./router")()

router.get('/', async (req, res) => {

    return res.send({message: 'Hello Response'})
})

module.exports = router