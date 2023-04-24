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
    detailPageScrollByState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {
  detailPageScrollInc,
  detailPageScrollDec,
  detailPageScrollByState,
} = detailPageScroll.actions;

export default detailPageScroll.reducer;
