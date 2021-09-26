import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Notifications, { notify } from 'react-notify-toast';
import { Container } from 'react-bootstrap';

import Header from '../components/Header';
import ProductCarousel from '../components/ProductCarousel';
import Products from '../components/Products';
import { getAllProducts } from '../store/actions';

const HomePage = () => {
    const dispatch = useDispatch();
    const { errorMessage } = useSelector(({ products }) => products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    useEffect(() => {
        if (!errorMessage) return;

        notify.show(errorMessage, 'error');
    }, [errorMessage]);

    return (
        <div>
            <Notifications />
            <Header />
            <ProductCarousel />
            <Container className="mt-3">
                <Products />
            </Container>
        </div>
    );
};

export default HomePage;
