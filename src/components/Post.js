import React from "react";

export const Post = ({ title, body }) => {
  return (
    <div id="card">
      <h4>{title}</h4>
      <p id="card-body">{body}</p>
    </div>
  );
};
