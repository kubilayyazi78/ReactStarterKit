import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.todos = [action.payload, ...todos];
    },
  },
});

export const { addToDo } = todos.actions;
export default todos.reducers;
