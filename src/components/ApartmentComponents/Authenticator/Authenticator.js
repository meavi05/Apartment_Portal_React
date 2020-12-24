import React from 'react'
import Login from '../../FrontController/Login/Login'
import { Alert } from 'react-bootstrap'

import { Card, Button } from 'react-bootstrap'
const Authenticator = (props) => {
  return (<div align="left"><h3 style={{ color: 'white' }}>Welcome to Apartment Portal </h3>
    <Card style={{ width: '25rem', height: '29rem' }}>
      <Card.Body>
        <Login authorizeUser={(email, password) => props.authorizeUser(email, password)}></Login>
        {props.invalidUserMessage ?
          <Alert variant="danger" align="center">{props.invalidUserMessage}</Alert> : null}
        <br></br>
        <div align="center">
          <Button variant="success" align="center"
            onClick={() => props.handleShow('showSignUp')}><b>Click here to register</b></Button>
        </div>
      </Card.Body>
    </Card>
  </div>)
}

export default Authenticator