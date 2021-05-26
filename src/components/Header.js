import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Header() {
    const cart = useSelector(({ cart }) => cart);
    return (
        <Navbar bg='white' expand='md'>
            <Navbar.Brand className='text-secondary'>KingKong Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse>
                <Nav className='ml-auto'>
                    <Nav.Link>
                        Checkout<i className='fa fa-shopping-cart mx-1'></i>
                        <span className='bg-light rounded  p-2' style={{ fontSize: '0.8rem' }}>
                            {cart.length}
                        </span>
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to='/login'
                        href='#x'
                        style={null}
                        className='text-decoration-none text-secondary'
                    >
                        Login <i className='fa fa-user'></i>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
