import React from 'react';
import '../../style/modalAdmin.css'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import image from '../../images/delete.svg'



export class AdminModal extends React.Component<any,any>{

  state:any = {
    firstname: this.props.editUserServer.firstname,
    secondname: this.props.editUserServer.secondname,
    email: this.props.editUserServer.email,
    password: this.props.editUserServer.password,
    isAdmin: this.props.editUserServer.isAdmin
}   
  
  
 
  changeInp=(e:any)=>{
    this.setState({[e.target.placeholder]:e.target.value})
  }
  render(){ 
    
    // console.log(this.props.editUserServer)
    return(
      <Modal open={this.props.openAdminModal} className="modal-admin">
        <div  className="modal-container">
          <h2 id="simple-modal-title">Edit User</h2>
          <div>
            <input placeholder="firstname" onChange={(e)=>{this.changeInp(e)}} value={this.state.firstname} /> 
            <input placeholder="secondname" onChange={(e)=>{this.changeInp(e)}}  value={this.state.secondname}/>
            <input placeholder="email" onChange={(e)=>{this.changeInp(e)}}  value={this.state.email}/>
            <input placeholder="password" onChange={(e)=>{this.changeInp(e)}} value={this.state.password}/>
            <input placeholder="isAdmin" onChange={(e)=>{this.changeInp(e)}} value={this.state.isAdmin}/>
          </div>
          <button className="save-edit" onClick={()=>{this.props.saveEditUser(this.state)}}>save</button>
          <button className="close-modal" onClick={()=>{this.props.closeModal()}} >close</button>
        </div>
      </Modal>
    )
  } 
}

