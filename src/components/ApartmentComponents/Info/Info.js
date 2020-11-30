import React from 'react'
import Login from '../../../components/FrontController/Login/Login'

import { Card, Button } from 'react-bootstrap'
const Info = (props) => {
  return (<div align="left"><h3 style={{ color: 'white' }}>Welcome to Apartment Portal </h3>
    <Card style={{ width: '25rem', height: '29rem' }}>
      <Card.Body>
        <Login authorizeUser={(email, password) => props.authorizeUser(email, password)}></Login>
        <br></br>
        <div align="center">
          <Button variant="success" align="center"
            onClick={() => props.handleShow('showSignUp')}><b>Click here to register</b></Button>
        </div>
      </Card.Body>
    </Card>
  </div>)
}

export default Info