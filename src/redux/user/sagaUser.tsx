import { put, takeEvery, call, all, race, delay} from 'redux-saga/effects';
import { getMatch, matchIs, countTotalBooks } from '../../actionsComponents/actUserHome';
 
interface idTypes{
    id:number,
    type:string
}
interface Book{
    amount: string,
    choosePhoto: string,
    description: string,
    id: number,
    price: string,
    title: string,
    totalCount?: number,
}
export function* doUser():IterableIterator<any>{
    yield takeEvery('DO_USER', function*(){//start array books
        //------------------------------defoult count books in cart
        let selectBooksArr:any = JSON.parse(localStorage.getItem("selectBoock") || "[]");
        let countBooksInCart:number = countTotalBooks(selectBooksArr);
        yield put({type: 'START_ADD_BOOK_TO_CART', countBooksInCart})
        //------------------------------defoult count books in cart

        const dataBooks = yield call(() => {//default array books in page uder
            return fetch('http://localhost:3000/books')
                    .then(res => res.json())
            }
        );
        yield put({type: 'ARRAY_BOOKS', dataBooks})//default array books in page uder
    })

    yield takeEvery('SELECT_BOOK', function*(id:idTypes){// select book for watch more details
        try{
            const selectBook = yield call(() => {
                return fetch(`http://localhost:3000/books/${id.id}`)
                        .then(res => res.json())
                }
            )
            yield put({type: 'CHOOSED_BOOK', selectBook})// select book for watch more details
        }catch(error){}
    })

    yield takeEvery('ADD_BOOK', function*(id:idTypes){//add books to cart in page USER
        let selectBooksArr = JSON.parse(localStorage.getItem("selectBoock") || "[]"); 
        if(!getMatch(selectBooksArr, id.id)){//check in match books
            const data:Book = yield call(() => {
                return fetch(`http://localhost:3000/books/${id.id}`)
                        .then(res => res.json())
                }
            );
            data.totalCount = 1;//add new state to book object
            selectBooksArr.push(data)//if not match=> add to array books
            localStorage.setItem('selectBoock', JSON.stringify(selectBooksArr))
            yield put({type: 'ADD_BOOK_TO_CART'})//++number in img cart
        }else{
            matchIs(selectBooksArr, id.id)//if isMatch => totalcount++
            yield put({type: 'ADD_BOOK_TO_CART'})
        } 
    })
}