import React from 'react';
import { connect } from 'react-redux';
import Error from './error';


class Login extends React.Component<any>{
    state:any = {
        email: '',
        password: '',
        objServer: {},
        successLogin: false,
    }
    changeInp=(e:any)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    eventBut(e:any){
        e.preventDefault();
        let endObj = {
            email: this.state.email,
            password: this.state.password
        }

        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(response => this.setState({objServer: response} as any))
     
            // .then(error => this.setState({successLogin: true} as any));
        // this.props.addObj(endObj)

        // console.log(this.props.myStore)
    }
    searchConcidence():void{
        for(let element of this.state.objServer){
            console.log(element)
        }
    }
    errorServer(){
        return (<Error errorText='Сервер не отвечает! Попробуйте позже'/>)
    }
    render(){
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
                        <div className="item-password">
                            <div className="password-left">Password:</div>
                            <div className="password-right">
                                <input type="password" name="password" onChange={this.changeInp} value={this.state.password}/>
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

export default connect(
    state=>({
        // myStore: state
    }),
    dispatch=>({
        addObj: (state:any)=>{
            dispatch({type: 'ADD_OBJ', obj:state})
        }
    })
)(Login);
