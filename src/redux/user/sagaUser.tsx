import { put, takeEvery, call, all, race, delay} from "redux-saga/effects";
import {getMatch} from '../../actionsComponents/actUserHome';
 



export function* doUser(): IterableIterator<any>{
    yield takeEvery('DO_USER', function*(){//start array books
        
        //------------------------------defoult count books in cart
        let selectBooksArr:any = JSON.parse(localStorage.getItem("selectBoock") || "[]");
        let countBooksInCart:number = selectBooksArr.length;
        yield put({type: 'START_ADD_BOOK_TO_CART', countBooksInCart})
        //------------------------------defoult count books in cart

        const dataBooks = yield call(() => {
            return fetch('http://localhost:3000/books')
                    .then(res => res.json())
            }
        );
        yield put({type: 'ARRAY_BOOKS', dataBooks})
      
    })

    yield takeEvery('SELECT_BOOK', function*(id:any){
        
        try{
            const selectBook = yield call(() => {
                return fetch(`http://localhost:3000/books/${id.id}`)
                        .then(res => res.json())
                }
            )
            yield put({type: 'CHOOSED_BOOK', selectBook})
        }catch(error){}
    })

    yield takeEvery('ADD_BOOK', function*(id:any){
        let selectBooksArr:any = JSON.parse(localStorage.getItem("selectBoock") || "[]");
        if(!getMatch(selectBooksArr, id.id)){
            const data = yield call(() => {//=> query to J-serv
                return fetch(`http://localhost:3000/books/${id.id}`)
                        .then(res => res.json())
                }
            );
            data.totalCount = 1;
            selectBooksArr.push(data) 
            localStorage.setItem('selectBoock', JSON.stringify(selectBooksArr))
            yield put({type: 'ADD_BOOK_TO_CART'})
        }else{
            alert('Книга уже добавлена в корзину!')
        } 
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
                
    //             yield delay(2000); //delay

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