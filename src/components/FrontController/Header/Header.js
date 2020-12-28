import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import ApartmentLogo from './../../../static/apartmentLogo.jpg'
import { Link } from "react-router-dom";
import { actions } from './../../ImportComponents'
import { connect } from 'react-redux'
const Header = (props) => {
    return (

        < Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Navbar.Brand href="/">
                <img align="left" src={ApartmentLogo} width={60} height={60} alt="400x500"></img>
                {/* <span>  </span> <h2 align="center">The Apartment Portal</h2> */}
            </Navbar.Brand>
            <Navbar.Brand>
                <h2 align="center">The Apartment Portal</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    {
                        props.auth ?
                            <>
                                <Nav.Link style={{ color: 'light' }} as={Link} to='/home' active>Home</Nav.Link>
                                <Nav.Link style={{ color: 'light' }} as={Link} to='/search' active>Search</Nav.Link>
                                <Nav.Link style={{ color: 'light' }} as={Link} to='/info' active>Info</Nav.Link>
                                <Nav.Link style={{ color: 'light' }} onClick={() => props.logOutAction()} active>LogOut</Nav.Link>
                            </> :
                            <>
                                <Nav.Link style={{ color: 'light' }} as={Link} to='/login' active>Login</Nav.Link>
                                <Nav.Link style={{ color: 'light' }} as={Link} to='/register' active>Register</Nav.Link>
                            </>

                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}
const mapStateToProps = state => {
    return {
        auth: state.auth.isAuthenticated,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        logOutAction: () => dispatch(actions.logOutAction())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)