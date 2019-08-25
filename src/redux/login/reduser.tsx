export const initialState: any = {
  doLogin: true,
  loginEmail: '',
  loginPassword: '',
  logErrorEmail: '',
  logErrorPassword: '',
  loginSuccess: false,
  loginError: '',
  userIsAdmin: false
};

export function loginReduser(state:any = initialState, action:any){
    switch (action.type){
      case 'DO_LOGIN':
        return {
          ...state, 
          doLogin: true
        }
      case 'ERROR_VALIDE':
        let obj = action.errorObj
        return {
          ...state, 
          loginError: '',
          logErrorEmail: obj.logErrorEmail,
          logErrorPassword: obj.logErrorPassword
        }
      case 'LOGIN_SUCCESS_USER':
        let objSuccUser = action.obj;
        return {
          ...state, 
          loginSuccess: true,
          loginEmail: objSuccUser.obj.email,
          loginPassword: objSuccUser.obj.password
        }
      case 'LOGIN_SUCCESS_ADMIN':
        let objSuccAdmin = action.obj;
        return {
          ...state, 
          loginSuccess: true,
          loginEmail: objSuccAdmin.obj.email,
          loginPassword: objSuccAdmin.obj.password,
          userIsAdmin: true
        }
      case 'LOGIN_ERROR':
          return {
            ...state, 
            loginError: action.error,
            logErrorEmail: '',
            logErrorPassword: ''
          }
        default:
          return{...state}
    }
}