import React from 'react';
import { Col } from 'react-bootstrap';

const SHIPPING_PRICE = 2.00;

const OrderSummary = ({ subtotal }) => {

    return (
        <Col
            lg={3}
            style={{ height: 200 }}
            className="d-flex flex-column justify-content-between border mt-5 p-3 mx-auto">
            <h5 className="text-center">
                <b>ORDER SUMMARY</b>
            </h5>
            <div>
                <div className="d-flex justify-content-between">
                    <h6>SUBTOTAL: </h6>
                    <b>{subtotal.toFixed(2)} $</b>
                </div>
                <div className="d-flex justify-content-between">
                    <h6>SHIPPING: </h6> <b>{SHIPPING_PRICE !== 0 ? SHIPPING_PRICE.toFixed(2) + " $" : "FREE"} </b>
                </div>
            </div>
            <div className="d-flex justify-content-between border-top pt-2">
                <h5 className=" ">TOTAL:</h5>
                <h5>
                    <b>{(subtotal + SHIPPING_PRICE).toFixed(2)} $</b>
                </h5>
            </div>
        </Col>
    );
};

export default OrderSummary;
