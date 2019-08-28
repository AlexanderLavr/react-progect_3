import { put, takeEvery, call} from "redux-saga/effects";
import {parseRequestServer, validLogin} from '../../actionsComponents/actLogin';
import {LoginProc} from '../../redux/login/actions';


export function* doLogin(): IterableIterator<any>{
    yield takeEvery('DO_LOGIN', function*(obj:any){

        try {
            let {
                stateValid, 
                errorObj
            } = validLogin(obj)//валид обьект login

            if(stateValid===2){//Если все поля login заполнены и валидация true
                const data = yield call(() => {//=> query to J-serv
                    return fetch('http://localhost:3000/users')
                            .then(res => res.json())
                    }
                );
                let parseRequest = parseRequestServer(data, obj)
                let[
                    status,
                    admin, 
                    imageProfile,
                    idUser
                ] = parseRequest;
                if(status === false && admin === false){
                    yield put({type:LoginProc.LOGIN_ERROR, error:'Не существует такой учетной записи!'})
                }else if(status === true && admin === false){
                    yield put({type:LoginProc.LOGIN_SUCCESS_USER, obj, imageProfile, idUser})//=>change state in store
                    arguments[0].history.push('./userHome');
                }else if(status && admin){
                    yield put({type:LoginProc.LOGIN_SUCCESS_ADMIN, obj, imageProfile, idUser})//=>change state in store
                    arguments[0].history.push('./adminHome');
                }
               
            }else{
                yield put({type: LoginProc.ERROR_VALIDE, errorObj})
            }
        } catch(error) {
            
        };
    })
}
