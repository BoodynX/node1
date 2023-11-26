import Repo from './abs/repo'

class UserRepo extends Repo {
    async save(user) {
        try {
            const users = this.collection('users')
            await users.insertOne(user)

            return { result: true }
        } catch (e) {
            if (e.code == 11000) {
                return { result: true, msg: 'Email already exists' }
            }
            throw e
        } finally {
            console.log('finally UserRepo!')
            await this.client.close()
        }
    }
}

export default UserRepo
