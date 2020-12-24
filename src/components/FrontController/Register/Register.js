import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import CustomModal from '../../UI/CustomModal'

class Register extends Component {
    state = {
        userName: '',
        emailId: '',
        mobile: '',
        dob: '',
        gender: 'F',
        country: '',
        password: '',
        userType: '',
        isFormValid: true,
        isUserNameValid: true,
        isUserNameErrorMessage: '',
        isEmailIdValid: true,
        isEmailIdValidErrorMessage: '',
        validated: false
    }
    onChangeHandler = (evt) => {
        const value = evt.target.value;
        this.setState({
            [evt.target.name]: value
        });
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            this.setState({
                validated: true
            })
            return
        }

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
        console.log("Rendering Register..")


        const form = (<Form noValidate validated={this.state.validated} onSubmit={this.onSubmitHandler}>
            <Form.Group>
                <Form.Row>
                    <Form.Control
                        required
                        type="text"
                        placeholder="user name"
                        name="userName"
                        onChange={this.onChangeHandler.bind(this)} />
                </Form.Row>
                <Form.Row>
                    <Form.Control
                        required
                        type="password"
                        placeholder="password"
                        name="password"
                        onChange={this.onChangeHandler.bind(this)} />
                </Form.Row>
                <Form.Row>
                    <Form.Control
                        required
                        type="email"
                        placeholder="email"
                        name="emailId"
                        onChange={this.onChangeHandler.bind(this)} />
                </Form.Row>
                <Form.Row>
                    <Form.Control
                        required
                        type="number"
                        placeholder="mobile"
                        name="mobile"
                        onChange={this.onChangeHandler.bind(this)} />
                </Form.Row>
                <Form.Row>
                    <Form.Check
                        name="gender"
                        inline label="Female"
                        type="radio"
                        value='F'
                        checked={this.state.gender === "F"}
                        onChange={this.onChangeHandler.bind(this)} />
                    <Form.Check
                        name="gender"
                        inline label="Male"
                        type="radio"
                        value='M'
                        checked={this.state.gender === "M"}
                        onChange={this.onChangeHandler.bind(this)} />
                </Form.Row>
                <Form.Row>
                    <Form.Control
                        required
                        type="date"
                        placeholder="date of birth"
                        name="dob"
                        onChange={this.onChangeHandler.bind(this)} />
                </Form.Row>
                <Form.Row>
                    <Form.Control
                        required
                        as="select">
                        <option value='' default>choose your country...</option>
                        <option value=''>Australia</option>
                        <option value=''>India</option>
                        <option value=''>England</option>
                    </Form.Control>
                </Form.Row>
                <Form.Row>
                    <Button type="submit">Submit</Button>
                </Form.Row>

            </Form.Group></Form>);
        return (
            <CustomModal title='Register' Body={form} show={this.props.show} handleClose={this.props.handleClose}></CustomModal>)
    }
}
export default Register
