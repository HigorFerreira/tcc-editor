/**
 * @template - O Object to assign
 * @template - S Object result
 * @template - E Object error
 */
interface Opts<O = any, S = any, E = any>{
    mode?: IDBTransactionMode
    objName: string
    obj: O
    onError?: (err: E) => void
    onSuccess?: (result: S) => void
    onFinally?: () => void
}

export function add<O = any, S = any, E = any>(
    {
        opts,
        db,
    }: {
        db?: IDBDatabase, opts: Opts<O, S, E >,
    }
){

    const {
        objName,
        obj,
        mode,
        onError,
        onFinally,
        onSuccess,
    } = opts;

    const req = db?.transaction(objName, mode)
            .objectStore(objName)
            .add(obj);

    if(req){
        req.onerror = evt => {
            onError && onError((evt.target as any).error);
            onFinally && onFinally();
        }

        req.onsuccess = evt => {
            onSuccess && onSuccess((evt.target as any).result);
            onFinally && onFinally();
        }
    }
}

export function put<O = any, S = any, E = any>(
    {
        opts,
        db,
    }: {
        db?: IDBDatabase, opts: Opts<O, S, E >,
    }
){

    const {
        objName,
        obj,
        mode,
        onError,
        onFinally,
        onSuccess,
    } = opts;

    const req = db?.transaction(objName, mode)
            .objectStore(objName)
            .put(obj)

    if(req){
        req.onerror = evt => {
            onError && onError((evt.target as any).error);
            onFinally && onFinally();
        }

        req.onsuccess = evt => {
            onSuccess && onSuccess((evt.target as any).result);
            onFinally && onFinally();
        }
    }
}

export function get<O = any, S = any, E = any>(
    {
        opts,
        db,
    }: {
        db?: IDBDatabase,
        opts: Omit<
            Opts<O, S, E >,
            'obj' | 'mode'
        > & {
            key: IDBValidKey | IDBKeyRange
        },
    }
){
    const {
        objName,
        key,
        onError,
        onFinally,
        onSuccess,
    } = opts;

    const req = db?.transaction(objName)
            .objectStore(objName)
            .get(key)

    if(req){
        req.onerror = evt => {
            onError && onError((evt.target as any).error);
            onFinally && onFinally();
        }

        req.onsuccess = evt => {
            onSuccess && onSuccess((evt.target as any).result);
            onFinally && onFinally();
        }
    }
}

export function del<O = any, S = any, E = any>(
    {
        opts,
        db,
    }: {
        db?: IDBDatabase,
        opts: Omit<
            Opts<O, S, E >,
            'obj'
        > & {
            key: IDBValidKey | IDBKeyRange
        },
    }
){

    const {
        objName,
        key,
        mode,
        onError,
        onFinally,
        onSuccess,
    } = opts;

    const req = db?.transaction(objName, mode)
            .objectStore(objName)
            .delete(key)

    if(req){
        req.onerror = evt => {
            onError && onError((evt.target as any).error);
            onFinally && onFinally();
        }

        req.onsuccess = evt => {
            onSuccess && onSuccess((evt.target as any).result);
            onFinally && onFinally();
        }
    }
}