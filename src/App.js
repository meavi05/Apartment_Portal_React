import React from 'react';
import persistor from './index'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FrontController from './components/FrontController/FrontController'
import FindSearch from './components/ApartmentComponents/FindSearch/FindSearch'
import Welcome from './components/ApartmentComponents/Welcome/Welcome'
import Header from './components/FrontController/Header/Header'
import { Container, Row, Col } from 'react-bootstrap'
import Classes from './App.module.css'
import { connect } from 'react-redux'
import { Login, RegisterDetails } from './components/ImportComponents'


const App = props => {

  return (
    // <div style={{backgroundImage:'linear-gradient(to bottom,#051322,#15457c)',height:'100vh'}}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Container className={Classes.Container} fluid>
          <Row>
            <Col>
              <Header auth={props.auth} />
              {/* <div style={{ background: 'black' }}>Hello</div> */}
            </Col>
          </Row>
          <Row>
            <Col>
              {!props.auth ?
                <Switch>
                  <Route path="/login" render={() => <Login />}></Route>
                  <Route path="/register" render={() => <RegisterDetails />}></Route>
                  <Route path="/" render={() => <Welcome />}></Route>
                </Switch>
                :
                <Switch>
                  <Route path='/search' component={() => <FindSearch />}></Route>
                  <Route path='/home' component={() => <FrontController />}></Route>
                  <Route path="/" render={() => <Welcome />}></Route>
                </Switch>
              }
            </Col>
          </Row>
        </Container>
      </Router>
    </PersistGate >
    //  </div>
  )
};
const mapStateToProps = state => {
  return {
    auth: state.auth.isAuthenticated,
  };
}

export default connect(mapStateToProps)(App);
