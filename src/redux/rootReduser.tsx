import {regestrationReduser} from './regestration/reduser';
import {loginReduser} from './login/reduser';
import {adminReduser} from './admin/adminReduser';
import {adminBooksReduser} from './admin/adminBooks/adminBooksReduser';
import { Reducer, combineReducers } from "redux";


  

const rootReducer: Reducer = combineReducers<any>({
    regestration: regestrationReduser,
    login: loginReduser,
    admin: adminReduser, 
    adminBooks: adminBooksReduser
});
  
export default rootReducer;