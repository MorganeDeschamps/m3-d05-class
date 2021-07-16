import React from 'react';
import './App.css';

import { BrowserRouter,  Route, Link, Switch } from 'react-router-dom';

import HomePageView from './views/HomePage';
import FirstPageView from './views/FirstPage';
import SecondPageView from './views/SecondPage';

function App() {
  return (
    <div className='App'>
      
      <h1>Hello Pizza Bytes</h1>
      
      <BrowserRouter>

        <nav>
          <span>
            <Link to='/first-page'>Link to first-page</Link>
          </span>
          <span>
            <Link to='/second-page/jose'>Jose's Profile</Link>
          </span>
          <span>
            <Link to='/second-page/santi'>Santi's Profile</Link>
          </span>
        </nav>

        <Switch>
      
          <Route path='/second-page/:name'  component={SecondPageView}/>
          <Route path='/first-page'  component={FirstPageView}/>

          <Route path='/' component={HomePageView}/>

        </Switch>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
