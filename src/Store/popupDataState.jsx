/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const PopupDataState = createSlice({
  name: 'popupDataState',
  initialState: {
    value: false,
  },
  reducers: {
    setPopupDataStateByState: (state, action) => {
      state.value = action.payload;
    },
    setPopupDataStateNull: (state) => {
      state.value = undefined;
    },
  },
});

export const {
  setPopupDataStateByState,
  setPopupDataStateByNull,
} = PopupDataState.actions;

export default PopupDataState.reducer;
