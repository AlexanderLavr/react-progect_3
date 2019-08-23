import React from 'react';
import Login from './actionsComponents/actLogin';
import Main from './components/main';
import Regestration from './actionsComponents/actRegictration';
import './App.css';
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import {reg_logHeader} from './components/headerNav';

const store:any = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        {reg_logHeader()}
        <Route exact path="/" component={Main} /> 
        <Route path="/login" component={Login} /> 
        <Route path="/regestration" component={Regestration} />


        {/* <Route exact path="/error" component={GeneralError} /> */}
      </Router>
    </Provider>
  );
}

export default App;
