import React from 'react';
import { connect } from "react-redux";

export class GeneralError extends React.Component<any>{
    render(){
        return <h2 style={{color: 'red'}}>{}</h2>
    }
}

const mapStateToProps = (state: any) => ({
    // error: state.registration.error
});

export  default connect(mapStateToProps)(GeneralError);
