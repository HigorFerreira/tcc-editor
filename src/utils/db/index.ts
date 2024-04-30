export function openDb(name: string, config: (db: IDBDatabase, event: IDBVersionChangeEvent) => void, version?: number): Promise<IDBDatabase>{
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(name, version);
        request.onerror = event => {
            reject(event);
        }

        request.onupgradeneeded = event => {
            // @ts-ignore
            config(event.target.result, event);
        }

        request.onsuccess = event => {
            // @ts-ignore
            resolve(event.target.result);
        }
    });
}