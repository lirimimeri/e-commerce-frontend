import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Header() {
    const { cart, auth } = useSelector((state) => ({ cart: state.cart, auth: state.auth }));

    return (
        <Navbar bg="white" expand="md">
            <Navbar.Brand as={Link} to={'/'} className="text-secondary">
                KingKong Shop {console.log(localStorage.getItem('accessToken'))}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/checkout">
                        Checkout<i className="fa fa-shopping-cart mx-1"></i>
                        <span className="bg-light rounded  p-2" style={{ fontSize: '0.8rem' }}>
                            {cart.length}
                        </span>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/login" style={null} className="text-decoration-none text-secondary">
                        {auth.token || localStorage.getItem('accessToken') ? 'Logout' : 'Login'}
                        <i className="fa fa-user ml-1" />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
