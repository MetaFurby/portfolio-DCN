import { createSlice } from "@reduxjs/toolkit";
import { Author } from "../../models";
import { AuthorData } from "../../data/author";

export const InitialAuthorState : Author = AuthorData;

export const authorSlice = createSlice({
  name: 'author',
  initialState: InitialAuthorState,
  reducers: {
    createAuthor: (_, action) => {
      return action.payload;
    },
  }
});

export const { createAuthor } = authorSlice.actions;

export default authorSlice.reducer;