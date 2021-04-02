const Database =  require('better-sqlite3');

const _DataStore = () => {
    const db = new Database('./finances', {verbose: console.log });
        
}


export const DataStore = _DataStore();