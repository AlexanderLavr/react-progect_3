
export const initialState: any = {
    firstname: '',
    secondname: '',
    email: '',
    password: '',


    errorFirstname: '',
    errorSecondname: '',
    errorEmail: '',
    errorPassword: '',

    startRegister: false,
    successRegister: false
};

export function regestrationReduser(state:any = initialState, action:any){
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
          firstname: obj.obj.email,
          secondname: obj.obj.firstname,
          email: obj.obj.secondname,
          password: obj.obj.password,

          errorFirstname: '',
          errorSecondname: '',
          errorEmail: '',
          errorPassword: '',
        }
      }
      case 'ERROR_VALIDE':
        let obj = action.errorObj
      
        return {
          ...state,
          firstname: '',
          secondname: '',
          email: '',
          password: '',

          errorFirstname: obj.errorFirstname,
          errorSecondname: obj.errorSecondname,
          errorEmail: obj.errorEmail,
          errorPassword: obj.errorPassword
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
      default:
        return state;
    }
}