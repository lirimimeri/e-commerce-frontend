import React from 'react';
import { Col, Image } from 'react-bootstrap';

const CartProduct = ({ name, count, price }) => {
    return (
        <div
            className='d-flex justify-content-around my-2 py-2 w-100 border-bottom'
            style={{ boxSizing: 'border-box' }}>
            <Image
                width='60'
                src='http://localhost:5000/products/60b3c9d017732327041deca0_61Q2kljCpKL._AC_SL1000_.jpg'
                height='60'
            />
            <Col>
                <p>Laptop Lenovo</p>
                <div className='d-flex '>
                    <h4 className='mr-2'>4</h4>
                    <span className='d-flex mx-1'>
                        <h4
                            className='text-info text-center mx-2'
                            style={{
                                fontWeight: 'bolder',
                                border: '1px solid',
                                cursor: 'pointer',
                                width: 30,
                            }}>
                            +
                        </h4>
                        <h4
                            className=' text-info text-center'
                            style={{
                                fontWeight: 'bolder',
                                border: '1px solid',
                                cursor: 'pointer',
                                width: 30,
                            }}>
                            -
                        </h4>
                    </span>
                </div>
            </Col>
            <p
                className='align-self-center text-danger'
                style={{ cursor: 'pointer' }}>
                <i className='fa fa-trash fa-2x'></i>
            </p>
        </div>
    );
};

export default CartProduct;
