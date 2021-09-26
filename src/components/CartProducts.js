import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CartRow from './CartProductRow';
import { updateCart } from '../store/actions/index';

const Cart = () => {
    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const onDeleteHandler = (index) => {
        cart.splice(index, 1);
        console.log(cart);
        dispatch(updateCart(cart));
    };

    return (
        <div className="p-3 mt-5">
            {cart &&
                cart.map((product, index) => (
                    <CartRow
                        name={product.name}
                        price={product.price}
                        onDelete={() => onDeleteHandler(index)}
                        key={index}
                        quantity={product.quantity}
                    />
                ))}
        </div>
    );
};

export default Cart;
