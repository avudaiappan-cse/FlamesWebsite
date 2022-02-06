import React from "react";

const Field = ({ type, onChange, placeholder }) => {
  return (
    <input
      className="field"
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
    />
  );
};

export default Field;
