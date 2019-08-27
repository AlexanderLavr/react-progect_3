import { connect } from 'react-redux';
import {Login} from '../components/login';
import {LoginProc} from '../redux/login/actions';


export const parseRequestServer = (data:any, loginObj:any) =>{
    let status:boolean = false;
    let admin:boolean = false;
    let imageProfile:string = '';
    let idUser:number = 0;
    let {
        email: loginEmail,
        password: loginPassword
    } = loginObj.obj
    for(let i of data){
        if(loginEmail === i.email && 
            loginPassword === i.password &&
            i.isAdmin === false){
                idUser = i.id;
                imageProfile = i.imageProfile;
                status = true;
                return [status, admin, imageProfile, idUser]
        }else if(loginEmail === i.email && 
            loginPassword === i.password &&
            i.isAdmin === true){
                idUser = i.id;
                imageProfile = i.imageProfile;
                status = true;
                admin = true;
                return [status, admin, imageProfile, idUser]
        }
    }
    return [status, admin, imageProfile, idUser]
}

export const validLogin = (obj:any) => {
    const errorObj = {
        logErrorEmail: '',
        logErrorPassword: ''
    }
    let stateValid = 0;

    const passWordExpr = new RegExp(/[a-zA-Z0-9]{3,}/);
    const emailRegExpr = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

    if(!emailRegExpr.test(obj.obj.email)){
        errorObj.logErrorEmail = 'Error: uncorrectEmail value!';
    }else{++stateValid}
    if(!passWordExpr.test(obj.obj.password)){
        errorObj.logErrorPassword = 'Error: допустимы буквы латинского алфавита и цифры не менее 3-х';
    }else{++stateValid}

    return {
        stateValid: stateValid,
        errorObj: errorObj
    }
}


const mapStateToProps = (state: any) => ({
    emailUser: state.regestration.email,
    passwordUser: state.regestration.password,


    imageProfile: state.regestration.imageProfile,

    logErrorEmail: state.login.logErrorEmail,
    logErrorPassword: state.login.logErrorPassword,
    
    loginEmail: state.login.loginEmail,
    loginPassword: state.login.loginPassword,
    loginSuccess: state.login.loginSuccess,
    loginError: state.login.loginError,
    userIsAdmin: state.login.userIsAdmin
});

export default connect(
    mapStateToProps,
    dispatch=>({
        doLogin: (currentObj:{}, history:{})=>{
            dispatch({type: LoginProc.DO_LOGIN, obj: currentObj, history})
        }
    })
)(Login);