export const initialState: any = {};

export function loginReduser(state:any = initialState, action:any){
    switch (action.type){
      case 'ADD_OBJ':
        return {
          ...action.obj
        }
       
      default:
        return state;
    }
}