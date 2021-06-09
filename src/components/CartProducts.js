import React from 'react';
import { Button, Card } from 'react-bootstrap';

import CartRow from './CartProductRow';

const Cart = () => {
    return (
        <Card className='border-0 px-3 mt-5 py-3'>
            <CartRow />
            <CartRow />
        </Card>
    );
};

export default Cart;
