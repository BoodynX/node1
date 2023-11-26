import esMain from 'es-main'
import Repo from '../src/infra/repos/abs/repo'

class DbInitCommand extends Repo {
    async run() {
        const users = this.collection('users')

        const result = await users.createIndex({ email: 1 }, { unique: true })

        console.log(`Index created: ${result}`)
    }
}

// Run only when called as a script
if (esMain(import.meta)) {
    await new DbInitCommand().run()
    process.exit(1)
}

export default DbInitCommand
