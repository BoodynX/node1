const router = require("./router")()

router.get('/', async (req, res) => {

    return res.send('Hello Response')
})

module.exports = router