import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const HomeScreen = () => (
  <>
    <h1>Latest Products</h1>
    <Row>
      {products.map((product) => (
        // eslint-disable-next-line no-underscore-dangle
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={product} />
        </Col>
      ))}
    </Row>
  </>
);

export default HomeScreen;
