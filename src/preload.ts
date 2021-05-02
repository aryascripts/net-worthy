import { Database } from "./services/data-service";
const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("Database", Database);
