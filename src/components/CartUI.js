import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const value = useSelector((state) => state.cart);
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    value.forEach((i) => {
      totalPrice += i.quantity * i.price;
    });
    return totalPrice;
  };
  return (
    <div className="cart">
      <h4>Items in Cart</h4>
      {value.map((i) => {
        return (
          <CartItem
            key={i.id}
            title={i.title}
            price={i.price}
            quantity={i.quantity}
          />
        );
      })}
      <p>Total Price: ${calculateTotalPrice()}</p>
    </div>
  );
};

export default Cart;
