import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { notify } from 'react-notify-toast';
import { Image, FormControl, Button, Card, Container } from 'react-bootstrap';

import Header from '../components/Header';
import {
    getOneProduct,
    cleanProducts,
    addProduct,
    // postComment,
} from '../store/actions';

function Product() {
    const [isAdded, setAdded] = useState(false);
    const {
        errorMessage,
        productData: product,
        comments,
    } = useSelector(({ products }) => products);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getOneProduct(id));
    }, []);

    useEffect(() => {
        if (!errorMessage) return;

        notify.show(errorMessage.toString(), 'error');
        dispatch(cleanProducts());
    }, [errorMessage]);

    const onAddToCartHandler = (e) => {
        if (isAdded)
            return notify.show('Product added to cart!', 'custom', null, {
                background: '#F5E9E2',
                text: 'black',
            });

        dispatch(addProduct(product));
        notify.show('Product added to cart!', 'custom', null, {
            background: '#F5E9E2',
            text: 'black',
        });
        setAdded(true);
    };

    const postCommentHandler = () => {
        // dispatch(postComment(id, currentUser.name, comment));
        console.log('comment added');
    };

    return (
        <div>
            <Header />
            <Container>
                <div className='mr-4 d-flex justify-content-center flex-wrap mb-4'>
                    <Image
                        src={product?.photo}
                        className='mt-5'
                        width='400'
                        height='350'
                    />
                    <div className='ml-4 d-flex flex-column justify-content-center'>
                        <div>
                            <h2 className='mt-5'>{product?.name}</h2>
                            <h4>
                                Brand: <b>{product?.brand}</b>
                            </h4>
                            <h5 className='mt-2'>{product?.description}</h5>
                            <FormControl
                                className='mt-2'
                                style={{ width: 100 }}
                                type='number'
                            />
                            <Button
                                variant='secondary'
                                className='mt-5 px-5 py-2 rounded-0'
                                onClick={onAddToCartHandler}>
                                Add to cart
                            </Button>
                        </div>
                    </div>
                </div>
                <Card className='b p-3 mb-4'>
                    <h4>Comments</h4>
                    {!comments || comments.length === 0 ? (
                        <h4 className='text-secondary'>No comments yet!</h4>
                    ) : (
                        comments.map((comment) => {
                            <>
                                <p>
                                    <b>{comment.user.name}</b> {comment.text}
                                </p>
                            </>;
                        })
                    )}
                    <div className='row mt-2 mx-1'>
                        <FormControl
                            placeholder='Type a comment!'
                            className='col-md-10 col-8 m-1'
                        />
                        <Button className='m-1' onClick={postCommentHandler}>
                            Post
                        </Button>
                    </div>
                </Card>
            </Container>
        </div>
    );
}

export default Product;
