import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Harry Potter 1",
    price: 12,
    imageURL:
      "https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg",
  },
  {
    id: 2,
    title: "Harry Potter 2",
    price: 15,
    imageURL:
      "https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg",
  },
  {
    id: 3,
    title: "Harry Potter 3",
    price: 18,
    imageURL:
      "https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg",
  },
];

const PostSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {
    addPost(state, action) {
      state.push(action);
    },
  },
});

export const { addPost } = PostSlice.actions;

export default PostSlice.reducer;
