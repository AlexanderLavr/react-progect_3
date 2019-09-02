import React from 'react';
import SimpleTabs from './tabsAdminHome';


export class AdminHome extends React.Component<any>{
  componentDidMount(){
    this.props.queryServer()
  }
  render(){
    return(
      <SimpleTabs></SimpleTabs>
    )
  }
}



