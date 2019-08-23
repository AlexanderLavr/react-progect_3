import React from 'react';
import Login from './actionsComponents/actLogin';
import Main from './components/main';
import Regestration from './actionsComponents/actRegictration';
import './App.css';
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
// import GeneralError from './components/error';

const store:any = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <ul className="app-nav">
          {/* <li><Link to="/">Main</Link></li> */}
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/regestration">Regestration</Link></li>
        </ul>
        <Route exact path="/" component={Main} /> 
        <Route path="/login" component={Login} /> 
        <Route path="/regestration" component={Regestration} />


        {/* <Route exact path="/error" component={GeneralError} /> */}
      </Router>
    </Provider>
  );
}

export default App;
