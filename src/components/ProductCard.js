import React, { useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory } from 'react-router-dom';

function Product({ photo, name, description, rating, price, onAddToCart, product }) {
    const [isAddedToCart, setAddedToCart] = useState(false);
    const history = useHistory();
    return (
        <Col sm={12} md={6} lg={4} xl={3}>
            <Card className='p-3 my-3' style={{ cursor: 'pointer' }}>
                <Card.Img
                    variant='top'
                    src={photo}
                    onClick={() => history.push(`/product/${product._id}`)}
                />
                <Card.Body onClick={() => history.push(`/product/${product._id}`)}>
                    <h5>{name}</h5>
                    <p>{description}</p>
                    <Rating
                        className='color-primary my-1 text-warning'
                        emptySymbol='fa fa-star-o fa-2x'
                        fullSymbol='fa fa-star fa-2x'
                        readonly
                        initialRating={rating}
                    />
                    <Card.Text>
                        $<b>{price}</b>
                    </Card.Text>
                </Card.Body>
                <Button
                    onClick={() => {
                        if (isAddedToCart) return;
                        onAddToCart(product);
                        setAddedToCart(true);
                    }}
                    className='btn-dark btn-md rounded-0'
                >
                    Add to Cart
                </Button>
            </Card>
        </Col>
    );
}

export default Product;
