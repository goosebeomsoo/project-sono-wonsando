/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const masterplanPopup = createSlice({
  name: 'masterplanPopup',
  initialState: {
    value: false,
  },
  reducers: {
    setMasterplanPopupByState: (state, action) => {
      state.value = action.payload;
    },
    setMasterplanPopupFalse: (state) => {
      state.value = false;
    },
  },
});

export const {
  setMasterplanPopupByState,
  setMasterplanPopupFalse,
} = masterplanPopup.actions;

export default masterplanPopup.reducer;
