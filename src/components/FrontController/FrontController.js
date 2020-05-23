import React, { Component } from "react";
import Apartment1 from './../../static/apartment1.jpg'
import Apartment2 from './../../static/apartment2.jpg'
import Apartment3 from './../../static/apartment3.jpg'
import { Info, SignUp, Login, HomePage, actions } from '../ImportComponents.js'
import { Alert,Container, Row, Col, Button,Carousel } from 'react-bootstrap'
import { connect } from 'react-redux'


class FrontController extends Component {
    state = {
        showLogin: false,
        showHome: false,
        findItem: false,
        showSignUp: false
    }
    handleShow = (element) => this.setState({ ...this.state, [element]: true });
    handleCloseLogin = (element) => this.setState({ [element]: false })
    authorizeUserMethod = (email, password) => {
        this.props.authorizeUserHandler(email, password);
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
        console.log('RENDERING FRONT CONTROLLER')
        return (
        <Container fluid>
            <Row>
                <Col md="7"> <h2 align="center">The Apartment Portal</h2></Col>
                <Col align='right'>
                        {!this.props.isAuthenticated ? <>
                            <Button variant="primary" onClick={() => this.handleShow('showLogin')}>Login  </Button>
                            <Button variant="dark" onClick={() => this.handleShow('showSignUp')}>Sign Up</Button>
                            <Button variant="warning">Info</Button></>
                            : <> <Button variant="primary" onClick={() => this.handleShow('showHome')}>Home</Button>
                                <Button variant="secondary" onClick={() => this.handleShow('findItem')}>Search</Button>
                                <Button variant="warning">Info</Button>
                                <Button variant="danger" onClick={this.authorizeUserMethod}>LogOut</Button></>}
                    </Col>
                </Row>
                {!this.props.isAuthenticated ? <Row><Col>
                 {/* </Col>
                 <Col> */}
                 <br></br><br></br>
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
                         <br></br>
                        <Alert variant="primary">jdflsdlkfjdsklfjdsklfjdsklfjdklsfjdkslfjdklsf
                                    dfjdskfjsdkfjdskfldsfjdsklfjdsklfdks
                                    jdsfdlsfjdslkfjdsklfjdskfl
                                    kjsfkldsjfdskljfdsklfdsj
                                </Alert>
                    </Col><Col><Info/></Col>
                   
            </Row>:null
                }
            <Row>
                   <Col>
                        {!this.props.isAuthenticated ?
                            <>
                                {this.state.showSignUp?
                                    <SignUp
                                        show={this.state.showSignUp}
                                        signUpSubmitHandler={(userData) => this.signUpHandler(userData)}
                                        handleClose={() => { this.handleCloseLogin('showSignUp') }}>
                                    </SignUp>
                                :
                                    null}
                                {this.state.showLogin?
                                    <Login
                                        show={this.state.showLogin}
                                        handleClose={() => { this.handleCloseLogin('showLogin') }}
                                        authorizeUser={(email, password) => this.authorizeUserMethod(email, password)}>
                                    </Login>
                                :
                                    null}
                                </>
                            :
                            <div>
                                <HomePage userDetail={this.props.userDetail}></HomePage>
                            </div>
                        }
                    </Col>
            </Row>
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
        authorizeUserHandler: (email, password) => dispatch(actions.authorizeUserAction(email, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FrontController)