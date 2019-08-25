
export const initialState: any = {
    firstname: '',
    secondname: '',
    email: '',
    password: '',

    errorFirstname: '',
    errorSecondname: '',
    errorEmail: '',
    errorPassword: '',
    
    isAdmin: false,
    startRegister: false,
    userExist: false,
    successRegister: false,
    error: '',
};

export function regestrationReduser(state:any = initialState, action:any){

  // debugger;
  switch (action.type){
     case 'DO_REGISTER':
        return {
        ...state, 
        startRegister: true
      }
      case 'ADD_USER': {
        let obj = action.obj;
        return {
          ...state, 
          firstname: obj.obj.firstname,
          secondname: obj.obj.secondname,
          email: obj.obj.email,
          password: obj.obj.password,
          isAdmin: false,

          errorFirstname: '',
          errorSecondname: '',
          errorEmail: '',
          errorPassword: '',
          error: action.error,
        }
      }
      case 'USER_EXSIST':
        return {
          ...state, 
          userExist: true,
          error: action.error,
          successRegister: false,
          errorFirstname: '',
          errorSecondname: '',
          errorEmail: '',
          errorPassword: ''
      }
      case 'SUCCESS_REGISTRATION':
        return {
          ...state, 
          successRegister: true,
          errorFirstname: '',
          errorSecondname: '',
          errorEmail: '',
          errorPassword: ''
      }
      case 'ERROR_VALIDE':
        let obj = action.errorObj
      
        return {
          ...state,
          firstname: '',
          secondname: '',
          email: '',
          password: '',

          userExist: false,
          errorFirstname: obj.errorFirstname,
          errorSecondname: obj.errorSecondname,
          errorEmail: obj.errorEmail,
          errorPassword: obj.errorPassword
      }
      default:
        return state;
    }
}