import React from 'react';


export default class GeneralError extends React.Component<any>{
    render(){
        return <h2 style={{color: 'red'}}>{this.props.errorText}</h2>
    }
}