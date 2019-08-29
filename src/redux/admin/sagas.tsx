import { put, takeEvery, call} from "redux-saga/effects";
// import {parceJsonFile} from "../../actionsComponents/actTableUsers";
 



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
    yield takeEvery('DO_DELETE', function*(id:any){
        try{
            yield call(() => {//=> query to J-serv => add User
                fetch(`http://localhost:3000/users/${id.id}`, {
                    method: 'DELETE'
                })
            })
            const data = yield call(() => {//=> query to J-serv
                return fetch('http://localhost:3000/users')
                        .then(res => res.json())
                }
            );
            yield put({type: 'ADMIN_ARRAY', data})
        }catch(error){}
    })
}