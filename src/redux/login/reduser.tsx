export const initialState: any = {
  loginState: 'false'
};

export function loginReduser(state:any = initialState, action:any){
    switch (action.type){
     case 'DO_LOGIN':
        return {
          ...state, 
          loginState: true
        }
      default:
        return {...state}
    }
}