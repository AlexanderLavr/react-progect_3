import React from 'react';
import { Redirect } from 'react-router-dom'

const Main: React.FC = () => {
    let redirect:any = localStorage.getItem('isAdmin');
    if(redirect === 'true'){
        return <Redirect to='/adminHome' />
    }else if(redirect === 'false'){
        return <Redirect to='/userHome' />
    }
    return(
        <div className="main">
           <h1>Welcom to here!</h1>
           <h2>Please Login or Register!</h2>
        </div>
    )
}
export default Main;