import React from "react";

const Field = ({ type, onChange, placeholder, value }) => {
  return (
    <input
      className="field"
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      value={value}
    />
  );
};

export default Field;
