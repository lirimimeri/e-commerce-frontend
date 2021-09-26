import React, { useState } from 'react';

import CartRow from './CartProductRow';

const Cart = () => {
    const [products, setProducts] = useState([
        { name: 'Lenovo', count: 4, price: 20 },
        { name: 'Lenovo', count: 1, price: 5 },
    ]);

    const onIncrementHandler = (index) => {
        setProducts((prevState) => {
            let state = prevState;
            console.log(state[index].count);
            state[index].count += 1;

            return [...state];
        });
    };

    const onDecrementHandler = (index) => {
        setProducts((prevState) => {
            let state = prevState;
            state[index].count -= 1;

            return [...state];
        });
    };

    const onDeleteHandler = (index) => {
        setProducts((prevState) => {
            const state = prevState;
            state.splice(index, 1);

            return [...state];
        });
    };

    const cart = products.map((product, index) => (
        <CartRow
            name={product.name}
            price={product.price}
            onIncrement={() => onIncrementHandler(index)}
            onDecrement={() => onDecrementHandler(index)}
            onDelete={() => onDeleteHandler(index)}
            key={index}
            count={product.count}
        />
    ));
    return <div className="p-3 mt-5">{cart}</div>;
};

export default Cart;
