/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const PopupTypeState = createSlice({
  name: 'popupTypeState',
  initialState: {
    value: undefined,
  },
  reducers: {
    setPopupTypeList: (state) => {
      state.value = 'list';
    },
    setPopupTypeSlide: (state) => {
      state.value = 'slide';
    },
  },
});

export const {
  setPopupTypeList,
  setPopupTypeSlide,
} = PopupTypeState.actions;

export default PopupTypeState.reducer;
