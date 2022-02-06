import React from "react";

const Button = ({ type, placeholder, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {placeholder}
    </button>
  );
};

export default Button;
