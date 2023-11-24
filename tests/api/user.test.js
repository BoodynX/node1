const request = require('supertest')
const app = require('../../src/app')

test('store user', async () => {
    const response = await request(app).post('/users').send({
        name: 'Tom',
        email: 'tom@dot.com',
        password: 'toms-password'
    }).expect(201)
} )

