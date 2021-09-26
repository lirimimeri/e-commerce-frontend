import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const OrderDetailRow = () => {
    return (
        <Row className="text-center mt-2">
            <Col>
                <Image
                    width="60"
                    src="http://localhost:5000/products/60b3c9d017732327041deca0_61Q2kljCpKL._AC_SL1000_.jpg"
                    height="60"
                />
            </Col>
            <Col>
                <p>asdasd</p>
            </Col>
            <Col>
                <p>asdasd</p>
            </Col>
            <Col>
                <p>4</p>
            </Col>
            <Col>
                <p>699.99</p>
            </Col>
        </Row>
    );
};

export default OrderDetailRow;
