import { put, takeEvery } from "redux-saga/effects";


export function* doLogin(): IterableIterator<any>{
    yield takeEvery('SUCCSSES', function*(){
        return '1'
    })
    return '2'
}
