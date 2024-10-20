import React from 'react';
import ProductCard from './ProductCard';
import './ProductCard.css';

const firstName = ""; 

function App() {
  return (
    <div className="app-container">
      <ProductCard />
      <p className="greeting">{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</p>
      {firstName ? (
        <div className="user-image">
          {firstName[0].toUpperCase()}
        </div>
      ) : (
        <img 
          src="user.webp" 
          alt="Default User" 
          className="user-image"
        />
      )}
    </div>
  );
}

export default App;
