export const initialState: any = {
  serverArray: [],
  editUserServer: {},
  openAdminModal: false
};

export function adminReduser(state:any = initialState, action:any){
    switch (action.type){
      case 'DO_ADMIN':
        return {
          ...state
        }
      case 'ADMIN_ARRAY':
        return {
          ...state, 
        serverArray: action.data
        }
      case 'EDIT_USER_SERVER':
        return {
          ...state, 
          editUserServer: action.data
        }
      case 'OPEN_MODAL':
        return {
          ...state, 
          openAdminModal: true
        }
      case 'DO_DELETE_USER':
        return {
          ...state
        }
      case 'CLOSE_MODAL':
        return {
          ...state, 
          openAdminModal: false,
          editUserServer: {}
        }
        default:
          return{
            ...state
        }
    }
}