import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { setPopupStateTrue } from '../Store/popupState';
import { setPopupDataStateByState } from '../Store/popupDataState';
import { setPopupValueCurrentList, setPopupValueCurrentNumber } from '../Store/popupValueState';

function PopupButton({
  icon,
  data,
}) {
  const dispatch = useDispatch();
  // const currentNumber = useSelector((state) => state.popupValueState.currentNumber);

  return (
    <div
      className="popup-button"
      onClick={() => {
        if (data[0].images === undefined) {
          dispatch(setPopupValueCurrentList(0));
        }
        if (data[0].images !== undefined) {
          dispatch(setPopupValueCurrentList(0));
          dispatch(setPopupValueCurrentNumber(0));
        }
        console.log(data[0].images);
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
};

export default PopupButton;
