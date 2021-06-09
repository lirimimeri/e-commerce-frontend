import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const OrderForm = () => {
    return (
        <Form className='w-100 mt-5'>
            <h3 className='text-center'>Shipping Details</h3>
            <Form.Label>Name</Form.Label>
            <FormControl />
            <Form.Label>Surname</Form.Label>
            <FormControl />
            <Form.Label>Phone Number</Form.Label>
            <FormControl />
            <Form.Label>Address 1</Form.Label>
            <FormControl />
            <Form.Label>Address 2</Form.Label>
            <FormControl />
            <Form.Label>City</Form.Label>
            <FormControl />
            <Form.Label>State</Form.Label>
            <FormControl />
            <Button variant='success' className='float-right mt-2 d-flex'>
                <p className='align-self-center my-auto'>Payment methods</p>
                <i className='fa fa-arrow-right fa-2x ml-3'></i>
            </Button>
        </Form>
    );
};

export default OrderForm;
