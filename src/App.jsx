import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products.filter(x=> x.id != 1 && x.id != 4));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    // Sepete ürün ekleyin
    const existingItem = cartItems.find((item) => item.id === product.id);
  
    if (existingItem) {
      // Eğer ürün zaten sepette varsa quantity'yi artır
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      // Eğer ürün sepette yoksa yeni bir öğe olarak ekleyin
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    // Sepetten ürün çıkarın
    const existingItem = cartItems.find((item) => item.id === product.id);
  
    if (existingItem && existingItem.quantity > 1) {
      // Eğer ürün sepette varsa ve quantity > 1 ise quantity'yi azalt
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      // Eğer ürün sepette varsa ve quantity 1 ise ürünü sepetteki listeden kaldır
      const updatedCart = cartItems.filter((item) => item.id !== product.id);
      setCartItems(updatedCart);
    }
  };

  return (
    <div className="App">
      <br/>
      <ProductList products={products} handleAddToCart={handleAddToCart} />
      <ShoppingCart cartItems={cartItems} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart}/>
    </div>
    
  );
}

export default App;