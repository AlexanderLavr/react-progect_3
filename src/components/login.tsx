import React from 'react';
import { Redirect } from 'react-router';
// import Error from './error';
// import { Redirect } from 'react-router';
// import {RPr} from '../redux/regestration/actions';
// import {mapStateToProps} from '../actions/actRegictration'
// import { doRegistration } from '../redux/regestration/sagasRegestration';
// import Error from './error';
// import { connect } from 'react-redux';
      

export class Login extends React.Component<any>{
    state:any = {
        email: this.props.emailUser,
        password: this.props.passwordUser
    }
    
    changeInp=(e:any)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    eventLogin(e:any){
        e.preventDefault();
        this.props.doLogin(this.state)
    }
    render(){
        if(this.props.loginSuccess){
            return <Redirect to='/'/>
        }
        return(
            <div className="containerLogin">
                <h2>LogIn</h2>
                <div className="conteiner-form">
                    <form>
                    <div className="item-email">
                        <div className="email-left">Email:</div>
                            <div className="email-right">
                                <input  type="email" name="email"  onChange={this.changeInp} value={this.state.email}/>
                            </div>
                        </div>
                        <div className="error">{this.props.logErrorEmail}</div>
                        <div className="item-password">
                            <div className="password-left">Password:</div>
                            <div className="password-right">
                                <input type="password" name="password" onChange={this.changeInp} value={this.state.password}/>
                            </div>
                        </div>
                        <div className="error">{this.props.logErrorPassword}</div>
                        <div className="item-button">
                            <button  id="submit-registr" onClick={(e)=>{this.eventLogin(e)}} >Registration</button>
                        </div>
                    </form>
                    <div style={{color: 'red', height: '20px'}}>{this.props.loginError}</div>
                </div>
            </div>    
        )
    }
}
