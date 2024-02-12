// ProductList.js

import React from 'react';

const ProductList = ({ products, handleAddToCart }) => {
  return (
    <div className="product-list">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-8 rounded-md shadow-md">
            <div className='mb-2 product-image'>
              <img src={product.images[0]} />
            </div>
            <div className="mb-4">
              <strong className="text-lg product-name">{product.title}</strong>
              <p className='text-sm'>{product.description}</p>
            </div>
            <div className="mb-2">${product.price.toFixed(2)}</div>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Sepete Ekle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
