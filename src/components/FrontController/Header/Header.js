import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import ApartmentLogo from './../../../static/apartmentLogo.jpg'
import { Link } from "react-router-dom";
const Header = (props) => {
    return (
        < Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
            <Navbar.Brand href="/">
                <img align="left" src={ApartmentLogo} width={60} height={60} alt="400x500"></img>
                <span> </span> <h2 align="center">The Apartment Portal</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    {
                        !props.isAuthenticated ?
                            <>
                                <Nav.Link style={{ color: 'black' }} onClick={() => props.handleShow('showLogin')}>Login</Nav.Link>
                                <Nav.Link style={{ color: 'black' }} onClick={() => props.handleShow('showSignUp')}>Sign Up</Nav.Link>
                            </>
                            :
                            <>
                                <Nav.Link style={{ color: 'black' }} as={Link} to='/home' active>Home</Nav.Link>
                                <Nav.Link style={{ color: 'black' }} as={Link} to='/search' active>Search</Nav.Link>
                                <Nav.Link style={{ color: 'black' }} as={Link} to='/info' active>Info</Nav.Link>
                                <Nav.Link style={{ color: 'black' }} onClick={() => props.logOutAction()} active>LogOut</Nav.Link>
                            </>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}
export default Header