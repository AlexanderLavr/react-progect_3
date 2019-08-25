import React from 'react';
import { Link } from "react-router-dom";
import {headerUser, headerAdmin} from '../actionsComponents/actHeaderStart';

// interface HeaderProps {
//     loginSuc: boolean,
//     loginEmail: string,
//     userIsAdmin: boolean
// }
export class HeaderNav extends React.Component<any>{
    state:any={
        active: false
    }
    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };
     render(){
        if(this.props.loginSuc && this.props.userIsAdmin===false){
       
            return headerUser(this.props.loginEmail)
        }else if(this.props.loginSuc && this.props.userIsAdmin===true){
            return headerAdmin(this.props.loginEmail)
        }
        return (
            <ul className="app-nav">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/regestration">Regestration</Link></li>
            </ul>
        )
    }
}


