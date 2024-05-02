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

export function get<R = unknown>(db: IDBDatabase, objectStorage: string, key: IDBValidKey): Promise<R>{
    return new Promise((resolve, reject) => {
        const request = db.transaction(objectStorage)
            .objectStore(objectStorage)
            .get(key)

        request.onerror = evt => reject(evt);
        request.onsuccess = evt => resolve((evt.target as any).result);
    });
}

export function add<T = any, R = unknown>(db: IDBDatabase, objectStorage: string, obj: T): Promise<R> {
    return new Promise((resolve, reject) => {
        const request = db.transaction(objectStorage, "readwrite")
            .objectStore(objectStorage)
            .add(obj)

        request.onerror = evt => reject(evt);
        request.onsuccess = evt => resolve((evt.target as any).result);
    });
}

export function put<T = any, R = unknown>(db: IDBDatabase, objectStorage: string, obj: T): Promise<R> {
    return new Promise((resolve, reject) => {
        const request = db.transaction(objectStorage, "readwrite")
            .objectStore(objectStorage)
            .put(obj)

        request.onerror = evt => reject(evt);
        request.onsuccess = evt => resolve((evt.target as any).result);
    });
}