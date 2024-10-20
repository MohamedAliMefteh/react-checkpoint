import React from 'react';
import product from './product';

function Price() {
  return <p className="card-price">${product.price}</p>;
}

export default Price;