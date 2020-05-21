import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import CustomModal from '../../UI/CustomModal'
import Classes from '../SignUp/SignUp.module.css'

class SignUp extends Component {
    state = {
        userName: '',
        emailId: '',
        mobile: '',
        dob: '',
        gender: '',
        country: '',
        password: '',
        userType: '',
        isFormValid: true,
        isUserNameValid: true,
        isUserNameErrorMessage: '',
        isEmailIdValid: true,
        isEmailIdValidErrorMessage: '',

    }

    checkValid = (identifier, value) => {
        switch (identifier) {
            case 'userName': {
                if (value) {
                    this.setState({
                        userName: value,
                        isUserNameValid: true,
                        isUserNameErrorMessage: ''
                    })
                } else {
                    this.setState({
                        userName: value,
                        isUserNameValid: false,
                        isUserNameErrorMessage: 'Please enter the User Name.'
                    })
                }
                break;
            }
            case 'password': {
                if (value) {
                    this.setState({
                        password: value
                    })
                }
                break;
            }

            case 'emailId': {
                const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
                const result = pattern.test(value);
                if (result) {
                    this.setState({
                        emailId: value,
                        isEmailIdValid: true,
                        isEmailIdValidErrorMessage: ''
                    })
                } else {
                    this.setState({
                        emailId: value,
                        isEmailIdValid: false,
                        isisEmailIdValidMessage: 'Please enter the User Name.'
                    })
                }
                break;
            }
            case 'mobile': {
                if (value) {
                    this.setState({
                        mobile: value
                    })
                }
                break;
            }
            case 'dob': {
                if (value) {
                    this.setState({
                        dob: value
                    })
                }
                break;
            }

            case 'gender': {
                if (value) {
                    this.setState({
                        gender: value
                    })
                }
                break;
            }
            case 'userType': {
                if (value) {
                    this.setState({
                        userType: value
                    })
                }
                break;
            }
            default: break;
        }

    }
    onChangeHandler = (identifier, event) => {
        this.checkValid(identifier, event.target.value)
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        alert('Submitted')
        var userData = {
            userName: this.state.userName,
            email: this.state.emailId,
            password: this.state.password,
            mobile: this.state.mobile,
            dob: this.state.dob,
            gender: this.state.gender,
            userType: this.state.userType
        };

        this.props.signUpSubmitHandler(userData);
    }
    render() {
        console.log("Rendering SignUp")


        const form = (<form className={Classes.SignUp} onSubmit={this.onSubmitHandler}>
            <input name='userName' type="text" placeholder='UserName' onChange={this.onChangeHandler.bind(this, 'userName')}></input>
            {!this.state.isUserNameValid ? <label style={{ color: "red" }}>{this.state.isUserNameErrorMessage}</label> : null}
            <input name='password' type="text" placeholder='password' onChange={this.onChangeHandler.bind(this, 'password')}></input>
            <input name='email' type="email" placeholder='Email' onChange={(e) => this.onChangeHandler('emailId', e)}></input>
            {!this.state.isEmailIdValid ? <label style={{ color: "red" }}>{this.state.isEmailIdValidErrorMessage}</label> : null}
            <input name='mobile' type="text" placeholder='Mobile' onChange={this.onChangeHandler.bind(this, 'mobile')}></input>
            <ul>
                <input
                    name="gender"
                    type="radio"
                    value='female'
                    onChange={this.onChangeHandler.bind(this, 'gender')}
                    checked={this.state.gender === 'female'}
                />
                <label htmlFor="female">
                    <b>Female</b>
                </label>
                <input
                    name="gender"
                    type="radio"
                    value='male'
                    checked={this.state.gender === 'male'}
                    onChange={this.onChangeHandler.bind(this, 'gender')}
                /><label htmlFor="male">
                    <b>Male</b>
                </label>
            </ul>
            <ul>
                <input
                    name="tenant"
                    type="radio"
                    value='tenant'
                    checked={this.state.userType === 'tenant'}
                    onChange={this.onChangeHandler.bind(this, 'userType')}
                />
                <label htmlFor="tenant">
                    <b>Tenant</b>
                </label>
                <input
                    name="owner"
                    type="radio"
                    value='owner'
                    checked={this.state.userType === 'owner'}
                    onChange={this.onChangeHandler.bind(this, 'userType')}
                />
                <label htmlFor="owner">
                    <b>Owner</b>
                </label>
                </ul>
                <input name='dob' type="date" onChange={this.onChangeHandler.bind(this, 'dob')}></input><br></br>
                <select>
                    <option value='' disabled defaultValue>Select Your Country</option>
                    <option value=''>India</option>
                    <option value=''>Australia</option>
                    <option value=''>England</option>
                </select> <br></br>
                <Button type="submit">Submit</Button>

        </form>);
        return (
            <CustomModal title='Sign Up' Body={form} show={this.props.show} handleClose={this.props.handleClose}></CustomModal>)
    }
}
export default SignUp
