import { ipcMain } from "electron/main";

export enum Events {
  CHECK_DB = "check-db",
  CREATE_DB = "create-db",
}

const EventListeners = {};
