import React from 'react';
import {AdminHome} from '../components/admin/adminHome';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {HeaderNav} from '../components/header';
import {HeaderProc} from '../redux/header/actions';






const mapStateToProps = (state: any) => ({
    loginSuc: state.login.loginSuccess,
    loginEmail: state.login.loginEmail,
    loginPassword: state.login.loginPassword,
    userIsAdmin: state.login.userIsAdmin,

    imageProfile: state.login.imageProfile,
    serverArray: state.admin.serverArray
});


// export default connect(mapStateToProps)(HeaderNav);
export default connect(
    mapStateToProps,
    dispatch=>({
        queryServer: ()=>{
            dispatch({type: 'DO_ADMIN'})
        }
    })
)(AdminHome);