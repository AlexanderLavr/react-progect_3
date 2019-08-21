import { call, put, takeEvery } from "redux-saga/effects";



export function* doRegistration(): IterableIterator<any>{
    yield takeEvery(`ADD_OBJ`, function*(action: any) {
        try {
            //1st step
          
            //2nd step
            yield put({type: 'ADD_OBJ', obj: action});
        } catch(error) {
            yield put({type: 'FETCH_FAILED', error});
        }
    })
        // yield takeEvery(`ADD_OBJ`, function*(action: any) {
        //     try {
        //       // if (needDelay) {
        //       //   yield call(delay, 500);
        //       // }
        
        //       //const docs = yield call(Api.fetchData, url);
        //       const {
        //         data: { email, password }
        //       } = action;
        
        //       console.log(email + password);
        
        //       yield put({
        //         type: `ADD_OBJ`,
        //         payload: {
        //           data: "token"
        //         }
        //       });
        //     } catch (error) {
        //       yield put({
        //         type: `@@login/LOGIN_FAILED`,
        //         payload: {
        //           error: error.message
        //         }
        //       });
        //     }
        //   });
}

