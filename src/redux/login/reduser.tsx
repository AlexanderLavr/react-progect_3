export const initialState: any = {
  doLogin: true,
  email: '',
  password: '',
  logErrorEmail: '',
  logErrorPassword: '',
  loginSuccess: false,
  loginError: ''
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
      case 'LOGIN_SUCCESS':
        return {
          ...state, 
          loginSuccess: true,
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