import React from 'react';
import { Link } from "react-router-dom";
// import {headerUser} from '../actionsComponents/actHeaderStart';
import  defaulProfile  from '../images/users.svg';
import  shopingCart  from '../images/shopping-cart.svg';


export class HeaderNav extends React.Component<any>{
    state:any={
        active: false
    }
    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };
    logOut(){
        this.props.logOut()
    }
     render(){
        if(this.props.loginSuc && this.props.userIsAdmin===false){//!Admin
            return(
                <ul className="app-nav">
                <li><Link to="/userHome">User Home</Link></li>
                <li>
                    <ul style={{display: "flex"}}>
                        <li 
                        style={{position: "relative", cursor: "pointer"}}
                        onClick={()=>{this.toggleClass()}}>Hello: {this.props.loginEmail}! 
                            <ul className={`dropdown-list ${this.state.active?'dropdown-list-active': ''}`}>
                                <li><Link to="./profile">Admin Profile</Link></li>
                                <li onClick={()=>{this.logOut()}}><Link to="./">Log Out</Link></li>
                            </ul>
                        </li>
                        <li><img src={defaulProfile} className="headerIcon" alt="photo profile"/></li>
                        <li><img src={shopingCart} className="headerIcon" alt="cart"/></li>
                    </ul>
                </li>
            </ul>
            )
        }else if(this.props.loginSuc && this.props.userIsAdmin===true){//Admin
            return(
                <ul className="app-nav">
                <li><Link to="/adminHome">Admin Home</Link></li>
                <li>
                    <ul style={{display: "flex"}}>
                        <li 
                        style={{position: "relative", cursor: "pointer"}}
                        onClick={()=>{this.toggleClass()}}>Hello: {this.props.loginEmail}! 
                            <ul className={`dropdown-list ${this.state.active?'dropdown-list-active': ''}`}>
                                <li><Link to="/profile">Admin Profile</Link></li>
                                <li onClick={()=>{this.logOut()}}><Link to="./">Log Out</Link></li>
                            </ul>
                        </li>
                        <li><img src="images/shopping-cart.svg" className="headerIcon" alt="photo profile"/></li>
                    </ul>
                </li>
            </ul>
            )
        }
        return (
            <ul className="app-nav">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/regestration">Regestration</Link></li>
            </ul>
        )
    }
}
