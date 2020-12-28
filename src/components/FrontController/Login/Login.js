import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Button, Alert } from 'react-bootstrap'

import { thunkActions } from '../../ImportComponents'
import { connect } from 'react-redux'


const Login = (props) => {
    console.log("Rendering Login")
    const [mailId, setEmail] = useState('meavinash05@gmail.com')
    const [password, setPassword] = useState('')
    const authorizeUser = (e) => {
        e.preventDefault()
        props.authorizeUser(mailId, password)
        props.history.push('/home');
    }
    const changeHandler = (e) => {
        (e.target.name === "email") ? setEmail(e.target.value) : setPassword(e.target.value)
    }

    return (
        <div>
            <Form onSubmit={authorizeUser}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" onChange={(e) => { changeHandler(e) }} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" onChange={(e) => { changeHandler(e) }} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name="rememberMe" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
  </Button>
            </Form>

            {props.invalidUserMessage ?
                <Alert variant="danger" align="center">{props.invalidUserMessage}</Alert> : null}
        </div>

    )
}

const mapStateToProps = state => {
    return {
        authenticatedFailure: state.app.authenticatedFailure
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        authorizeUser: (email, password) => dispatch(thunkActions.authorizeUserAction(email, password))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
