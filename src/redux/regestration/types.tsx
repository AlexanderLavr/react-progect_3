

export interface RegistrationState{
    firstname: string,
    secondname: string,
    email: string,
    password: string,
    errorFirstname: string,
    errorSecondname: string,
    errorEmail: string,
    errorPassword: string,
    successRegister: boolean;
}


export interface DoLoginProps {
    email: string;
    password: string;
    payloadFunc: Function;
}
export interface LoginRequest {
    email: string;
    password: string;
}