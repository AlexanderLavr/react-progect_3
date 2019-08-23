import { connect } from 'react-redux';
import {Login} from '../components/login';
import {LoginPros} from '../redux/login/actions';


export const parseRequestServer = (data:any, loginObj:any) =>{
    let status = false;
    let {
        email: loginEmail,
        password: loginPassword,
    } = loginObj.obj
    for(let i of data){
        if(loginEmail === i.email && 
            loginPassword === i.password){
                status = true;
                return status
            }
    }
    return status
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

    logErrorEmail: state.login.logErrorEmail,
    logErrorPassword: state.login.logErrorPassword,
    loginError: state.login.loginError,
    loginSuccess: state.login.loginSuccess
});

export default connect(
    mapStateToProps,
    dispatch=>({
        doLogin: (currentObj:any)=>{
            dispatch({type: LoginPros.DO_LOGIN, obj: currentObj})
        }
    })
)(Login);