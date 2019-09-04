import { DH_UNABLE_TO_CHECK_GENERATOR } from "constants";

export const initialState: any = {
  countBook: 0,
  serverBooks: {},
  selectBook:{},
  arrayBookInCart: []
};

export function userReduser(state:any = initialState, action:any){
    switch (action.type){
      case 'ARRAY_BOOKS':
        return {
          ...state,
          serverBooks: action.dataBooks
        }
      case 'CHOOSED_BOOK':
        return {
          ...state, 
          selectBook: action.selectBook
        }

      case 'START_ADD_BOOK_TO_CART':
          return { 
            ...state,
            countBook: action.countBooksInCart
          }
      case 'ADD_BOOK_TO_CART':
        return { 
          ...state,
          countBook: state.countBook + 1
        }


        case 'SET_ARRAY_BOOKS':
          console.log(action.array)
          debugger;

          return { 
            ...state,
            arrayBookInCart: action.array 
          }

      // case 'DO_EDIT_USER':
      //   return {
      //     ...state
      //   }
      // case 'EDIT_USER_SERVER':
      //   return {
      //     ...state, 
      //     editUserServer: action.data,
      //     openAdminModal: true
      //   }

      // case 'CLOSE_MODAL':
      //   return {
      //     ...state, 
      //     openAdminModal: false,
      //     editUserServer: {}
      //   }



      // case 'UPDATE_USER':
      //   return {
      //     ...state, 
      //     serverArray: action.updateUserArray,
      //     editUserServer: action.newEditUser
      //   }
      default:
        return{...state}
    }
}