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

            yield put({type:'LoginPros.', obj, error: 'Success registration!'})

            if(stateValid===2){//Если все поля login заполнены и валидация true
                const data = yield call(() => {//=> query to J-serv
                    return fetch('http://localhost:3000/users')
                            .then(res => res.json())
                    }
                );
                if(!parseRequestServer(data, obj)){
                    yield put({type:LoginPros.LOGIN_ERROR, error:'Не существует такой учетной записи!'})
                }else{
                    yield put({type:LoginPros.LOGIN_SUCCESS})//=>change state in store
                }
               
                
            }else{
                yield put({type: LoginPros.ERROR_VALIDE, errorObj})
            }
        } catch(error) {
            
        };
    })
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