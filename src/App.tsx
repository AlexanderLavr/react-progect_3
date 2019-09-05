import React from 'react';
import '../src/style/App.css';
import { Provider } from 'react-redux';
import configureStore from "./redux/store";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HeaderNav from './actionsComponents/actHeader';
import Login from './actionsComponents/actLogin';
import Main from './components/main';
import Regestration from './actionsComponents/actRegictration';
import UserHome from './actionsComponents/actUserHome';
import AdminHome from './actionsComponents/actAdminHome';
import Profile from './actionsComponents/actProfile';
import viewBook from './components/user/viewBook';
import shopingCart from './components/user/shopingCart';

// import { connect } from 'react-redux';
// import { render } from 'react-dom';


const store:any = configureStore();

const App: React.FC = (props:any) => {
  console.log(props)
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
        <Route path="/shopingCart" component={shopingCart} />
        <Route path="/viewBook/:id" component={viewBook} /> 
      </Router>
    </Provider>
  );
}
export default App;
