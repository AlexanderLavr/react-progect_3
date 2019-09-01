import { call, put, takeEvery } from 'redux-saga/effects';
import {RPr, valReg} from '../../redux/regestration/actions';
import {parseRequestServer, validRegistration} from '../../actionsComponents/actRegictration';
import { any } from 'prop-types';
import  defaulProfile  from '../images/users.svg';


export function* doRegistration(): IterableIterator<any>{
    yield takeEvery('DO_REGISTER', function*(obj:any){

        try {
            let stateValid, errorObj
            let resultValid = {
                stateValid,
                errorObj
            } = validRegistration(obj)//валид обьект регистрации
            if(stateValid===4){//Если все поля регистрации заполнены и валидация true
                const data = yield call(() => {//=> query to J-serv
                    return fetch('http://localhost:3000/users')
                            .then(res => res.json())
                    }
                );
                if(!parseRequestServer(data, obj)){//Если User !Exist =
                    yield call(() => {//=> query to J-serv => add User
                        fetch('http://localhost:3000/users', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(obj.obj)
                        })
                    })
                    yield put({type:RPr.ADD_USER, obj, error: 'Success registration!'}) //=> LOGIN REDUSER
                    yield put({type:RPr.SUCCESS_REGISTRATION})//=>change state in store
                    arguments[0].history.push('./login')//Redirect после успешного добавления
                    yield put({type: 'SUCCESS_REGISTRATION', error: 'Success registration!'}) 
                   
                }else{
                    yield put({type:RPr.USER_EXSIST, error: 'User exist!'})//=>change state in store
                }
                
            }else{
                yield put({type: valReg.ERROR_VALIDE, errorObj})
            }
        } catch(error) {
            
        };
        
    })
    

}

   