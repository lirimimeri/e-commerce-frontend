import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { notify } from 'react-notify-toast';

import { addProduct } from '../store/actions';
import Product from './ProductCard';

function Products() {
    const dispatch = useDispatch();

    const { products, cart } = useSelector(({ products, cart }) => ({
        products,
        cart,
    }));

    const { productsData, errorMessage } = products;

    const addToCartHandler = (product) => {
        dispatch(addProduct(product));
        notify.show('Product added to cart!', 'custom', null, {
            background: '#F5E9E2',
            text: 'black',
        });
    };

    return (
        <>
            {errorMessage && <Alert variant='danger'>{errorMessage}</Alert>}
            <Row className='d-flex'>
                {productsData &&
                    productsData.map((product) => (
                        <Product
                            key={product._id}
                            name={product.name}
                            description={product.description}
                            photo={product.photo}
                            price={product.price}
                            rating={3}
                            onAddToCart={addToCartHandler}
                            product={product}
                        />
                    ))}
            </Row>
        </>
    );
}

export default Products;
