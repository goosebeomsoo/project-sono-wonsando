import React from 'react';
// import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { detailPagePopupHide } from '../Store/detailPagePopupState';

import FunctionButton from './FunctionButton';
import assetsData from '../DB/assets.json';

function PopupDetail() {
  const dispatch = useDispatch();

  const detailPagePopup = useSelector((state) => state.detailPagePopup.value);

  return (
    <div className={`popup-detail ${detailPagePopup ? 'show-popup-detail' : ''}`}>
      <FunctionButton
        clickEvent={() => {
          dispatch(detailPagePopupHide());
        }}
        icon={assetsData.icons[0].arrowLeft}
        functionButtonClassName=""
      />
      <div className="popup-header">
        <div className="popup-title">
          <h2 className="heading-small">
            popup
          </h2>
        </div>
        <div className="popup-content-navigation">
          <ul />
        </div>
      </div>
    </div>
  );
}
/*
PopupDetail.propTypes = {
  hotelData: PropTypes.objectOf.isRequired,
};
*/
export default PopupDetail;
