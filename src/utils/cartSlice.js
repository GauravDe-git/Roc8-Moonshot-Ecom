import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const index = state.findIndex((i) => i.id === item.id);

      if (index === -1) {
        state.push({ ...item, quantity: 1 });
      } else {
        state[index].quantity++;
      }
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
