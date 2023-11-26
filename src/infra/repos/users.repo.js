import Repo from "./abs/repo";

class UserRepo extends Repo {
  async save(user) {
    try {
      const users = this.collection("users");
      await users.insertOne(user);
    } catch (e) {
      console.log(e);
    } finally {
      await this.client.close();
    }
  }
}

export default UserRepo;