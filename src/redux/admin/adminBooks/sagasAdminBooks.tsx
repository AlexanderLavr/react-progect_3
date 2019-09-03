import { put, takeEvery, call, all, race, delay} from "redux-saga/effects";
// import request from './requestBook';
import { parseEditBook } from '../../../actionsComponents/actAdminModalAddBooks';
 



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




    yield takeEvery('DO_DELETE_BOOKS', function*(arrDelBooks:any){
    try{
        arrDelBooks.deleteArrayBooks.forEach((element:number) => {
            fetch(`http://localhost:3000/books/${element}`, {
                method: 'DELETE'
            })
        })
        
        yield delay(2000); //delay
    
        const newArrBooks = yield call(() => {//=> query to J-serv
            return fetch('http://localhost:3000/books')
                    .then(res => res.json())
            }
        )
           yield put({type: 'NEW_BOOKS_ARR', newArrBooks})
        }catch(error){}
    })



    yield takeEvery('DO_EDIT_BOOK', function*(id:any){
        try{
            const editBook = yield call(() => {
                return fetch(`http://localhost:3000/books/${id.id}`)
                        .then(res => res.json())
                }
            );
            yield put({type: 'CHECK_EDIT_BOOK', editBook, id})
        }catch(error){}
    })


    yield takeEvery('DO_SAVE_EDIT_BOOK', function*(editBook:any){
        
        try{
            const oldBook = yield call(() => {
                return fetch(`http://localhost:3000/books/${editBook.boockState.idBooks}`)
                        .then(res => res.json())
                }
            );

            let updateBook = parseEditBook(editBook, oldBook)//////////////////////незаконченна!!!!!!
                debugger;
            yield call(() => {
                return fetch('http://localhost:3000/books', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updateBook)//return new Edit User Object
                })
            })
            
            yield put({type: 'CHECK_EDIT_BO'})
        }catch(error){}
    })

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