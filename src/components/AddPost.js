import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/PostSlice";

export const AddPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      id: nanoid(),
      title: postTitle,
      body: postBody,
    };
    dispatch(addPost(payload));
    setPostTitle("");
    setPostBody("");
  };
  return (
    <div id="form" onSubmit={(e) => handleSubmit(e)}>
      <form>
        <label>Post Title: </label>
        <br />
        <br />
        <input
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          type={"text"}
        />
        <br />
        <br />
        <label>Post body: </label>
        <br />
        <br />
        <textarea
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <br />
        <br />
        <button>Add Post</button>
      </form>
    </div>
  );
};
