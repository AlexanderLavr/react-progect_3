import { put, takeEvery } from "redux-saga/effects";


export function* doLogin(): IterableIterator<any>{
    yield takeEvery('DO_LOGIN', function*(logState){
        try{
            yield put({type: 'nl'})
        }catch(error){}
    })
    return '2'
}
 // case 'ERROR_VALIDE':
      //       let obj = action.errorObj
      //       newState.errorFirstname = obj.errorFirstname;
      //       newState.errorSecondname = obj.errorSecondname;
      //       newState.errorEmail = obj.errorEmail;
      //       newState.errorPassword = obj.errorPassword;
      //   return {
      //     newState
      //   }