import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Login from './login';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Login}/>
            <Route path='/dashboard' component={Dashboard}/>
        </div>
    </BrowserRouter>
 , document.querySelector(".contain")
);


