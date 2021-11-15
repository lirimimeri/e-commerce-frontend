import React from 'react';
import { Form } from 'react-bootstrap';

const OrderForm = () => {
    return (
        <Form className="w-100 mt-5">
            <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>
        </Form>
    );
};

export default OrderForm;
