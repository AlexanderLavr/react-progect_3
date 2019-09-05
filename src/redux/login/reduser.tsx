import { LoginProc, loginInitialState} from '../../redux//login/actions';
import { HeaderProc }from '../../redux/header/actions';


const initialState:loginInitialState = {
  doLogin: false,
  loginEmail: '',
  loginPassword: '',
  logErrorEmail: '',
  logErrorPassword: '',
  loginSuccess: false,
  loginError: '',
  imageProfile: '',
  idUser: 0,
  userIsAdmin: false
};

export function loginReduser(state:loginInitialState = initialState, action:any){
    switch (action.type){
      case LoginProc.DO_LOGIN:
        return {
          ...state, 
          doLogin: true
        }
      case LoginProc.ERROR_VALIDE:
        let obj = action.errorObj
        return {
          ...state, 
          loginError: '',
          logErrorEmail: obj.logErrorEmail,
          logErrorPassword: obj.logErrorPassword
        }
      case LoginProc.LOGIN_SUCCESS_USER:
        let objSuccUser = action.obj;
        return {
          ...state, 
          loginSuccess: true,
          loginEmail: objSuccUser.obj.email,
          loginPassword: objSuccUser.obj.password,
          imageProfile: action.imageProfile,//take this with json-server
          idUser: action.idUser//take this with json-server
        }
      case LoginProc.LOGIN_SUCCESS_ADMIN:
        let objSuccAdmin = action.obj;
        return {
          ...state, 
          loginSuccess: true,
          loginEmail: objSuccAdmin.obj.email,
          loginPassword: objSuccAdmin.obj.password,
          userIsAdmin: true,
          imageProfile: action.imageProfile,//take this with json-server
          idUser: action.idUser//take this with json-server
        }
      case LoginProc.LOGIN_ERROR:
          return {
            ...state, 
            loginError: action.error,
            logErrorEmail: '',
            logErrorPassword: ''
          }
      case 'DO_SAVE_PHOTO':
        return {
          ...state
        }
      case 'SAVE_PHOTO':
        return {
          ...state, 
          imageProfile: action.saveImg.saveImg.img
        }

        case 'DO_HEADER':
        return {
          ...state
        }
        case 'HEADER_ADMIN'://from Local STORE
        return {
          ...state, 
          loginSuccess: action.obj.obj.loginSuccess,
          loginEmail: action.obj.obj.email,
          loginPassword: action.obj.obj.password,
          userIsAdmin: action.obj.obj.admin,
          imageProfile: action.obj.obj.imageProfile,
          idUser: action.obj.obj.idUser
        }
        case 'SUCCESS_REGISTRATION':
          return {
            ...state,
            loginError: action.error
          }
        case HeaderProc.LOG_OUT:
            return {
              ...state, 
              doLogin: false,
              loginEmail: '',
              loginPassword: '',
              logErrorEmail: '',
              logErrorPassword: '',
              loginSuccess: false,
              loginError: '',
              userIsAdmin: false
            }
        default:
          return{...state}
    }
}