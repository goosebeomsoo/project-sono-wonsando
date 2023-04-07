/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const detailPageNavigation = createSlice({
  name: 'detailPageNavigation',
  initialState: {
    topValue: 0,
    opacityValue: 0.7,
  },
  reducers: {
    detailPageNavigationShow: (state) => {
      state.topValue = 0;
      state.opacityValue = 0.7;
    },
    detailPageNavigationHide: (state) => {
      state.topValue = -72;
      state.opacityValue = 0.2;
    },
  },
});

export const {
  detailPageNavigationShow,
  detailPageNavigationHide,
} = detailPageNavigation.actions;

export default detailPageNavigation.reducer;
