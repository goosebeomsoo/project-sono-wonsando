/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const detailPagePopup = createSlice({
  name: 'detailPagePopup',
  initialState: {
    value: false,
  },
  reducers: {
    detailPagePopupShow: (state) => {
      state.value = true;
    },
    detailPagePopupHide: (state) => {
      state.value = false;
    },
  },
});

export const {
  detailPagePopupShow,
  detailPagePopupHide,
} = detailPagePopup.actions;

export default detailPagePopup.reducer;
