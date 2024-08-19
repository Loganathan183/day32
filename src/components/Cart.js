// src/components/Cart.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, setItems } from '../redux/cartslice';

const Cart = ({ jsonData }) => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  useEffect(() => {
    // Initialize cart with JSON data
    dispatch(setItems(jsonData));
  }, [dispatch, jsonData]);

  const handleIncrease = (item) => {
    dispatch(addItem(item));
  };

  const handleDecrease = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleDecrease(item.id)}>-</button>
            <button onClick={() => handleIncrease(item)}>+</button>
            <p>Total Price: ${item.totalPrice.toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <div>
        <h3>Total Quantity: {totalQuantity}</h3>
        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
