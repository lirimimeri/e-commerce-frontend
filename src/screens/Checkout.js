import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Button, Modal, FormCheck, Spinner } from 'react-bootstrap';

import Header from '../components/Header';
import Cart from '../components/CartProducts';
import OrderForm from '../components/OrderForm';
import OrderSummary from '../components/OrderSummary';

const Checkout = () => {
    const [showModal, setShowModal] = useState(false);
    const [payInPerson, setPayInPerson] = useState(true);

    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        document.title = 'Checkout  |  KingKong Shop';

        console.log(cart);
    }, []);

    useEffect(() => {
        console.log(payInPerson);
    }, [payInPerson]);

    return (
        <>
            <Header />
            <Container className="mb-5">
                <Row>
                    <Col md={9}>
                        <Cart />
                    </Col>
                    <OrderSummary />
                </Row>

                <FormCheck
                    defaultChecked={payInPerson}
                    onChange={() => setPayInPerson((prevState) => !prevState)}
                    inline
                    label="Pay In Person"
                    name="group1"
                    type="radio"
                    onClick={() => setPayInPerson(true)}
                />
                <FormCheck
                    onChange={() => setPayInPerson((prevState) => !prevState)}
                    inline
                    label="Pay With Paypal"
                    name="group1"
                    type="radio"
                    onClick={() => setPayInPerson(false)}
                />

                <OrderForm />

                <Modal
                    onHide={() => setShowModal(false)}
                    size="lg"
                    show={showModal}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Body className="text-center">
                        <p>Please wait...</p>
                        <Spinner animation="grow" className="m-1" />
                        <Spinner animation="grow" className="m-1" />
                        <Spinner animation="grow" className="m-1" />
                    </Modal.Body>
                </Modal>

                <Button block onClick={() => setShowModal(true)}>
                    Order
                </Button>
            </Container>
        </>
    );
};

export default Checkout;
