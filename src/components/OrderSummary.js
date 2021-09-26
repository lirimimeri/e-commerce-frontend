import React from 'react';
import { Col } from 'react-bootstrap';

const OrderSummary = () => {
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
                    <b>30.00 $</b>
                </div>
                <div className="d-flex justify-content-between">
                    <h6>SHIPPING: </h6> <b>2.00 $</b>
                </div>
            </div>
            <div className="d-flex justify-content-between border-top pt-2">
                <h5 className=" ">TOTAL:</h5>
                <h5>
                    <b>32.00 $</b>
                </h5>
            </div>
        </Col>
    );
};

export default OrderSummary;
