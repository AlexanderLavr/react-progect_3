import { put, takeEvery, call} from "redux-saga/effects";
import {HeaderProc} from './actions'

export function* doHeader(): IterableIterator<any>{
    // yield put({type: HeaderProc.LOG_OUT})
    yield takeEvery('DO_HEADER', function*(obj:any){
        yield put({type:'HEADER_ADMIN', obj})
        
    })
}
