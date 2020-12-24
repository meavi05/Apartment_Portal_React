import React, { Component } from "react";
import Header from './Header/Header.js'
import { Authenticator, Register, HomePage, actions, ApartmentDetails, MovingCarousel } from '../ImportComponents.js'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from "react-router-dom";
class FrontController extends Component {
    state = {
        showLogin: false,
        showSignUp: false
    }
    handleShow = (element) => this.setState({ ...this.state, [element]: true });
    handleCloseLogin = (element) => this.setState({ [element]: false })
    registerUserHandler = (userData) => {
        this.props.registerUserHandler(userData);
        this.setState({ showSignUp: false })
    }
    authorizeUserMethod = (email, password) => {
        this.props.authorizeUserHandler(email, password);
        // if (this.props.isAuthenticated) {
        //     this.setState({
        //         invalidUserMessage: null
        //     })
        //     this.props.history.push('/home')
        // }
        // else {
        //     this.setState({
        //         invalidUserMessage: 'Invalid Credentials'
        //     })
        // }
    }
    logOutAction = () => {
        this.props.logOutAction();
        this.props.history.push('/')
    }
    render() {
        console.log('RENDERING FRONT CONTROLLER')
        return (
            <Container fluid>
                <Header
                    isAuthenticated={this.props.isAuthenticated}
                    logOutAction={this.logOutAction}></Header>
                <br></br>
                {
                    !this.props.isAuthenticated ?
                        <Row>
                            <Col>
                                <br></br>
                                <br></br>
                                <MovingCarousel />
                            </Col>
                            <Col>
                                <Authenticator
                                    handleShow={this.handleShow}
                                    invalidUserMessage={this.props.authenticatedFailure}
                                    authorizeUser={(email, password) => this.authorizeUserMethod(email, password)} />
                            </Col>
                            <Col>
                                <>
                                    {this.state.showSignUp ?
                                        <Register
                                            show={this.state.showSignUp}
                                            signUpSubmitHandler={(userData) => this.registerUserHandler(userData)}
                                            handleClose={() => { this.handleCloseLogin('showSignUp') }} />
                                        :
                                        null}
                                </>
                            </Col>
                        </Row>
                        :
                        <Row>
                            <Col>
                                <div>
                                    <Switch>
                                        <Route exact path='/home'
                                            component={(props) => <HomePage {...this.props}></HomePage>}>
                                        </Route>
                                        <Route path='/apartment/:apartmentId'
                                            component={(props) =>
                                                <ApartmentDetails
                                                    {...this.props}{...props}></ApartmentDetails>}>
                                        </Route>
                                    </Switch>
                                </div>
                            </Col>
                        </Row>
                }
            </Container>

        );
    }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        authenticatedFailure: state.app.authenticatedFailure,
        userDetail: state.app.userData
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        authorizeUserHandler: (email, password) => dispatch(actions.authorizeUserAction(email, password)),
        registerUserHandler: (userData) => actions.registerUser(userData),
        logOutAction: () => dispatch(actions.logOutAction())
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FrontController))