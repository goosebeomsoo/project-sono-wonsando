/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const PopupState = createSlice({
  name: 'popupState',
  initialState: {
    value: false,
  },
  reducers: {
    setPopupStateByState: (state, action) => {
      state.value = action.payload;
    },
    setPopupStateTrue: (state) => {
      state.value = true;
    },
    setPopupStateFalse: (state) => {
      state.value = false;
    },
  },
});

export const {
  setPopupByState,
  setPopupStateTrue,
  setPopupStateFalse,
} = PopupState.actions;

export default PopupState.reducer;
