import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: { value: [] },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    delTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      state.value.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.content = action.payload.content;
        }
      });
    }
  }
});

export const { addTodo, delTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
