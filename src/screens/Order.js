import React from 'react';
import { Container, Alert, Row, Col } from 'react-bootstrap';

import Header from '../components/Header';
import OrderDetails from '../components/OrderDetails';
import OrderSummary from '../components/OrderSummary';

const Order = () => {
    return (
        <>
            <Header />
            <Container>
                <Alert variant="success" className="text-center">
                    <Alert.Heading>THANK YOU FOR THE ORDER</Alert.Heading>
                    <hr />
                    <p className="mt-1">You will reveive emails for any update!</p>
                </Alert>

                <OrderDetails />

                <OrderSummary />
            </Container>
        </>
    );
};

export default Order;
