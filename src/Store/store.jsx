import { configureStore } from '@reduxjs/toolkit';

import detailPageScrollReducer from './detailPageScroll';
import detailPageNavigationReducer from './detailPageNavigationState';
import detailPagePopupReducer from './detailPagePopupState';
import popupStateReducer from './popupState';
import popupDataStateReducer from './popupDataState';
import popupTypeStateReducer from './popupTypeState';
import listGalleryValueReducer from './listGalleryValueState';

export default configureStore({
  reducer: {
    listGalleryValueState: listGalleryValueReducer,
    popupState: popupStateReducer,
    popupDataState: popupDataStateReducer,
    popupTypeState: popupTypeStateReducer,
    detailPageNavigation: detailPageNavigationReducer,
    detailPageScroll: detailPageScrollReducer,
    detailPagePopup: detailPagePopupReducer,
  },
});
