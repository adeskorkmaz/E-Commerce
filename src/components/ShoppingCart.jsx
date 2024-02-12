import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faClose } from "@fortawesome/free-solid-svg-icons";

const ShoppingCart = ({ cartItems, handleAddToCart, handleRemoveFromCart }) => {
  return (
    <div className="shopping-cart">
      {cartItems.length === 0 ? (
        <FontAwesomeIcon icon={faShoppingCart} className="icon" style={{ fontSize: '3em' }} />
      ) : (
        <FontAwesomeIcon icon={faShoppingCart} className="icon" style={{ color: 'rgb(59,130,246)', fontSize: '3em' }} />
      )}

      {cartItems.length === 0 ? (
        <p><b>Sepetiniz boş</b></p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>
                <FontAwesomeIcon icon={faClose} className="icon" style={{ color: 'rgb(59,130,246)', fontSize: '1em', cursor: 'pointer' }} onClick={() => handleRemoveFromCart(item)}/>&nbsp;
                <strong>{item.title}</strong> &times; {item.quantity}
              </div>
              <hr/>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 ? (
        <div style={{fontWeight: 'bold'}}>
          ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
        </div>) : ''}
    </div>
  );
};

export default ShoppingCart;
