import {RegistrationComponent} from '../components/regestration';
import { connect } from 'react-redux';
import {RPr} from '../redux/regestration/actions';



export const parseRequestServer = (data:any, regObj:any) =>{
    let status = false;
    let {
        email: regEmail,
        firstname: regFirstname,
        secondname: regSecondname,
        password: regPassword,
    } = regObj.obj
    for(let i of data){
        if(regEmail === i.email && 
            regFirstname === i.firstname &&
            regSecondname === i.secondname &&
            regPassword === i.password){
                status = true;
                return status
            }
    }
    return status
}

export const validRegistration = (obj:any) => {
    const errorObj = {
        errorFirstname: '',
        errorSecondname: '',
        errorEmail: '',
        errorPassword: ''
    }
    let stateValid = 0;

    const inpRegExpr = new RegExp(/[a-zA-Z]{3,}/i);
    const passWordExpr = new RegExp(/[a-zA-Z0-9]{3,}/);
    const emailRegExpr = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

    if(!inpRegExpr.test(obj.obj.firstname)){
        errorObj.errorFirstname = 'Error: только буквы латинского алфавита не менее 3-х';
    }else{++stateValid}
    if(!inpRegExpr.test(obj.obj.secondname)){
        errorObj.errorSecondname = 'Error: только буквы латинского алфавита не менее 3-х';
    }else{++stateValid}
    if(!emailRegExpr.test(obj.obj.email)){
        errorObj.errorEmail = 'Error: uncorrectEmail value!';
    }else{++stateValid}
    if(!passWordExpr.test(obj.obj.password)){
        errorObj.errorPassword = 'Error: допустимы буквы латинского алфавита и цифры не менее 3-х';
    }else{++stateValid}

    return {
        stateValid: stateValid,
        errorObj: errorObj
    }
}

export const mapStateToProps = (state: any) => ({
    email: state.regestration.email,
    firstname: state.regestration.firstname,
    secondname: state.regestration.secondname,
    password: state.regestration.password,
    

    errorFirstname: state.regestration.errorFirstname,
    errorSecondname: state.regestration.errorSecondname,
    errorEmail: state.regestration.errorEmail,
    errorPassword: state.regestration.errorPassword,

    successRegister: state.regestration.successRegister,
    error: state.regestration.error
    
});


export default connect(
    mapStateToProps,
    dispatch=>({
        doRegister: (currentObj:{}, history:{})=>{
            dispatch({type: RPr.DO_REGISTER, obj: currentObj, history})
        }
    })
)(RegistrationComponent);