import {regestrationReduser} from './regestration/reduser';
import {loginReduser} from './login/reduser';
import {adminReduser} from './admin/adminReduser';
import { Reducer, combineReducers } from "redux";


  

const rootReducer: Reducer = combineReducers<any>({
    regestration: regestrationReduser,
    login: loginReduser,
    admin: adminReduser
});
  
export default rootReducer;