import React from 'react';
import {RegistrationState} from '../redux/regestration/types';
import { Redirect } from 'react-router';


export class RegistrationComponent extends React.Component<any>{
    state:any = {
        firstname: '',
        secondname: '',
        email: '',
        password: ''
    }

    
    submitRegistration = (e: any)=>{
        e.preventDefault();
        this.props.doRegister(this.state)
    }
    
    handle = (event:any)=>{
        this.setState({[event.target.name]:event.target.value} as any)
    }

    render(){
        console.log(this.props.history)
        if(this.props.successRegister){
            // return <Redirect to='/login'/>
            // this.props.history.push('/login');
        }
        return(
            <div className="containerRegestration">
              <h2>Regestration</h2>
                <div className="conteiner-form">
                    <form>
                        <div className="item-firstname">
                            <div className="firstname-left">FirstName:</div>
                            <div className="firstname-right">
                                <input type="text" name="firstname" onChange = {this.handle} value={this.state.firstname} />
                            </div>
                        </div>
                        <div className="error">{this.props.errorFirstname}</div>
                        <div className="item-secondname">
                            <div className="secondname-left">SecondName:</div>
                            <div className="secondname-right">
                                <input type="text" name="secondname" onChange = {this.handle} value={this.state.secondname}/>
                            </div>
                        </div>
                        <div className="error">{this.props.errorSecondname}</div>
                        <div className="item-email">
                            <div className="email-left">Email:</div>
                            <div className="email-right">
                                <input type="email" name="email" onChange = {this.handle} value={this.state.email}/>
                            </div>
                        </div>
                        <div className="error">{this.props.errorEmail}</div>
                        <div className="item-password">
                            <div className="password-left">Password:</div>
                            <div className="password-right">
                                <input type="password" name="password" onChange = {this.handle} value={this.state.password}/>
                            </div>
                        </div>
                        <div className="error">{this.props.errorPassword}</div>
                        <div className="item-button">
                            <button onClick={(e) => this.submitRegistration(e)} id="submit-registr">Registration</button>
                        </div>
                    </form>
                    <div style={{color: 'red', height: '20px'}}>{this.props.error}</div>
                </div>
            </div>
        )
    }
}



