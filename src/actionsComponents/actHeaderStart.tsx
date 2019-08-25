import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {HeaderNav} from '../components/headerStart';
import  defaulProfile  from '../images/users.svg';


export const headerAdmin = (loginEmail:string) => {
    let dropdown = 'dropdown-list-admin';
    let dropdownActive = '';
    let toggleclass = (e:any)=>{
        console.log(e.target)
    //     let parseClass = e.target.className.split(' ');
    //     console.log(!!parseClass[1])
    //     if(!parseClass[1]){
    //         satusActive = ''
    //     }
    }
    return(
        <div className="header-admin">
            <div>
                <div className="adminHome"><Link to="/adminHome">Admin Home</Link></div>
            </div>
            <div>
                <div onClick={(e)=>{toggleclass(e)}}
                className="admin-satus">
                    Hello: {loginEmail}!
                    <ul className={dropdown + ' ' + dropdownActive}>
                        <li><Link to="./adminProfile">Admin Profile</Link></li>
                        <li><Link to="./">Log Out</Link></li>
                    </ul>
                </div>
                <div>
                    <Link to="/adminfile">
                        <img src={defaulProfile} className="defaulProfile" alt="photo profile"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export const headerUser = (loginEmail:string) => {
    console.log(loginEmail)
    return(
        <ul className="header-admin">
            <li>
                <li className="adminHome"><Link to="/adminHome">Admin Home</Link></li>
            </li>
            <li>
                <li className="admin-satus">
                    Hello: {loginEmail}!
                    <ul className="dropdown-list-admin">
                        <li><Link to="./adminProfile">Admin Profile</Link></li>
                        <li><Link to="./">Log Out</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="/adminfile">
                        <img src={defaulProfile} className="defaulProfile" alt="photo profile"/>
                    </Link>
                </li>
            </li>
        </ul>
    )
}


const mapStateToProps = (state: any) => ({
    loginSuc: state.login.loginSuccess,
    loginEmail: state.login.loginEmail,
    loginPassword: state.login.loginPassword,
    userIsAdmin: state.login.userIsAdmin
});


export default connect(mapStateToProps)(HeaderNav);