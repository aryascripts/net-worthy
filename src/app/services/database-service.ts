import low, { LowdbAsync } from "lowdb";
import { Schema } from "../../data/schema";
const LocalStorage = require("lowdb/adapters/LocalStorage");

class _DatabaseService {
  db: LowdbAsync<Schema>;

  async create(name: string, password?: string) {
    const adapter = new LocalStorage(name);
    const db = await low(adapter);

    db.defaults({
      version: 1,
      accounts: [],
      records: [],
    }).write();

    this.db = db;
  }
}

export const Database = new _DatabaseService();
