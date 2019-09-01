import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';


import AdminModal from "../../actionsComponents/actModalAdmin";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  }),
);

let parceId = (id:any)=>{
  let regExpNum = /\d+/;
  let result:number = Number(id.match(regExpNum)[0]);
  return result
} 



let buttonEdit = (e:any, props:any) =>{
  let elem:any = e.currentTarget
  let id:number = parceId(elem.id)
  props.editUser(id)
  props.openModal()
}



let buttonDelete = (e:any, props:any) =>{
  let elem:any = e.target
  let id:number = parceId(elem.id)
  if(id === 1){
    alert('admin dont delete!')
  }else{
    props.deleteUser(id)
  }
}



function SimpleTable(props:any) {
  const classes = useStyles();
  let checkModal = () =>{
    if(Object.keys(props.editUserServer).length !== 0){
      return <AdminModal />
    }
  }
  return (
    <div>
      {checkModal()}
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Firstname</TableCell>
              <TableCell align="right">Secondname</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Password</TableCell>
              <TableCell align="right">Admin</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.serverArray.map((el:any, i:number) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {el.id}
                </TableCell>
                <TableCell align="right">{el.firstname}</TableCell>
                <TableCell align="right">{el.secondname}</TableCell>
                <TableCell align="right">{el.email}</TableCell>
                <TableCell align="right">{el.password}</TableCell>
                <TableCell align="right">{`${el.isAdmin}`}</TableCell>
                <TableCell align="right">
                  <button onClick={(e:any)=>{buttonEdit(e, props)}} id={`ed${el.id}`}>
                    Edit
                  </button>
                  </TableCell>
                <TableCell align="right">
                  <button onClick={(e:any)=>{buttonDelete(e, props)}} id={`del${el.id}`}>
                    Delete
                  </button>
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
    serverArray: state.admin.serverArray,
    openAdminModal: state.admin.openAdminModal,
    editUserServer: state.admin.editUserServer
});

export default connect(
    mapStateToProps,
    dispatch=>({
        deleteUser: (id:number)=>{
            dispatch({type: 'DO_DELETE_USER', id})
        }, 
        editUser: (id:number)=>{
          dispatch({type: 'DO_EDIT_USER', id})
        },
        openModal: ()=>{
          dispatch({type: 'OPEN_MODAL'})
        }
    })
)(SimpleTable);