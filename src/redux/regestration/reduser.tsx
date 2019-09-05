import { RegistrationinitialState } from './actions';

export const initialState:RegistrationinitialState = {
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
  imageProfile: ''
};



export function regestrationReduser(state:RegistrationinitialState = initialState, action:any){
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
          imageProfile: obj.obj.imageProfile,
          isAdmin: false,

          errorFirstname: '',
          errorSecondname: '',
          errorEmail: '',
          errorPassword: ''
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