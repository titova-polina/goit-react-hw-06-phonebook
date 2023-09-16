import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilter(state, action) {
      return action.payload;
    },
  },
});

export const filterReduser = slice.reducer;
export const { updateFilter } = slice.actions;
