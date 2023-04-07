/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const detailPageScroll = createSlice({
  name: 'detailPageNavigation',
  initialState: {
    currentScroll: 0,
  },
  reducers: {
    detailPageScrollInc: (state) => {
      state.currentScroll += 1;
    },
    detailPageScrollDec: (state) => {
      state.currentScroll -= 1;
    },
  },
});

export const {
  detailPageScrollInc,
  detailPageScrollDec,
} = detailPageScroll.actions;

export default detailPageScroll.reducer;
