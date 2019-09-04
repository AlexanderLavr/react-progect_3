import { put, takeEvery, call, all, race, delay} from "redux-saga/effects";
import {validSaveAdmin} from "../../actionsComponents/actAdminModalUsers";
import {parseEditUser} from "../../actionsComponents/actAdminModalUsers";
 



export function* doAdmin(): IterableIterator<any>{

    yield takeEvery('DO_ADMIN', function*(){
        try{
            const data = yield call(() => {//=> query to J-serv
                return fetch('http://localhost:3000/users')
                        .then(res => res.json())
                }
            );
            yield put({type: 'ADMIN_ARRAY', data})
            
            //just download admin home=>download array books
            const dataBooks = yield call(() => {
                return fetch('http://localhost:3000/books')
                        .then(res => res.json())
                }
            );
            yield put({type: 'ARRAY_BOOKS', dataBooks})//dispach to admin BooksReduser
            //just download admin home=>download array books

        }catch(error){}
    })

    yield takeEvery('DO_DELETE_USER', function*(id:any){//delete users
        
        try{
            yield call(() => //=> query to J-serv => add User
                fetch(`http://localhost:3000/users/${id.id}`, {
                    method: 'DELETE'
                })
            )
            
            yield delay(2000); //delay 

            const data = yield call(() => {//=> query to J-serv
                return fetch('http://localhost:3000/users')
                        .then(res => res.json())
                }
            )
            yield put({type: 'NEW_ADMIN_ARRAY', data})
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


    yield takeEvery('DO_SAVE_EDIT_USER', function*(data:any){//sava edit users
        let idEditUser = data.data.id;
        try{
            if(validSaveAdmin(data) === 4){

                const serverData = yield call(() => {//=> query to J-serv
                    return fetch(`http://localhost:3000/users/${idEditUser}`)
                            .then(res => res.json())
                    }
                );
              
                let newEditUser = parseEditUser(serverData, data)

                yield call(() => {//=> query to J-serv => add User
                    return fetch(`http://localhost:3000/users/${idEditUser}`, {
                        method: 'PUT',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newEditUser)//return new Edit User Object
                    })
                })
                
                yield delay(2000); //delay

                const updateUserArray = yield call(() => {//=> query to J-serv
                    return fetch('http://localhost:3000/users')
                            .then(res => res.json())
                    }
                );
                yield put({type: 'UPDATE_USER', updateUserArray, newEditUser})
               
            }else{
                alert("Error_valid")
            }
        
        }catch(error){}
    })
}