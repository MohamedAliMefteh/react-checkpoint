import React from 'react';
import { Card } from 'react-bootstrap';
import product from './product';

function Image() {
  return <Card.Img src={product.image} alt={product.name} className="card-img-top" />;
}

export default Image;