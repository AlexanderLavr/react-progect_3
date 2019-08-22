import { call, put, takeEvery } from 'redux-saga/effects';
import {RPr, valReg} from '../../redux/regestration/actions';
import {parseRequestServer, validRegistration} from '../../actions/actRegictration';

export function* doRegistration(): IterableIterator<any>{
    yield takeEvery('DO_REGISTER', function*(obj:any){
        try {
            let stateValid, errorObj
            let resultValid = {
                stateValid,
                errorObj
            } = validRegistration(obj)

            if(stateValid===4){
                debugger;
                yield put({type:RPr.ADD_USER, obj})
                const data = yield call(() => {
                    return fetch('http://localhost:3000/users')
                            .then(res => res.json())
                    }
                );
                if(!parseRequestServer(data, obj)){
                    yield call(() => {
                        fetch('http://localhost:3000/users', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(obj.obj)
                        })
                    })
                }
                
            }else{
                yield put({type: valReg.ERROR_VALIDE, errorObj})
            }
        } catch(error) {
            
        };
        
    })
    

}

   