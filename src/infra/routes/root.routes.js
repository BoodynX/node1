import getRouter from './services/router'

const router = getRouter()

router.get('/', async (req, res) => {

    return res.send({message: 'Hello Response'})
})

export const root = router