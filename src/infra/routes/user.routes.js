const router = require("./services/router")();

router.post('/users', async (req, res) => {

    console.log(req.body);

    try {
        res.status(201).send()
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = {
    user: router
}
