import { connect } from 'react-redux';
import {AdminModalBooks} from '../components/admin/adminBooks/modalBooks';


export const parseEditBook = (editBook:any, oldBook:{})=>{
    let newBook = JSON.parse(JSON.stringify(oldBook))
    newBook.title = editBook.boockState.title;
    newBook.price = editBook.boockState.price;
    newBook.description = editBook.boockState.description;
    newBook.amount = editBook.boockState.amount;
    newBook.choosePhoto = editBook.boockState.choosePhoto;
    return newBook
}


const mapStateToProps = (state: any) => ({  
    openAdminModalBooks: state.adminBooks.openAdminModalBooks,
    labelOfModal: state.adminBooks.labelOfModal,
    title: state.adminBooks.title,
    price: state.adminBooks.price,
    description: state.adminBooks.description,
    amount: state.adminBooks.amount,
    choosePhoto: state.adminBooks.choosePhoto,
    idBooks: state.adminBooks.idBooks
  });
  
export default connect(
    mapStateToProps,
    dispatch=>({
        closeModalAddBooks: ()=>{
            dispatch({type: 'CLOSE_MODAL_ADD_BOOKS'})
        },
        saveNewBook: (boockState:{})=>{
            dispatch({type: 'DO_SAVE_BOOK', boockState})
        },
        editBook: (boockState:{})=>{
            dispatch({type: 'DO_SAVE_EDIT_BOOK', boockState})
        }
    })
  )(AdminModalBooks);

