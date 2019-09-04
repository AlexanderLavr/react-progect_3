import { connect } from 'react-redux';
import {UserHome} from '../components/user/userHome';
import {HeaderProc} from '../redux/header/actions';


let parceId = (id:any):number=>{
    let regExpNum = /\d+/;
    let result = Number(id.match(regExpNum)[0]);
    return result
}  


export const getMatch = (selectBooksArr:any, id:number)=>{// check on match
    let match:boolean = false;
    for(let element of selectBooksArr){
        if(id === element.id){
            return match = true;
        }
    }
    return match
}


export const countTotalPrice = (arr:any):number =>{
    let totalPrace:number = 0;
    for(let element of arr){
        totalPrace += parseInt(element.price)
    }
    return totalPrace
}

export const buttonDelete = (e:any, arr:any):void =>{
    let buttonDelete:HTMLButtonElement = e.target;
    let id = parceId(buttonDelete.id)
    for(let element of arr){
        if(id === element.id){
            let index = arr.indexOf(element);
            arr.splice(index, 1);
        }
    }
    localStorage.setItem('selectBoock', JSON.stringify(arr))
}
export const getState = () =>{
    // localStorage.getItem(('selectBoock') || '[]')
    // let selectBooksArr:any = JSON.parse(localStorage.getItem('selectBoock') || '[]');
    // return selectBooksArr
} 




const mapStateToProps = (state: any) => ({
    serverBooks: state.userBooks.serverBooks,
});

export default connect(
    mapStateToProps,
    dispatch=>({
        queryServer: ()=>{
            dispatch({type: 'DO_USER'})
        }
    })
)(UserHome);