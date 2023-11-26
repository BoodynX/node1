import getRouter from './services/router'
import UserRepo from '../repos/users.repo'

const router = getRouter()

router.post('/users', async (req, res) => {
    const user = new UserRepo()

    try {
        await user.save(req.body)
        res.status(201).send()
        // TODO handle existing email
    } catch (e) {
        console.log(e)
        res.status(400).send()
    }
})

// router.post('/users/login', async (req, res) => {
//     try {
//         const user = await UserRepo.findByCredentials(req.body.email, req.body.password)
//         // const token = await user.generateAuthToken()
//         // res.send({ user, token})
//         res.send({ user })
//     } catch (e) {
//         await console.log(e);
//         res.status(400).send()
//     }
// })

export const user = router
