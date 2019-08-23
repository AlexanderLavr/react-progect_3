import { connect } from 'react-redux';
import {Login} from '../components/login';
import {LoginPros} from '../redux/login/actions';

const mapStateToProps = (state: any) => ({
    loginState: state.login.loginState,
    emailUser: state.regestration.email,
    passwordUser: state.regestration.password
    
  
});
// export default connect(
//     state=>({
//         // myStore: state,
//         mapStateToProps: state
//     }),
//     dispatch=>({
//         // addObj: (state:any)=>{
//         //     dispatch({type: 'ADD_OBJ', obj:state})
//         // }
//     })
// )(Login);



export default connect(
    mapStateToProps,
    dispatch=>({
        doLogin: (currentObj:any)=>{
            dispatch({type: LoginPros.DO_LOGIN, obj: currentObj})
        }
    })
)(Login);