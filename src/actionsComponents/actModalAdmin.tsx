import { connect } from 'react-redux';
import {AdminModal} from '../components/admin/modal';


export const validSaveAdmin = (obj:any) => {
    let stateValid = 0;
    const inpRegExpr = new RegExp(/^[a-zA-Z]{3,}$/);
    const passWordExpr = new RegExp(/^[0-9]{3,}$/);
    const emailRegExpr = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

    if(inpRegExpr.test(obj.data.firstname)){
        ++stateValid
    }
    if(inpRegExpr.test(obj.data.secondname)){
        ++stateValid
    }
    if(emailRegExpr.test(obj.data.email)){
        ++stateValid
    }
    if(passWordExpr.test(obj.data.password)){
        ++stateValid
    }
    return stateValid 
    
}



export const parseEditUser = (serverData:{}, data:any)=>{
    let newServerData = JSON.parse(JSON.stringify(serverData))
    newServerData.firstname = data.data.firstname;
    newServerData.secondname = data.data.secondname;
    newServerData.email = data.data.email;
    newServerData.password = data.data.password;
    newServerData.isAdmin = data.data.isAdmin;
    return newServerData
}







const mapStateToProps = (state: any) => ({
    serverArray: state.admin.serverArray,
    openAdminModal: state.admin.openAdminModal,
    editUserServer: state.admin.editUserServer
  });
  
  export default connect(
    mapStateToProps,
    dispatch=>({
        closeModal: ()=>{
            dispatch({type: 'CLOSE_MODAL'})
        },
        saveEditUser: (data:any)=>{
          dispatch({type: 'DO_SAVE_EDIT_USER', data})
        }
    })
  )(AdminModal);