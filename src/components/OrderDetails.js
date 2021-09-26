import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

import OrderDetailRow from './OrderDetailRow';

const OrderDetails = () => {
    return (
        <>
            <Row>
                <Col className="text-center">
                    <strong>Image</strong>
                </Col>
                <Col className="text-center">
                    <strong>Name</strong>
                </Col>
                <Col className="text-center">
                    <strong>Description</strong>
                </Col>
                <Col className="text-center">
                    <strong>Pieces</strong>
                </Col>
                <Col className="text-center">
                    <strong>Price $</strong>
                </Col>
            </Row>
            <hr />

            <OrderDetailRow />
            <hr />

            <OrderDetailRow />
            <hr />

            <OrderDetailRow />
            <hr />
        </>
    );
};

export default OrderDetails;
