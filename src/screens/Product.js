import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from '../components/Header';
import { getOneProduct } from '../store/actions';

function Product() {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getOneProduct(id));
    }, []);
    return (
        <div>
            <Header />
            <p>h1</p>hi
        </div>
    );
}

export default Product;
