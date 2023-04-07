import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { setMasterplanPopupFalse } from '../Store/masterplanPopupState';

import FunctionButton from './FunctionButton';

import assetsData from '../DB/assets.json';
import imagePopupData from '../DB/imagePopup.json';

function PopupImage() {
  const dispatch = useDispatch();
  const masterplanPopup = useSelector((state) => state.masterplanPopup.value);

  return (
    <CSSTransition
      in={masterplanPopup}
      key="value"
      timeout={700}
      unmountOnExit
      classNames="my-node"
    >
      <div className="popup-image">
        <FunctionButton
          icon={assetsData.icons[0].arrowLeft}
          functionButtonClassName=""
          clickEvent={() => {
            dispatch(setMasterplanPopupFalse());
          }}
        />
        { masterplanPopup === false ? (
          ''
        ) : (
          <img src={process.env.PUBLIC_URL + imagePopupData.data[masterplanPopup].image} alt="" />
        )}
      </div>
    </CSSTransition>
  );
}

export default PopupImage;
