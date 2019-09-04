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

      case 'DO_DELETE_USER':
        return {
          ...state
        }
      case 'NEW_ADMIN_ARRAY':
        return {
          ...state, 
        serverArray: action.data
        }

      case 'DO_EDIT_USER':
        return {
          ...state
        }
      case 'EDIT_USER_SERVER':
        return {
          ...state, 
          editUserServer: action.data,
          openAdminModal: true
        }

      case 'CLOSE_MODAL':
        return {
          ...state, 
          openAdminModal: false,
          editUserServer: {}
        }



      case 'UPDATE_USER':
        return {
          ...state, 
          serverArray: action.updateUserArray,
          editUserServer: action.newEditUser
        }
      default:
        return{...state}
    }
}