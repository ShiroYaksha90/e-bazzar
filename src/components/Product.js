import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => (
  <Card className="my-3 p-3 rounded">
    {/* eslint-disable no-underscore-dangle */}
    <a href={`/product/${product._id}`}>
      <Card.Img src={product.image} variant="top" />
    </a>
    <Card.Body>
      {/* eslint-disable no-underscore-dangle */}
      <a href={`/product/${product._id}`}>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
      </a>
      <Card.Text as="div">
        <div className="my-3">
          {product.rating}
          from
          {product.numReviews}
          reviews
        </div>
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
