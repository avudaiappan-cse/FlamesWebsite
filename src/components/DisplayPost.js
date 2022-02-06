import React from "react";
import { useSelector } from "react-redux";
import { Post } from "./Post";

export const DisplayPost = () => {
  const value = useSelector((state) => state.post);
  return (
    <div>
      {value.map((i) => (
        <Post
          key={i.payload.id}
          id={i.payload.id}
          title={i.payload.title}
          body={i.payload.body}
        />
      ))}
    </div>
  );
};
