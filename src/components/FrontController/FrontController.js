import React, { Component } from "react";
import Apartment1 from './../../static/apartment1.jpg'
import Apartment2 from './../../static/apartment2.jpg'
import Apartment3 from './../../static/apartment3.jpg'
import Header from './Header/Header.js'
import { Info, SignUp, Login, HomePage, actions, ApartmentDetails } from '../ImportComponents.js'
import { Alert, Container, Row, Col, Carousel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from "react-router-dom";


class FrontController extends Component {
    state = {
        showLogin: false,
        showSignUp: false
    }
    handleShow = (element) => this.setState({ ...this.state, [element]: true });
    handleCloseLogin = (element) => this.setState({ [element]: false })
    authorizeUserMethod = (email, password) => {
        this.props.authorizeUserHandler(email, password);
        this.props.history.push('/home')
    }
    logOutAction = () => {
        this.props.logOutAction();
        this.props.history.push('/')
    }
    hello() { alert('hello') }
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
        console.log('RENDERING FRONT CONTROLLER')
        return (

            <Container fluid>
                <Header
                    isAuthenticated={this.props.isAuthenticated}
                    handleShow={this.handleShow}
                    logOutAction={this.logOutAction}></Header>
                <br></br>
                {
                    !this.props.isAuthenticated ?
                        <Row>
                            <Col>
                                <br></br>
                                <br></br>

                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            src={Apartment1}
                                            width={800} height={400} alt="400x500"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            src={Apartment2}
                                            width={800} height={400} alt="400x500"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            src={Apartment3}
                                            width={800} height={400} alt="400x500"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                                <Alert variant="primary">
                                    The idea behind creating this Apartment Portal is to have the transparency and clear view of the Apartment.
                                </Alert>
                                <br></br>
                            </Col>
                            <Col>
                                <Info
                                    handleShow={this.handleShow}
                                    authorizeUser={(email, password) => this.authorizeUserMethod(email, password)} />
                            </Col>
                            <Col>
                                <>
                                    {this.state.showSignUp ?
                                        <SignUp
                                            show={this.state.showSignUp}
                                            signUpSubmitHandler={(userData) => this.signUpHandler(userData)}
                                            handleClose={() => { this.handleCloseLogin('showSignUp') }}>
                                        </SignUp>
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
        isAuthenticated: state.app.authenicatedUser,
        userDetail: state.app.userData
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        authorizeUserHandler: (email, password) => dispatch(actions.authorizeUserAction(email, password)),
        logOutAction: () => dispatch(actions.logOutAction())
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FrontController))