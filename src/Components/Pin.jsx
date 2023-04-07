import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Pin({
  title,
  icon,
  anchor,
}) {
  return (
    <div className="pin">
      <div className="pin-head" />
      <div className="pin-line" />
      <div className="pin-icon">
        <img src={process.env.PUBLIC_URL + icon} alt="area-icon" />
      </div>
      <p className="pin-title">
        <Link to={anchor} className="body-small">
          {title}
        </Link>
      </p>
    </div>
  );
}

Pin.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  anchor: PropTypes.string.isRequired,
};

export default Pin;
