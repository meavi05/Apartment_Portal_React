import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import FrontController from './components/FrontController/FrontController'


const App = props => {
  return (
    // <div style={{backgroundImage:'linear-gradient(to bottom,#051322,#15457c)',height:'100vh'}}>
      <Router>
        <Switch>
          <Route path = "/" component ={FrontController}></Route>
        </Switch>
     </Router>
    //  </div>
  )};

export default App;
