import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import HeaderNav from './actionsComponents/actHeader';
import Login from './actionsComponents/actLogin';
import Main from './components/main';
import Regestration from './actionsComponents/actRegictration';
import UserHome from './components/user/userHome';//
import AdminHome from './actionsComponents/actAdminHome';//
import Profile from './actionsComponents/actProfile';


const store:any = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route component={HeaderNav} /> 
        <Route exact path="/" component={Main} /> 
        <Route path="/login" component={Login} /> 
        <Route path="/regestration" component={Regestration} />
        <Route path="/userHome" component={UserHome} />
        <Route path="/adminHome" component={AdminHome} />
        <Route path="/profile" component={Profile} />

        {/* <Route exact path="/error" component={GeneralError} /> */}
      </Router>
    </Provider>
  );
}

export default App;
