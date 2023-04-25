/* eslint-disable no-nested-ternary */
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  useSelector,
} from 'react-redux';

import ListGallery from '../Templates/ListGallery';
import SlideGallery from '../Templates/SlideGallery';

function Popup() {
  const popupStateValue = useSelector((state) => state.popupState.value);
  const popupType = useSelector((state) => state.popupTypeState.value);

  return (
    <CSSTransition
      in={popupStateValue}
      key="value"
      timeout={700}
      unmountOnExit
      classNames="my-node"
    >
      <div className="popup-page">
        {
          popupType === 'list' ? <ListGallery />
            : popupType === 'slide' ? <SlideGallery /> : null
        }
      </div>
    </CSSTransition>
  );
}

export default Popup;
