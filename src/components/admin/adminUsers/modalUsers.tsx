import React from 'react';
import '../../../style/modalAdmin.css'
import Modal from '@material-ui/core/Modal';

interface AdminModalState {
  id: number,
  firstname: string,
  secondname: string,
  email: string,
  password: string,
  isAdmin: string,
}

export class AdminModal extends React.Component<any,any>{
  state:AdminModalState = {
    id: this.props.editUserServer.id,
    firstname: this.props.editUserServer.firstname,
    secondname: this.props.editUserServer.secondname,
    email: this.props.editUserServer.email,
    password: this.props.editUserServer.password,
    isAdmin: this.props.editUserServer.isAdmin,
}   
  
  changeInp=(e:any)=>{
    this.setState({[e.target.placeholder]:e.target.value})
  }
  changeSelect = (e:any)=>{
    if(e.target.value === 'true'){
      this.setState({isAdmin: true})
    }else if(e.target.value === 'false'){
      this.setState({isAdmin: false})
    }
  }
  render(){ 
    return(
      <Modal open={this.props.openAdminModal} className="modal-admin">
        <div  className="modal-container">
          <h2 id="simple-modal-title">Edit User</h2>
          <div>
          <input style={{display: 'none'}}onChange={()=>{}}value={this.state.id} />
            <input placeholder="firstname" onChange={(e)=>{this.changeInp(e)}} value={this.state.firstname} /> 
            <input placeholder="secondname" onChange={(e)=>{this.changeInp(e)}}  value={this.state.secondname}/>
            <input placeholder="email" onChange={(e)=>{this.changeInp(e)}}  value={this.state.email}/>
            <input placeholder="password" onChange={(e)=>{this.changeInp(e)}} value={this.state.password}/>
            <select name="" id="modal-select" onChange={(e)=>{this.changeSelect(e)}} defaultValue={this.state.isAdmin}>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <button className="save-edit" onClick={()=>{
            this.props.saveEditUser(this.state)
            setTimeout(()=>{this.props.closeModal()}, 1000)
            }}>save</button>
          {/* <button className="close-modal" onClick={()=>{this.props.closeModal()}} >close</button> */}
        </div>
      </Modal>
    )
  } 
}

