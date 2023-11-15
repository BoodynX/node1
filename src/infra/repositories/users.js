const { MongoClient } = require("mongodb")

const url = 'mongodb://127.0.0.1:27017' // process.env.MONGODB_URL
const client = new MongoClient(url)

async function getUser() {

    if (!client) {
        console.log('No client')
        console.log(client)
        return
    }

    try {

        const db = client.db('node1')

        let collection = db.collection('users')

        collection.insertOne({ name: 'Tomek', awesome: true })

        let query = { name: 'Tomek' }

        let res = await collection.findOne(query)

        console.log(res)

    } catch (err) {

        console.log(err)
    } finally {

        client.close()
    }
}

getUser()