import { configureStore } from '@reduxjs/toolkit';

import masterplanPopupReducer from './masterplanPopupState';
import detailPageScrollReducer from './detailPageScroll';
import detailPageNavigationReducer from './detailPageNavigationState';
import detailPagePopupReducer from './detailPagePopupState';

export default configureStore({
  reducer: {
    masterplanPopup: masterplanPopupReducer,
    detailPageNavigation: detailPageNavigationReducer,
    detailPageScroll: detailPageScrollReducer,
    detailPagePopup: detailPagePopupReducer,
  },
});
