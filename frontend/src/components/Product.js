import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => (
  <Card className="my-3 p-3 rounded">
    {/* eslint-disable no-underscore-dangle */}
    <Link to={`/product/${product._id}`}>
      <Card.Img src={product.image} variant="top" />
    </Link>
    <Card.Body>
      {/* eslint-disable no-underscore-dangle */}
      <Link to={`/product/${product._id}`}>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
      </Link>
      <Card.Text as="div">
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      </Card.Text>
      <Card.Text as="h3">
        $
        {product.price}
      </Card.Text>
    </Card.Body>
  </Card>
);
Product.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
    numReviews: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
};
export default Product;
