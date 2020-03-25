import React,{useState} from 'react'
import { Modal } from 'react-bootstrap'

const Login = (props) => {
    console.log("Rendering Modal")
    const authorizeUser = () => {
        props.authorizeUser()
        props.handleClose()
    }
       return (
            <Modal show= {props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block"
                        onClick = {authorizeUser}>Submit</button>
                        <p className="forgot-password text-right">
                            <a href="#" style={{ color: 'white' }}>Forgot password?</a>
                        </p>
                    </form>
                </Modal.Body>
            </Modal>
    )
}
export default Login
