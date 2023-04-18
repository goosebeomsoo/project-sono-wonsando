/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const PopupValueState = createSlice({
  name: 'popupValueState',
  initialState: {
    currentList: undefined,
    currentNumber: undefined,
  },
  reducers: {
    setPopupValueCurrentList: (state, action) => {
      state.currentList = action.payload;
    },
    setPopupValueCurrentNumber: (state, action) => {
      state.currentNumber = action.payload;
    },
  },
});

export const {
  setPopupValueCurrentList,
  setPopupValueCurrentNumber,
} = PopupValueState.actions;

export default PopupValueState.reducer;
