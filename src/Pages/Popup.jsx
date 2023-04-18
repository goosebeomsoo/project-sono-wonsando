import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  setPopupValueCurrentList,
  setPopupValueCurrentNumber,
} from '../Store/popupValueState';
import { setPopupStateFalse } from '../Store/popupState';

import FunctionButton from '../Components/FunctionButton';

import ListGallery from '../Templates/ListGallery';

import assetsData from '../DB/assets.json';

function PopupImage() {
  const dispatch = useDispatch();
  const popupStateValue = useSelector((state) => state.popupState.value);

  return (
    <CSSTransition
      in={popupStateValue}
      key="value"
      timeout={700}
      unmountOnExit
      classNames="my-node"
    >
      <div className="popup-page">
        <FunctionButton
          icon={assetsData.icons[0].arrowLeft}
          functionButtonClassName=""
          clickEvent={() => {
            dispatch(setPopupValueCurrentList(undefined));
            dispatch(setPopupValueCurrentNumber(undefined));
            dispatch(setPopupStateFalse());
          }}
        />
        <ListGallery />
      </div>
    </CSSTransition>
  );
}

export default PopupImage;
