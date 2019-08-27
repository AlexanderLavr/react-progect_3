import React from 'react';
import { connect } from 'react-redux';
import {Profile} from '../components/profile';


export const mapStateToProps = (state: any) => ({
    email: state.login.email,
    password: state.password,
    imageProfile: state.login.imageProfile,
    idUser: state.login.idUser
});


export default connect(
    mapStateToProps,
    dispatch=>({
        // doRegister: (currentObj:{}, history:{})=>{
        //     dispatch({type: RPr.DO_REGISTER, obj: currentObj, history})
        // }
    })
)(Profile);