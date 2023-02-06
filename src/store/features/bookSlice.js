import { createSlice } from "@reduxjs/toolkit";

let initialState = [];
let storedBooks = window.localStorage.getItem("books");

if (storedBooks) {
  initialState = JSON.parse(storedBooks);
}

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
      window.localStorage.setItem("books", JSON.stringify(state));
    },
    editBook: (state, action) => {
      const { id, name, description } = action.payload;
      const existingUser = state.find((book) => book.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.description = description;
        window.localStorage.setItem("books", JSON.stringify(state));
      }
    },
    deleteBook: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find((book) => book.id === id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { addBook, editBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
