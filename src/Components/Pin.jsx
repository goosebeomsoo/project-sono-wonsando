/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import theBunkersData from '../DB/HotelAndSpace/theBunkers.json';
import breakerHillsData from '../DB/HotelAndSpace/breakerHillsData.json';
import sonoFeliceAndCalmData from '../DB/HotelAndSpace/sonoFeliceAndCalmData.json';
import sonoFinCabinAreaData from '../DB/HotelAndSpace/sonoFinCabinAreaData.json';
import sonoFinVillageData from '../DB/HotelAndSpace/sonoFinVillageData.json';
import forestOfGalaxyData from '../DB/HotelAndSpace/forestOfGalaxyData.json';
import latvusStadium from '../DB/HotelAndSpace/latvusStadium.json';

function Pin({
  title,
  icon,
  backgroundColor,
  headingFontColor,
  bodyFontColor,
  id,
}) {
  const navigate = useNavigate();
  return (
    <div className="pin">
      <div className="pin-head" />
      <div className="pin-line" />
      <div className="pin-icon">
        <img src={process.env.PUBLIC_URL + icon} alt="area-icon" />
      </div>
      <p
        className="pin-title body-small"
        onClick={() => {
          navigate(`${process.env.PUBLIC_URL}/masterplan/${id}`, {
            state: {
              hotelData: id === 'the-bunkers' ? theBunkersData
                : id === 'breaker-hills' ? breakerHillsData
                  : id === 'sono-felice-and-calm' ? sonoFeliceAndCalmData
                    : id === 'sono-felice-and-calm' ? sonoFeliceAndCalmData
                      : id === 'sono-fin-cabin-area' ? sonoFinCabinAreaData
                        : id === 'sono-fin-village' ? sonoFinVillageData
                          : id === 'forest-of-galaxy' ? forestOfGalaxyData
                            : id === 'latvus-stadium' ? latvusStadium
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
