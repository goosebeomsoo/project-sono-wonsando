import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function RouterButton({
  link,
  icon,
  buttonClassName,
  buttonName,
}) {
  return (
    <Link to={process.env.PUBLIC_URL + link}>
      <div className={`router-button ${buttonClassName}`}>
        <img
          className="router-button-icon"
          src={process.env.PUBLIC_URL + icon}
          alt="router-button"
        />
        <span className="router-name body-small">
          {buttonName}
        </span>
      </div>
    </Link>
  );
}

RouterButton.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  buttonClassName: PropTypes.string.isRequired,
};

export default RouterButton;
