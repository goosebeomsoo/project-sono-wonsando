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
    detailPageScrollAction: (state, action) => {
      state.currentScroll = action.payload;
    },
  },
});

export const {
  detailPageScrollInc,
  detailPageScrollDec,
  detailPageScrollAction,
} = detailPageScroll.actions;

export default detailPageScroll.reducer;
