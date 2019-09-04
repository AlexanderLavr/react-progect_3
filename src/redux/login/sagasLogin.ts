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

                let{
                    email,
                    password
                }=obj.obj;//obj register
        
                if(status === false && admin === false){
                    yield put({type:LoginProc.LOGIN_ERROR, error:'Не существует такой учетной записи!'})
                }else if(status === true && admin === false){
                    localStorage.setItem('user', JSON.stringify({
                        doLogin: true,
                        loginSuccess: true,
                        email: email,
                        password: password,
                        idUser: idUser,
                        admin: admin,
                        imageProfile: imageProfile
                    }))
                    yield put({type:LoginProc.LOGIN_SUCCESS_USER, obj, imageProfile, idUser})//=>change state in store
                    arguments[0].history.push('./userHome');
                }else if(status && admin){
                    localStorage.setItem('user', JSON.stringify({
                        doLogin: true,
                        loginSuccess: true,
                        email: email,
                        password: password,
                        idUser: idUser,
                        admin: admin,
                        imageProfile: imageProfile
                    }))
                    const selectBooks:[] = [];//create store for books
                    localStorage.setItem('selectBoock', JSON.stringify(selectBooks))
                    yield put({type:LoginProc.LOGIN_SUCCESS_ADMIN, obj, imageProfile, idUser});//=>change state in store
                    arguments[0].history.push('./adminHome');
                }
               
            }else{
                yield put({type: LoginProc.ERROR_VALIDE, errorObj})
            }
        } catch(error) {
            
        };
    })
}
