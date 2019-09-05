export enum LoginProc{
    DO_LOGIN = 'DO_LOGIN',
    ERROR_VALIDE = 'ERROR_VALIDE',
    LOGIN_SUCCESS_USER = 'LOGIN_SUCCESS_USER',
    LOGIN_SUCCESS_ADMIN = 'LOGIN_SUCCESS_ADMIN',
    LOGIN_ERROR = 'LOGIN_ERROR'
}

export interface loginInitialState{
    loginEmail: string,
    loginPassword: string,
    logErrorEmail: string,
    logErrorPassword: string,
    loginError: string,
    imageProfile: string,
    loginSuccess: boolean,
    doLogin: boolean,
    userIsAdmin: boolean,
    idUser: number
}
