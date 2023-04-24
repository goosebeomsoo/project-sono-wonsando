import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import {
  detailPageNavigationHide,
  detailPageNavigationShow,
} from '../Store/detailPageNavigationState';

import RouterButton from '../Components/RouterButton';

import { detailPageScrollAction } from '../Store/detailPageScroll';

import assetsData from '../DB/assets.json';

function DetailPageNavigation({
  currentHeight,
  data,
  setEventScrollValue,
}) {
  const dispatch = useDispatch();
  const currentScroll = useSelector((state) => state.detailPageScroll.currentScroll);

  const topValue = useSelector((state) => state.detailPageNavigation.topValue);
  const opacityValue = useSelector((state) => state.detailPageNavigation.opacityValue);

  useEffect(() => {
    if (currentScroll > 0) {
      dispatch(detailPageNavigationHide());
    } else if (currentScroll < 1) {
      dispatch(detailPageNavigationShow());
    }
  });

  return (
    <div
      className="detail-page-navigation"
      style={{
        opacity: opacityValue,
      }}
    >
      <div
        className="container"
        style={{
          top: `${topValue}px`,
        }}
      >

        {
          data.map((el, i) => (
            <li
              onClick={() => {
                dispatch(detailPageScrollAction(i === 0 ? i : i + 1));
                setEventScrollValue(i === 0 ? i * currentHeight : (i + 1) * currentHeight);
              }}
              role="presentation"
            >
              <p className="body-small">
                {
                  JSON.stringify(Object.keys(el)).replace('["', '').replace('"]', '').toUpperCase()
                }
                <div className={
                  `under-bar
                  ${currentScroll === 0 && i === 0 ? 'show-under-bar' : ''}
                  ${i + 1 === currentScroll ? 'show-under-bar' : ''}`
                  }
                />
              </p>
            </li>
          ))
        }

        <RouterButton
          link="/masterplan"
          icon={assetsData.icons[0].arrowLeft}
          buttonClassName="left-router-button"
          buttonName="MASTERPLAN"
          onClick={() => {
            dispatch((detailPageScrollAction(0)));
          }}
        />
      </div>
    </div>
  );
}

DetailPageNavigation.propTypes = {
  currentHeight: PropTypes.number.isRequired,
  data: PropTypes.arrayOf.isRequired,
  setEventScrollValue: PropTypes.func.isRequired,
};

export default DetailPageNavigation;
