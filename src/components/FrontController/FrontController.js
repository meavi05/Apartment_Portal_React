import React, { useState, Component } from "react";
import { Button } from 'react-bootstrap'
import Classes from './FrontController.module.css'
import Info from '../Info/Info'
import Main from '../Main/main'
import Login from '../Login/Login'
import { connect } from 'react-redux'
import * as  actions from './../../store/action'
import { Container,Row,Col } from 'react-bootstrap'
class FrontController extends Component {
    state = {
        showLogin: false,
        showHome: false
    }
    handleShow = (element) => this.setState({ ...this.state, [element]: true });
    handleCloseLogin = () => this.setState({ showLogin: false })
    authorizeUserMethod = () => {
        this.props.authorizeUserHandler();
    }
    render() {

        //alert(this.props.isAuthenticated)
        return (<Container fluid className={Classes.FrontControllerComponent} >
            <Row><Col></Col>
                <Col align='right'>
                {!this.props.isAuthenticated ?<>
                    <Button variant="outline-primary" onClick={() => this.handleShow('showLogin')}>Login</Button>
                    <Button variant="outline-warning">Info</Button></>
                    : <> <Button variant="outline-primary" onClick={() => this.handleShow('showHome')}>Home</Button>
                        <Button variant="outline-secondary">Find A Item</Button>
                          <Button variant="outline-warning">Info</Button> 
                           <Button variant="outline-danger" onClick={this.authorizeUserMethod}>LogOut</Button></>}
                        </Col>
                        
            </Row>
            <Row>
                <Col>
            {!this.props.isAuthenticated ?
                <>
                <Info></Info>
                <Login show={this.state.showLogin} handleClose={this.handleCloseLogin}
                    authorizeUser={this.authorizeUserMethod}></Login></> : 
                    <div className = {Classes.Content}><Main show ={true}></Main></div>
                    }
                    </Col>
                    </Row>
                    <Row>End</Row>
        </Container>

        );
    }
}
const mapStateToProps = state => {
    console.log(state)
    console.log('in Dispatch ' + state.authenicatedUser)
    return {
        isAuthenticated: state.authenicatedUser
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        authorizeUserHandler: () => dispatch(actions.authorizeUserAction())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FrontController)