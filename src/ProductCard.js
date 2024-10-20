import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import './ProductCard.css';

function ProductCard() {
  return (
    <Card className="product-card">
      <Image />
      <Card.Body>
        <Name />
        <Price />
        <Description />
      </Card.Body>
    </Card>
  );
}

export default ProductCard;