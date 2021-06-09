import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header';
import Cart from '../components/CartProducts';
import OrderForm from '../components/OrderForm';

const Checkout = () => (
    <>
        <Header />
        <Container>
            <Row>
                <Col md={10} lg={8}>
                    <OrderForm />
                </Col>
                <Col lg={4}>
                    <Cart />
                </Col>
            </Row>
        </Container>
    </>
);

export default Checkout;
