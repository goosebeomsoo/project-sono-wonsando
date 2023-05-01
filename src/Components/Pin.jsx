/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { detailPageScrollAction } from '../Store/detailPageScroll';

import theBunkersData from '../DB/HotelAndSpace/theBunkersData.json';
import breakerHillsData from '../DB/HotelAndSpace/breakerHillsData.json';
import sonoFeliceAndCalmData from '../DB/HotelAndSpace/sonoFeliceAndCalmData.json';
import sonoFinCabinAndVillageData from '../DB/HotelAndSpace/sonoFinCabinAndVillageData.json';
import forestOfGalaxyData from '../DB/HotelAndSpace/forestOfGalaxyData.json';
import tennisCourtData from '../DB/HotelAndSpace/tennisCourtData.json';
import jkmmBreakerHillsData from '../DB/HotelAndSpace/jkmmBreakerHillsData.json';
import jkmmTennisCourtData from '../DB/HotelAndSpace/jkmmTennisCourtData.json';
import jkmmChapelData from '../DB/HotelAndSpace/jkmmChapel.json';

function Pin({
  title,
  icon,
  backgroundColor,
  headingFontColor,
  bodyFontColor,
  id,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="pin">
      <div className="pin-head" />
      <div className="pin-line" />
      <div
        className="pin-icon"
        onClick={() => {
          dispatch(detailPageScrollAction(0));
          navigate(`${process.env.PUBLIC_URL}/masterplan/${id}`, {
            state: {
              hotelData: id === 'the-bunkers' ? theBunkersData
                : id === 'breaker-hills-opt1' ? breakerHillsData
                  : id === 'breaker-hills-opt2' ? jkmmBreakerHillsData
                    : id === 'sono-felice-and-calm' ? sonoFeliceAndCalmData
                      : id === 'sono-felice-and-calm' ? sonoFeliceAndCalmData
                        : id === 'sono-fin-cabin-and-village' ? sonoFinCabinAndVillageData
                          : id === 'forest-of-galaxy' ? forestOfGalaxyData
                            : id === 'tennis-court-opt1' ? tennisCourtData
                              : id === 'tennis-court-opt2' ? jkmmTennisCourtData
                                : id === 'chapel' ? jkmmChapelData
                                  : null,
              backgroundColor,
              headingFontColor,
              bodyFontColor,
              resetValue: 0,
            },
          });
        }}
        role="presentation"
      >
        <img src={process.env.PUBLIC_URL + icon} alt="area-icon" />
      </div>
      <p className="pin-title body-medium-bold">
        {title}
      </p>
    </div>
  );
}

Pin.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  headingFontColor: PropTypes.string.isRequired,
  bodyFontColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Pin;
