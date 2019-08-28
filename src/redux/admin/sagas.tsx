import { put, takeEvery, call} from "redux-saga/effects";


export function* doAdmin(): IterableIterator<any>{
    yield takeEvery('DO_ADMIN', function*(){
        try{
            const data = yield call(() => {//=> query to J-serv
                return fetch('http://localhost:3000/users')
                        .then(res => res.json())
                }
            );
            yield put({type: 'ADMIN_ARRAY', data})
        }catch(error){}
    })
}