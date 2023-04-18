import { configureStore } from '@reduxjs/toolkit';

import popupStateReducer from './popupState';
import detailPageScrollReducer from './detailPageScroll';
import detailPageNavigationReducer from './detailPageNavigationState';
import detailPagePopupReducer from './detailPagePopupState';
import popupDataStateReducer from './popupDataState';
import popupValueStateReducer from './popupValueState';

export default configureStore({
  reducer: {
    popupValueState: popupValueStateReducer,
    popupState: popupStateReducer,
    popupDataState: popupDataStateReducer,
    detailPageNavigation: detailPageNavigationReducer,
    detailPageScroll: detailPageScrollReducer,
    detailPagePopup: detailPagePopupReducer,
  },
});
