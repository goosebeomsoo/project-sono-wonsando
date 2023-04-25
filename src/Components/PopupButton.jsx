import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { setPopupStateTrue } from '../Store/popupState';
import { setPopupDataStateByState } from '../Store/popupDataState';
import {
  setListGalleryCurrentNumber,
  setListGalleryCurrentList,
}
  from '../Store/listGalleryValueState';
import { setPopupTypeList, setPopupTypeSlide } from '../Store/popupTypeState';

function PopupButton({
  icon,
  data,
  type,
}) {
  const dispatch = useDispatch();

  return (
    <div
      className="popup-button"
      onClick={() => {
        if (type === 'list') {
          dispatch(setPopupTypeList());
        }
        if (type === 'slide') {
          dispatch(setPopupTypeSlide());
        }

        if (data[0].images === undefined) {
          dispatch(setListGalleryCurrentList(0));
        }
        if (data[0].images !== undefined) {
          dispatch(setListGalleryCurrentList(0));
          dispatch(setListGalleryCurrentNumber(0));
        }
        dispatch(setPopupDataStateByState(data)); // Data update
        dispatch(setPopupStateTrue()); // Show Popup
      }}
      role="presentation"
    >
      <i className="button-icon">
        <img src={process.env.PUBLIC_URL + icon} alt="button" />
      </i>
    </div>
  );
}

PopupButton.propTypes = {
  icon: PropTypes.string.isRequired,
  data: PropTypes.objectOf.isRequired,
  type: PropTypes.string.isRequired,
};

export default PopupButton;
