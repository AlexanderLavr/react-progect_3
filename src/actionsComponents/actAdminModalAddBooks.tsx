import { connect } from 'react-redux';
import {AdminModalBooks} from '../components/admin/adminBooks/modalBooks';





const mapStateToProps = (state: any) => ({  
    openAdminModalBooks: state.adminBooks.openAdminModalBooks 
  });
  
export default connect(
    mapStateToProps,
    dispatch=>({
        closeModalAddBooks: ()=>{
            dispatch({type: 'CLOSE_MODAL_ADD_BOOKS'})
        },
        saveNewBook: (boockState:{})=>{
            dispatch({type: 'DO_SAVE_BOOK', boockState})
        }
    })
  )(AdminModalBooks);

