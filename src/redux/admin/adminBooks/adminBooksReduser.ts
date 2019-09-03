export const initialState: any = {
    openAdminModalBooks: false,
    arrayBooks: [],
    checkDeleteBooks: [],

    labelOfModal: 'Add Book',
    title: '',
    price: '',
    description: '',
    amount: '',
    choosePhoto: '',
    idBooks: null
    
  };
  
  export function adminBooksReduser(state:any = initialState, action:any){
      switch (action.type){
        case 'OPEN_MODAL_ADD_BOOKS':
          return {
            ...state,
            openAdminModalBooks: true
        }
        case 'CLOSE_MODAL_ADD_BOOKS':
            return {
            ...state,
            openAdminModalBooks: false
        }


        case 'DO_SAVE_BOOK':
            return {
            ...state
        }
        case 'APDATE_ARRAY_BOOKS':
            return {
            ...state,
            arrayBooks: action.data
        }


        case 'CHECK_DELET_BOOKS':
            return {
            ...state,
            checkDeleteBooks: action.arrayBooks
        }
        case 'NEW_BOOKS_ARR':
            return {
            ...state,
            arrayBooks: action.newArrBooks
        }

        case 'CHECK_EDIT_BOOK':
            // console.log(action)
            // debugger;
            return {
            ...state,
            labelOfModal: 'Edit Book',
            title: action.editBook.title,
            price: action.editBook.price,
            description: action.editBook.description,
            amount: action.editBook.amount,
            choosePhoto: action.editBook.choosePhoto,
            openAdminModalBooks: true,
            idBooks: action.id.id
        }




    
        case 'ARRAY_BOOKS'://in download adminHome
            return {
            ...state,
            arrayBooks: action.dataBooks
        }
        default:
        return{...state}
    }
}
