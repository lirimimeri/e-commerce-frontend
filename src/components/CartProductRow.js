import React from 'react';
import { Image, FormControl } from 'react-bootstrap';

const CartProduct = ({ name, count, price, onIncrement, onDecrement, onDelete }) => {
    return (
        <div
            className="d-flex justify-content-around my-3 py-2 w-100"
            style={{ boxSizing: 'border-box' }}>
            <Image
                width="60"
                src="http://localhost:5000/products/60b3c9d017732327041deca0_61Q2kljCpKL._AC_SL1000_.jpg"
                height="60"
            />
            <h5 className="align-self-center">{name}</h5>
            <div className="d-flex align-self-center">
                <FormControl type="number" style={{ width: 60 }} defaultValue={count || ''} />
            </div>
            <i
                className="fa fa-trash fa-2x align-self-center text-secondary"
                style={{ cursor: 'pointer' }}
                onClick={onDelete}
            />
        </div>
    );
};

export default CartProduct;
