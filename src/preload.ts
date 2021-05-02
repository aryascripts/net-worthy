const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("Api", {});
