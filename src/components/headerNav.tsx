import React from 'react';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";



export const reg_logHeader = () => {
    return(
        <ul className="app-nav">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/regestration">Regestration</Link></li>
        </ul>
    )
}


export const headerAdmin = () => {
    return(
        <ul className="app-nav">
          <li><Link to="/adminHome">Login</Link></li>
          <li><Link to="/adminStatus">Regestration</Link></li>
        </ul>
    )
}

export const headerUser = () => {
    return(
        <ul className="app-nav">
          <li><Link to="/userHome">Login</Link></li>
          <li><Link to="/userStatus">Regestration</Link></li>
        </ul>
    )
}