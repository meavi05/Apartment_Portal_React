import React from 'react';
import persistor from './index'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import FrontController from './components/FrontController/FrontController'
import FindSearch from './components/ApartmentComponents/FindSearch/FindSearch'


const App = props => {
  return (
    // <div style={{backgroundImage:'linear-gradient(to bottom,#051322,#15457c)',height:'100vh'}}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <Route path='/search' component={() => <FindSearch />}></Route>
          <Route exact path="/" render={() => <Redirect to="/home"></Redirect>} />
          <Route path="/" render={() => <FrontController />}></Route>

        </Switch>

      </Router>
    </PersistGate>
    //  </div>
  )
};

export default App;
