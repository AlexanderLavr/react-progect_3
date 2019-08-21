import React from 'react';
import { doRegistration } from '../redux/regestration/sagasRegestration';
// import Error from './error';
import { connect } from 'react-redux';
import {RegistrationState, LoginRequest} from '../redux/regestration/types';
import { Redirect } from 'react-router';

console.log(doRegistration({name: 'kjhkjjkh'}))
export interface LoginProps {
    RegistrationState: (data: LoginRequest) => object;
  }


class RegistrationComponent extends React.Component<any>{
    state:RegistrationState = {
        firstname: '',
        secondname: '',
        email: '',
        password: '',
        errorFirstname: '',
        errorSecondname: '',
        errorEmail: '',
        errorPassword: '',
        successRegister: false
    }
    
    submitRegistration = (e: any)=>{
        e.preventDefault();
       
        const inpRegExpr = new RegExp(/[a-zA-Z]{3,}/i);
        const passWordExpr = new RegExp(/[a-zA-Z0-9]{3,}/i);
        const emailRegExpr = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
    
        let stateValid = 0;
        if(!inpRegExpr.test(this.state.firstname)){
            this.setState({errorFirstname: 'Error: только буквы латинского алфавита не менее 3-х'} as any)
        }else{++stateValid}
        if(!inpRegExpr.test(this.state.secondname)){
            this.setState({errorSecondname: 'Error: только буквы латинского алфавита не менее 3-х'} as any)
        }else{++stateValid}
        if(!emailRegExpr.test(this.state.email)){
            this.setState({errorEmail: 'Error: uncorrectEmail value!'} as any)
        }else{++stateValid}
        if(!passWordExpr.test(this.state.password)){
            this.setState({errorPassword: 'Error: допустимы буквы латинского алфавита и цифры не менее 3-х'} as any)
        }else{++stateValid}
        let endObj = {
            firstname: this.state.firstname,
            secondname: this.state.secondname,
            email: this.state.email,
            password: this.state.password
        }
        if(stateValid===4){
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(endObj)
            })
            this.props.registerUser(endObj)
            this.setState({successRegister: true} as any)
            
        }
    }
    deleteErrorFN  = () =>{
        this.setState({errorFirstname: ''} as any)
    }
    deleteErrorSN  = () =>{
        this.setState({errorSecondname: ''} as any)
    }
    deleteErrorEM  = () =>{
        this.setState({errorEmail: ''} as any)
    }
    deleteErrorPS = () => {
        this.setState({errorPassword: ''} as any)
    }
   
    handle = (event:any)=>{
        this.setState({[event.target.name]:event.target.value} as any)
    }

    render(){
        if(this.state.successRegister){
            return (<Redirect to="/login" />);
        }
        return(
            <div className="containerRegestration">
                <h2>Regestration</h2>
                <div className="conteiner-form">
                    <form>
                        <div className="item-firstname">
                            <div className="firstname-left">FirstName:</div>
                            <div className="firstname-right">
                                <input onFocus={this.deleteErrorFN} type="text" name="firstname" onChange = {this.handle} value={this.state.firstname} />
                            </div>
                        </div>
                        <div className="error">{this.state.errorFirstname}</div>
                        <div className="item-secondname">
                            <div className="secondname-left">SecondName:</div>
                            <div className="secondname-right">
                                <input onFocus={this.deleteErrorSN} type="text" name="secondname" onChange = {this.handle} value={this.state.secondname}/>
                            </div>
                        </div>
                        <div className="error">{this.state.errorSecondname}</div>
                        <div className="item-email">
                            <div className="email-left">Email:</div>
                            <div className="email-right">
                                <input onFocus={this.deleteErrorEM} type="email" name="email" onChange = {this.handle} value={this.state.email}/>
                            </div>
                        </div>
                        <div className="error">{this.state.errorEmail}</div>
                        <div className="item-password">
                            <div className="password-left">Password:</div>
                            <div className="password-right">
                                <input onFocus={this.deleteErrorPS}type="password" name="password" onChange = {this.handle} value={this.state.password}/>
                            </div>
                        </div>
                        <div className="error">{this.state.errorPassword}</div>
                        <div className="item-button">
                            <button onClick={(e) => this.submitRegistration(e)} id="submit-registr">Registration</button>
                        </div>
                    </form>
                </div>
            </div>
            
        )
    }
}


export default connect(
    state=>({
        myStore: state
    }),
    dispatch=>({
        registerUser: (registerState: any)=>{
            
            dispatch({type: 'ADD_OBJ', obj: registerState})
        }
    })
)(RegistrationComponent);