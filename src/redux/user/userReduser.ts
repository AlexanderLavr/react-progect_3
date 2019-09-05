// import { DH_UNABLE_TO_CHECK_GENERATOR } from "constants";

export const initialState: any = {
  countBook: 0,
  serverBooks: {},
  selectBook:{}
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
    default:
      return{...state}
  }
}