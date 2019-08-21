export const initialState: any = {
    firstname: '',
    secondname: '',
    email: '',
    password: ''
};

export function regestrationReduser(state:any = initialState, action:any){
    switch (action.type){
      case 'ADD_OBJ':
        return {
            ...state,
            regestration : action.obj
        }
        case 'SUCCSSES': {
            return {
              ...state,
              regestration: {name: 'czczc'}
            };
          }
       
      default:
        return state;
    }
}