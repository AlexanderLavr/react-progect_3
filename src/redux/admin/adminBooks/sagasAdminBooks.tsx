import { put, takeEvery, call, all, race, delay} from "redux-saga/effects";

 



export function* doAdminBooks(): IterableIterator<any>{

    yield takeEvery('DO_SAVE_BOOK', function*(boockState:any){
        try{
            yield call(() => {
                return fetch('http://localhost:3000/books', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(boockState.boockState)//return new Edit User Object
                })
            })
            const data = yield call(() => {//=> query to J-serv
                return fetch('http://localhost:3000/books')
                        .then(res => res.json())
                }
            )
            yield put({type: 'APDATE_ARRAY_BOOKS', data})
        }catch(error){}
    })

    // yield takeEvery('DO_DELETE_USER', function*(id:any){//delete users
        
    //     try{
    //         yield call(() => {//=> query to J-serv => add User
    //             fetch(`http://localhost:3000/users/${id.id}`, {
    //                 method: 'DELETE'
    //             })
    //         })
            
    //         const data = yield call(() => {//=> query to J-serv
    //             return fetch('http://localhost:3000/users')
    //                     .then(res => res.json())
    //             }
    //         )
    //         yield put({type: 'NEW_ADMIN_ARRAY', data})
    //     }catch(error){}
    // })

    // yield takeEvery('DO_EDIT_USER', function*(id:any){//delete users
    //     try{
    //         const data = yield call(() => {//=> query to J-serv
    //             return fetch(`http://localhost:3000/users/${id.id}`)
    //                     .then(res => res.json())
    //             }
    //         );
    //         yield put({type: 'EDIT_USER_SERVER', data})
    //     }catch(error){}
    // })


    // yield takeEvery('DO_SAVE_EDIT_USER', function*(data:any){//sava edit users
    //     let idEditUser = data.data.id;
    //     try{
    //         if(validSaveAdmin(data) === 4){

    //             const serverData = yield call(() => {//=> query to J-serv
    //                 return fetch(`http://localhost:3000/users/${idEditUser}`)
    //                         .then(res => res.json())
    //                 }
    //             );
              
    //             let newEditUser = parseEditUser(serverData, data)

    //             yield call(() => {//=> query to J-serv => add User
    //                 return fetch(`http://localhost:3000/users/${idEditUser}`, {
    //                     method: 'PUT',
    //                     headers: {
    //                         'Accept': 'application/json',
    //                         'Content-Type': 'application/json'
    //                     },
    //                     body: JSON.stringify(newEditUser)//return new Edit User Object
    //                 })
    //             })
    //             const updateUserArray = yield call(() => {//=> query to J-serv
    //                 return fetch('http://localhost:3000/users')
    //                         .then(res => res.json())
    //                 }
    //             );
    //             yield put({type: 'UPDATE_USER', updateUserArray, newEditUser})
               
    //         }else{
    //             alert("Error_valid")
    //         }
        
    //     }catch(error){}
    // })
}