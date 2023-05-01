/* eslint-disable max-len */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import PopupButton from '../Components/PopupButton';

import assetsData from '../DB/assets.json';

function Overview({
  caption,
  heading,
  content,
  highlight,
  data,
  theme,
}, ref) {
  return (
    <div
      className="overview-template scroll-hook"
      ref={ref}
    >
      <div className="container">
        <div className="body-section">
          <div className="description">
            <p className={`body-medium-bold ${theme === 'black' ? 'copy-black' : ''}`}>
              {caption}
            </p>
          </div>
          <div className="header-content">
            <h2 className={`heading-large ${theme === 'black' ? 'copy-black' : ''}`}>
              {heading}
            </h2>
          </div>
          <div className="body-content">
            <p className="body-medium-light">
              {content}
            </p>
          </div>
          {
            data
              ? (
                <PopupButton
                  icon={theme === 'black' ? assetsData.icons[0].expandIcon : assetsData.icons[0].whiteExpandIcon}
                  data={data}
                  type="list"
                />
              )
              : null
          }
        </div>
      </div>
      <div className="highlight">
        {
          highlight === undefined ? null
            : <img src={process.env.PUBLIC_URL + highlight} alt="highlight" />
        }
      </div>
    </div>
  );
}
Overview.propTypes = {
  theme: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
  data: PropTypes.arrayOf.isRequired,
};

export default forwardRef(Overview);
