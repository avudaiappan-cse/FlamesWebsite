import React from "react";

const CartItem = (props) => {
  return (
    <div>
      Item Name: {props.title}
      Item Price: {props.price}
      Quantity: {props.quantity}
    </div>
  );
};

export default CartItem;
