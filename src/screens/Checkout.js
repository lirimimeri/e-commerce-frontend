import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Container,
    Row,
    Col,
    Button,
    Modal,
    FormCheck,
    Spinner,
    Form,
    Alert,
} from 'react-bootstrap';

import Header from '../components/Header';
import Cart from '../components/CartProducts';
import OrderSummary from '../components/OrderSummary';
import { submitOrder } from '../store/actions';
import { SHIPPING_PRICE } from '../configs/constans';

const Checkout = () => {
    const [showModal, setShowModal] = useState(false);
    const [payInPerson, setPayInPerson] = useState(true);
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');

    const { cart, orders } = useSelector((state) => ({
        cart: state.cart,
        orders: state.orders,
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'Checkout  |  KingKong Shop';
    }, []);

    const getSubtotal = () => {
        let price = 0;
        cart.forEach((product) => {
            price += product.price * product.quantity;
        });
        return price;
    };

    const getProducts = () => {
        const products = [];
        cart.forEach((product) => {
            products.push({ product: product._id, qty: product.quantity });
        });
        return products;
    };

    const submit = () => {
        const orderData = {
            products: getProducts(),
            shippingData: { address, email },
            totalPrice: getSubtotal(),
            shippingPrice: SHIPPING_PRICE.toFixed(2),
        };

        dispatch(submitOrder(orderData));
    };

    return (
        <>
            <Header />
            <Container className="mb-5">
                {console.log(orders.submitedOrder)}
                {orders.submitedOrder && (
                    <Alert variant="success" className="mt-2 text-center lead font-weight-bold">
                        THANKS FOR PURCHASE &#x1F4AF; CHECK YOU EMAIL TO SEE YOUR ORDER
                    </Alert>
                )}

                <Row>
                    <Col lg={9}>
                        <Cart />
                    </Col>
                    <OrderSummary subtotal={getSubtotal()} />
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
                    disabled
                    onClick={() => setPayInPerson(false)}
                />

                <Form className="w-100 mt-5">
                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="1234 Main St"
                        />
                    </Form.Group>
                </Form>

                <Modal
                    size="lg"
                    show={orders.loading}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Body className="text-center">
                        <p>Please wait...</p>
                        <Spinner animation="grow" className="m-1" />
                        <Spinner animation="grow" className="m-1" />
                        <Spinner animation="grow" className="m-1" />
                    </Modal.Body>
                </Modal>

                <Button block onClick={submit}>
                    Order
                </Button>
            </Container>
        </>
    );
};

export default Checkout;
