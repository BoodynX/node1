import { MongoClient } from "mongodb";

class UserRepo {

    collection(name) {
        this.client = new MongoClient(process.env.MONGODB_URL)
        return this.client.db(process.env.MONGODB_DB).collection(name)
    }

    async save(user) {
        try {
            const users = this.collection('users');
            await users.insertOne(user)
          } catch (e) {
            console.log(e);
          } finally {
            await this.client.close();
          }
    }
}


export default UserRepo