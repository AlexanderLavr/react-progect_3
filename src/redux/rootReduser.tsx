import {regestrationReduser} from './regestration/reduser';
import {loginReduser} from './login/reduser';
import { Reducer, combineReducers } from "redux";


  

const rootReducer: Reducer = combineReducers<any>({
    regestration: regestrationReduser,
    login: loginReduser
});
  
export default rootReducer;