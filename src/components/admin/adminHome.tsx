import React from 'react';
import SimpleTabs from './tabsAdminHome';


export class AdminHome extends React.Component<any>{
  state:any = {
    userIsAdmin: true
  }
  qwe(){
    if(this.state.userIsAdmin){
      this.setState({userIsAdmin: false})
      this.props.queryServer()
    }
    
  }
    
  
  render(){
   {this.qwe()}
    return(
      <SimpleTabs></SimpleTabs>
    )
  }
}



