import React from 'react';
import Login from './components/login';
import Main from './components/main';
import Regestration from './components/regestration';
import './App.css';
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const store:any = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <ul className="app-nav">
          <li><Link style={{textDecoration: 'none'}}to="/">Main</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/regestration">Regestration</Link></li>
        </ul>
        <Route exact path="/" component={Main} /> 
        <Route path="/login" component={Login} /> 
        <Route path="/regestration" component={Regestration} />
      </Router>
    </Provider>
  );
}

export default App;
