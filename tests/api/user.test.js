import request from 'supertest'
import app from '../../src/app'

describe('Create and log in a user', () => {
    test('Create user', async () => {
        // const User = require('../../src/infra/models/user.model').default
        // await User.deleteMany()

        const email = 'tom@dot.com'

        //  Create account
        const response = await request(app)
            .post('/users')
            .send({
                name: 'Tom',
                email: email,
                password: 'toms-pass',
            })
            .expect(201)

        // Attempt to create another with the same email
        await request(app)
            .post('/users')
            .send({
                name: 'Tom2',
                email: email,
                password: 'toms-pass2',
            })
            .expect(400)

        // await request(app).post('/users/login').send({
        //     email: 'tom@dot.com',
        //     password: 'toms-pass'
        // }).expect(200)
    })
})
