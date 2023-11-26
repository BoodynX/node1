import { MongoClient } from "mongodb";

class Repo {
  collection(name) {
    this.client = new MongoClient(process.env.MONGODB_URL);
    return this.client.db(process.env.MONGODB_DB).collection(name);
  }
}

export default Repo;
