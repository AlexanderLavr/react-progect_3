
export default function request( method: string, url: string, body?: object) {
    return (fetch(`http://localhost:3000/${url}`, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).then(response => response.json())
    );
}
// yield arrDelBooks.deleteArrayBooks.forEach((element:number)=>{
//     request('DELETE', `books/${element}`)
// });  
// const newArrBooks = yield call(request, 'GET', 'books')
// yield put({type: 'NEW_BOOKS_ARR', newArrBooks})