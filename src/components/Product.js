import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../features/Cart/Cart";

export const Product = (props) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const increaseQuantity = () => {
    setCount(count + 1);
  };
  const decreaseQuantity = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="product">
      <div className="prod_container">
        <div className="img">
          <img
            src={props.imageURL}
            width={100}
            height={150}
            alt={props.title}
          />
        </div>
        <div className="product_item">
          <p>
            <b>{props.title}</b>
          </p>
          <p>Price: ${props.price}</p>
          <div style={{ display: "flex", alignContent: "center" }}>
            <button className="icon-btn" onClick={increaseQuantity}>
              +
            </button>
            {count}
            <button className="icon-btn" onClick={decreaseQuantity}>
              -
            </button>
          </div>
          <br />
        </div>
      </div>
      <div>
        <button
          className="cart_btn"
          onClick={() => {
            if (count > 0) {
              dispatch(addCart({ ...props, quantity: count }));
              setCount(0);
            }
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
