import { put, takeEvery, call, all, race, delay} from "redux-saga/effects";
// import request from './requestBook';
import { parseEditBook } from '../../../actionsComponents/actAdminModalBooks';
 



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
                return fetch(`http://localhost:3000/books/${editBook.id}`)
                        .then(res => res.json())
                }
            );

            let updateBook = parseEditBook(editBook, oldBook)
             
            yield call(() => {
                return fetch(`http://localhost:3000/books/${editBook.id}`, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updateBook)//return new Edit BOOK Object
                })
            })

            yield delay(1000)

            const newArrBooks = yield call(() => {
                return fetch('http://localhost:3000/books')
                        .then(res => res.json())
                }
            )
            yield put({type: 'NEW_BOOKS_ARR', newArrBooks})
            yield put({type: 'SAVE_EDIT_BOOK'})
            yield delay(500)
            yield put({type: 'CLOSE_MODAL_ADD_BOOKS'})
        }catch(error){}
    })
}