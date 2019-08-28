


export const initialState: any = {
  serverArray: undefined
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
        default:
          return{...state}
    }
}