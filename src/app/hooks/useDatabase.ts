import { useState } from "react";
import { LowdbAsync } from "lowdb";

type CreateDatabase = (data: { name: string; password?: string }) => void;

const Database = (window as any).Database;
export const useDatabase = () => {
  const [db, setDb] = useState<LowdbAsync<any>>();

  const create: CreateDatabase = async ({ name, password }) => {
    const db = await Database.create(name, password);
    setDb(db);
  };

  return { create, db } as const;
};
