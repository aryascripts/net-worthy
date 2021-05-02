import low, { LowdbAsync } from "lowdb";
import { Schema } from "../data/schema";
const FileSync = require("lowdb/adapters/FileSync");

type CreateDatabase = (data: { name: string }) => Promise<LowdbAsync<Schema>>;
const createDb: CreateDatabase = async ({ name }) => {
  const adapter = new FileSync(`${name}.json`);
  const db = await low(adapter);
  db.defaults({
    version: 1,
    accounts: [],
    records: [],
  }).write();

  return db;
};

export const Database = {
  create: createDb,
};
