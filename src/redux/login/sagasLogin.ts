import { put, takeEvery, call} from "redux-saga/effects";
import {parseRequestServer, validLogin} from '../../actionsComponents/actLogin';
import {LoginPros} from '../../redux/login/actions';


export function* doLogin(): IterableIterator<any>{
    yield takeEvery('DO_LOGIN', function*(obj:any){

        try {
            let stateValid, errorObj
            let resultValid = {
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
                    admin
                ] = parseRequest;
                console.log(status, admin)
                if(status === false && admin === false){
                    yield put({type:LoginPros.LOGIN_ERROR, error:'Не существует такой учетной записи!'})
                }else if(status === true && admin === false){
                    yield put({type:LoginPros.LOGIN_SUCCESS_USER, obj})//=>change state in store
                    arguments[0].history.push('./userHome');
                }else if(status && admin){
                    yield put({type:LoginPros.LOGIN_SUCCESS_ADMIN, obj})//=>change state in store
                    arguments[0].history.push('./adminHome');
                }
               
            }else{
                yield put({type: LoginPros.ERROR_VALIDE, errorObj})
            }
        } catch(error) {
            
        };
    })
}
