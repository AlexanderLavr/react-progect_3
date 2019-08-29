import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
// import {AdminHome} from './adminHome'
// import { url } from 'inspector';

import SimpleModal from "./modal";




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

// function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// const getAllEmail = (props:any) =>{
//   let array:string[] = [];
//   if(props.serverArray){
//     for(let i of props.serverArray){
//       if(i.email){
//         if(i.email === 'alex@gmail.com'){
//           continue
//         }
//         array.push(i.email)
//       }
//     }
//     return array
//   }
// }
// const getAllId = (props:any) =>{
//   let array:string[] = [];
//   if(props.serverArray){
//     for(let i of props.serverArray){
//       if(i.id){
//         if(i.id === 1){
//           continue
//         }
//         array.push(i.id)
//       }
//     }
//     return array
//   }
// }
let parceId = (id:any)=>{
  let regExpNum = /\d+/;
  let result:number = Number(id.match(regExpNum)[0]);
  return result
} 
 
let buttonEdit = (e:any) =>{
  e.preventDefault();
  let elem:any = e.currentTarget
  let id:number = parceId(elem.id)
  console.log(id)

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
  console.log(props)
  return (
    
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
                
                <div style={{zIndex: -1, 
                  marginLeft: 'auto',
                  padding: 0, 
                  border: 0,
                  width: '50px',
                  height: '20px'
                  }}onClick={(e:any)=>{buttonEdit(e)}} id={`ed${el.id}`}>
                  <SimpleModal/>
                </div>
                </TableCell>
              <TableCell align="right"><button onClick={(e:any)=>{buttonDelete(e, props)}} id={`del${el.id}`}>Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

const mapStateToProps = (state: any) => ({
    serverArray: state.admin.serverArray
});

export default connect(
    mapStateToProps,
    dispatch=>({
        deleteUser: (id:number)=>{
            dispatch({type: 'DO_DELETE', id})
        }
    })
)(SimpleTable);