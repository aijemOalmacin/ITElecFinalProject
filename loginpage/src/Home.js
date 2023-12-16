import React, { useState } from 'react';
import './FoodOrderApp.css'; 


const FoodOrderApp = () => {
  
  const [menuItems] = useState([
    { id: 1, name: 'Burger', price: 8.99 },
    { id: 2, name: 'Pizza', price: 12.99 },
    { id: 3, name: 'Salad', price: 6.99 },
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  
  const handleItemClick = (item, quantity) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      
      const newItem = { ...item, quantity };
      setCartItems((prevItems) => [...prevItems, newItem]);
    }

    
    const newTotalPrice = totalPrice + item.price * quantity;
    setTotalPrice(newTotalPrice);
  };

  
  const placeOrder = () => {
    
    console.log('Order placed:', cartItems);
  
    setCartItems([]);
    setTotalPrice(0);
  };

  return (
    <div className="food-order-app">
      <h1>Food Ordering App</h1>

      <div className="menu">
        <h2>Menu</h2>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <span className="menu-item">{item.name} -  ₱ {item.price}</span>
              <button className="add-to-cart-btn" onClick={() => handleItemClick(item, 1)}>
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((cartItem) => (
            <li key={cartItem.id}>
              <span className="cart-item">
                {cartItem.name} -  ₱ {cartItem.price} x {cartItem.quantity}
              </span>
            </li>
          ))}
        </ul>
        <p className="total-price">Total Price:  ₱ {totalPrice.toFixed(2)}</p>
        <button className="place-order-btn" onClick={placeOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default FoodOrderApp;
