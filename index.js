import React from 'react';
import ReactDOM from 'react-dom';
import './node_modules/bootstrap/dist/css/bootstrap.css';

import HomePage from './components/homePage';
const App = ()=>{
    return(
        <div> <HomePage /> </div>
    );
}


ReactDOM.render(<App />, document.getElementById("app"));