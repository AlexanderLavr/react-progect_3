import React from 'react';
import SimpleTabs from './tabsAdminHome';


export class AdminHome extends React.Component<any>{
  render(){
    return(
      <SimpleTabs></SimpleTabs>
    )
  }
  componentDidMount(){
    this.props.queryServer()
  }
}



