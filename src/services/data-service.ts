import { createRxDatabase, RxDatabase } from "rxdb";

let db: RxDatabase;

type CreateDatabase = (data: {
  name: string;
  password: string;
}) => Promise<RxDatabase>;

const createDb: CreateDatabase = async ({ name, password }) => {
  db = await createRxDatabase({
    name: "net-worthy", // <- name
    adapter: "idb", // <- storage-adapter
    password: "myPassword", // <- password (optional)
    multiInstance: true, // <- multiInstance (optional, default: true)
    eventReduce: false, // <- eventReduce (optional, default: true)
  });
  return db;
};

export const Database = {
  create: createDb,
  get: db,
};
