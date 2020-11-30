import React, { useState } from 'react'

const Login = (props) => {
    console.log("Rendering Modal")
    const [mailId, setEmail] = useState('meavinash05@gmail.com')
    const [password, setPassword] = useState('')
    const authorizeUser = (e) => {
        e.preventDefault()
        props.authorizeUser(mailId, password)
        props.handleClose()
    }
    const changeHandler = (e, identifier) => {
        (identifier === "email") ? setEmail(e.target.value) : setPassword(e.target.value)
    }

    const form = (<form>
        <div className="form-group">
            <label>Email address</label>
            <input type="email" defaultValue='meavinash05@gmail.com' className="form-control" placeholder="Enter email" onChange={(e) => changeHandler(e, 'email')} />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => changeHandler(e, 'password')} />
        </div>

        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block"
            onClick={authorizeUser}><b>Log In</b></button>
        <p className="forgot-password text-right">
            <a href="fsak">Forgot password?</a>
        </p>
    </form>);
    return (
        // <CustomModal title='Log In' Body={form} show={props.show} handleClose={props.handleClose}></CustomModal>
        <div>{form}</div>
    )
}
export default Login
