import request from 'supertest'
import app from 'src/app'

describe('Create and log in a user', () => {
    test('Create user', async () => {
        // const User = require('../../src/infra/models/user.model').default
        // await User.deleteMany()

        const response = await request(app)
            .post('/users')
            .send({
                name: 'Tom',
                email: 'tom@dot.com',
                password: 'toms-pass',
            })
            .expect(201)

        // await request(app).post('/users/login').send({
        //     email: 'tom@dot.com',
        //     password: 'toms-pass'
        // }).expect(200)
    })
})
