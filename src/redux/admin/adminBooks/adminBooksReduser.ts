export const initialState: any = {
    openAdminModalBooks: false,
    arrayBooks: []
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

    
        case 'ARRAY_BOOKS':
            return {
            ...state,
            arrayBooks: action.dataBooks
        }
        
        default:
            return{...state}
    }
}
