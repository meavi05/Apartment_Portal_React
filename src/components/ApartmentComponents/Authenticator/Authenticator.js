import React from 'react'
import Login from '../../FrontController/Login/Login'

import { Alert } from 'react-bootstrap'

const Authenticator = (props) => {
  return (
    <div>
      <Login authorizeUser={(email, password) => props.authorizeUser(email, password)}></Login>
      {props.invalidUserMessage ?
        <Alert variant="danger" align="center">{props.invalidUserMessage}</Alert> : null}
    </div>
  )
}

export default Authenticator