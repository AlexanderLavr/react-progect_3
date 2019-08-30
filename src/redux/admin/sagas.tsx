import { put, takeEvery, call} from "redux-saga/effects";
import {validSaveAdmin} from "../../actionsComponents/actModalAdmin";
 



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

    yield takeEvery('DO_DELETE_USER', function*(id:any){//delete users
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

    yield takeEvery('DO_EDIT_USER', function*(id:any){//delete users
        try{
            const data = yield call(() => {//=> query to J-serv
                return fetch(`http://localhost:3000/users/${id.id}`)
                        .then(res => res.json())
                }
            );
            yield put({type: 'EDIT_USER_SERVER', data})
        }catch(error){}
    })


    yield takeEvery('DO_SAVE_EDIT_USER', function*(data:any){//delete users
        try{
            // validSaveAdmin(data)

            console.log(validSaveAdmin(data))
            
            yield put({type: 'EDIT_US', data})
        }catch(error){}
    })
}