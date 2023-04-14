import React from 'react';
import { useDispatch } from 'react-redux';
import { detailPagePopupShow } from '../Store/detailPagePopupState';

function PopupButton() {
  const dispatch = useDispatch();
  return (
    <div
      className="button"
      onClick={() => {
        // 클릭하면 해당 페이지 값 업데이트
        dispatch(detailPagePopupShow());
      }}
      role="presentation"
    >
      <p className="content body-small">
        Learn more
      </p>
    </div>
  );
}

export default PopupButton;
