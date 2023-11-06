const request = require('supertest')
const app = require('../../src/app')

test('first test', async () => {
    await request(app).get('/').expect(200)
} )

