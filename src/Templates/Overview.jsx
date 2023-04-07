/* eslint-disable max-len */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import PopupButton from '../Components/PopupButton';

function Overview({
  caption,
  heading,
  content,
}, ref) {
  return (
    <div
      className="overview-template template scroll-hook"
      ref={ref}
    >
      <div className="container">
        <div className="description">
          <p className="body-small">
            {caption}
          </p>
        </div>
        <div className="body-section">
          <div className="header-content">
            <h2 className="heading-medium">
              {heading}
            </h2>
          </div>
          <div className="body-content">
            <p className="body-medium">
              {content}
            </p>
          </div>
          { content ? <PopupButton /> : null }
        </div>
      </div>
    </div>
  );
}
Overview.propTypes = {
  caption: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default forwardRef(Overview);
