import React from 'react';
// import Error from './error';
// import { Redirect } from 'react-router';
// import {RPr} from '../redux/regestration/actions';
// import {mapStateToProps} from '../actions/actRegictration'
// import { doRegistration } from '../redux/regestration/sagasRegestration';
// import Error from './error';
// import { connect } from 'react-redux';
      // if(this.state.successRegister){
        //     return (<Redirect to="/login" />);
        // }
        // console.log(typeof(this.props))

export class Login extends React.Component<any>{
    state:any = {
        email: this.props.emailUser,
        password: ''
    }
    changeInp=(e:any)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    eventBut(e:any){
        e.preventDefault();
        this.props.doLogin(this.state)
    }
    render(){
        console.log(this.props)
        console.log(this.props.emailUser)
        console.log(this.props.passwordUser)
        return(
            <div className="containerLogin">
                <h2>LogIn</h2>
                <div className="conteiner-form">
                    <form>
                    <div className="item-email">
                        <div className="email-left">Email:</div>
                            <div className="email-right">
                                <input  type="email" name="email"  onChange={this.changeInp} value={this.props.emailUser}/>
                            </div>
                        </div>
                        <div className="item-password">
                            <div className="password-left">Password:</div>
                            <div className="password-right">
                                <input type="password" name="password" onChange={this.changeInp} value={this.props.passwordUser}/>
                            </div>
                        </div>
                        <div className="item-button">
                            <button  id="submit-registr" onClick={(e)=>{this.eventBut(e)}} >Registration</button>
                        </div>
                    </form>
                </div>
            </div>    
        )
    }
}
