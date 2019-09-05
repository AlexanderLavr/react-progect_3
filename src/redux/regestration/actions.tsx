export enum RPr{
    DO_REGISTER = 'DO_REGISTER',
    ADD_USER = 'ADD_USER',
    SUCCESS_REGISTRATION = 'SUCCESS_REGISTRATION',
    USER_EXSIST = 'USER_EXSIST',
    ERROR_REGISTRATION = 'ERROR_REGISTRATION'
}
export enum valReg{
    ERROR_VALIDE = 'ERROR_VALIDE'
}


export interface RegistrationState{
    firstname: string,
    secondname: string,
    email: string,
    password: string,
    isAdmin: boolean,
    imageProfile: string
} 

export interface RegistrationinitialState{
    firstname: string,
    secondname: string,
    email: string,
    password: string,
    errorFirstname: string,
    errorSecondname: string,
    errorEmail: string,
    errorPassword: string,
    error: string,
    imageProfile: string
    isAdmin: boolean,
    startRegister: boolean,
    userExist: boolean,
    successRegister: boolean
  }
  