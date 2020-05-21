import React from 'react';
import ABC from '../src/components/ABC'
import BCD from '../src/components/BCD'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import FrontController from './components/FrontController/FrontController'


const App = props => {
  return (<>
    <Router>
      <div>
        <Route exact path ="/" component = {ABC}></Route>
        <Route  path ="/home" component = {BCD}></Route>
      </div>
    </Router>
   <FrontController></FrontController></>)
};

export default App;
