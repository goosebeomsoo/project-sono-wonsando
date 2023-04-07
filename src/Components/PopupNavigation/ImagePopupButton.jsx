import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setMasterplanPopupByState } from '../../Store/masterplanPopupState';

function ImagePopupButton({
  title,
  icon,
  currentValue,
}) {
  const dispatch = useDispatch();
  return (
    <div className="image-popup-button">
      <div
        className="popup-button-icon"
        onClick={() => {
          dispatch(setMasterplanPopupByState(currentValue));
        }}
        role="presentation"
      >
        <img src={process.env.PUBLIC_URL + icon} alt={title} />
      </div>
      <p className="popup-button-title micro">
        {title}
      </p>
    </div>
  );
}

ImagePopupButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  currentValue: PropTypes.number.isRequired,
};

export default ImagePopupButton;
