/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const ListGalleryValueState = createSlice({
  name: 'listGalleryValueState',
  initialState: {
    currentList: undefined,
    currentNumber: undefined,
  },
  reducers: {
    setListGalleryCurrentList: (state, action) => {
      state.currentList = action.payload;
    },
    setListGalleryCurrentNumber: (state, action) => {
      state.currentNumber = action.payload;
    },
  },
});

export const {
  setListGalleryCurrentList,
  setListGalleryCurrentNumber,
} = ListGalleryValueState.actions;

export default ListGalleryValueState.reducer;
