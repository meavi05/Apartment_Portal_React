import React, { Component } from "react";
import { Button } from 'react-bootstrap'
import Classes from './FrontController.module.css'
import Info from '../ApartmentComponents/Info/Info'
// import Main from '../Main/main'
import HomePage from '../ApartmentComponents/Home/HomePage'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
import FindItem from '../IngredientComponents/Ingredients/FindItem/FindItem'
import { connect } from 'react-redux'
import * as  actions from './../../store/action'
import { Container, Row, Col } from 'react-bootstrap'
class FrontController extends Component {
    state = {
        showLogin: false,
        showHome: false,
        findItem: false,
        showSignUp: false
    }
    handleShow = (element) => this.setState({ ...this.state, [element]: true });
    handleCloseLogin = (element) => this.setState({ [element]: false })
    authorizeUserMethod = (email,password) => {
        this.props.authorizeUserHandler(email,password);
    }
    signUpHandler = (userData) => {
        alert('Front Controller Sign Up Handler')
        console.log(userData)
        fetch('http://localhost:8080/addUser', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json()).then(responseData => {
            alert('Success')
            this.setState({ showSignUp: false, showLogin: true })
        }).catch(error => {
            alert(error.message)
        })
    }
    render() {

        //alert(this.props.isAuthenticated)
        return (<Container fluid className={Classes.FrontControllerComponent} >
            <Row><Col></Col>
                <Col align='right'>
                    {!this.props.isAuthenticated ? <>
                        <Button variant="outline-primary" onClick={() => this.handleShow('showLogin')}>Login  </Button>
                        <Button variant="outline-light" onClick={() => this.handleShow('showSignUp')}>Sign Up</Button>
                        <Button variant="outline-warning">Info</Button></>
                        : <> <Button variant="outline-primary" onClick={() => this.handleShow('showHome')}>Home</Button>
                            <Button variant="outline-secondary" onClick={() => this.handleShow('findItem')}>Search</Button>
                            <Button variant="outline-warning">Info</Button>
                            <Button variant="outline-danger" onClick={this.authorizeUserMethod}>LogOut</Button></>}
                </Col>

            </Row>
            <Row>
                <Col>
                    {!this.props.isAuthenticated ?
                        <>
                            <Info></Info>
                            <SignUp
                                show={this.state.showSignUp}
                                signUpSubmitHandler={(userData) => this.signUpHandler(userData)}
                                handleClose={() => { this.handleCloseLogin('showSignUp') }}>
                            </SignUp>
                            <Login
                                show={this.state.showLogin}
                                handleClose={() => { this.handleCloseLogin('showLogin') }}
                                authorizeUser={(email,password) => this.authorizeUserMethod(email,password)}>
                            </Login></>
                        :
                            <div className={Classes.Content}>
                                {/* <Main
                                    show={true}>
                                </Main> */}
                                <HomePage userDetail = {this.props.userDetail}>

                                </HomePage>
                                <FindItem
                                    show={this.state.findItem}
                                    handleClose={() => { this.handleCloseLogin('findItem') }}>
                                </FindItem>
                            </div>
                    }
                </Col>
            </Row>
        </Container>

        );
    }
}
const mapStateToProps = state => {
    console.log(state)
    console.log('in Dispatch ' + state.authenicatedUser)
    return {
        isAuthenticated: state.app.authenicatedUser,
        userDetail: state.app.userData
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        authorizeUserHandler: (email,password) => dispatch(actions.authorizeUserAction(email,password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FrontController)