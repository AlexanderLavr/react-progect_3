import React from 'react';
import { Link } from "react-router-dom";

const Main: React.FC = () => {
    return(
        <div className="main">
            This ig Main Page!
            <div>
                <Link to="./">На главную</Link>
            </div>
            
        </div>
    )
}
export default Main;