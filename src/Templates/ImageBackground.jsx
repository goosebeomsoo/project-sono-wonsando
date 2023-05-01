/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// import assetsData from '../DB/assets.json';

function ImageBackground({
  data,
  currentScroll,
  hotelDataLength,
}) {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    if (currentScroll >= hotelDataLength - 2) {
      setFadeIn(true);
    } else {
      setFadeIn(false);
    }
  }, [currentScroll, hotelDataLength]);
  return (
    <div className="image-background scroll-hook">
      <div className="container">
        <div className={`logo ${fadeIn ? 'show-logo' : ''}`}>
          <img src={process.env.PUBLIC_URL + data.brand[0].logo} alt="" />
        </div>
        <div className="contents">
          <p className="micro">
            {data.brand[0].content}
          </p>
        </div>
      </div>
      <div className="brand-background-image">
        {
          data.brand[0].background === undefined ? null
            : <img src={process.env.PUBLIC_URL + data.brand[0].background} alt="" />
        }
      </div>
    </div>
  );
}

ImageBackground.propTypes = {
  data: PropTypes.arrayOf.isRequired,
  currentScroll: PropTypes.number.isRequired,
  hotelDataLength: PropTypes.number.isRequired,
};

export default ImageBackground;
