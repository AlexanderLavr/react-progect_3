import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {HeaderNav} from '../components/header';
import {HeaderProc} from '../redux/header/actions';

const mapStateToProps = (state: any) => ({
    loginSuc: state.login.loginSuccess,
    loginEmail: state.login.loginEmail,
    loginPassword: state.login.loginPassword,
    userIsAdmin: state.login.userIsAdmin
});


// export default connect(mapStateToProps)(HeaderNav);
export default connect(
    mapStateToProps,
    dispatch=>({
        logOut: ()=>{
            dispatch({type: HeaderProc.LOG_OUT})
        }
    })
)(HeaderNav);