import React from 'react';
import PropTypes from 'prop-types';

function Slider({
  clickEvent,
  icon,
  functionButtonClassName,
}) {
  return (
    <div
      className={`function-button ${functionButtonClassName}`}
      onClick={clickEvent}
      role="presentation"
    >
      <img className="button-icon" src={icon} alt="button-icon" />
    </div>
  );
}

Slider.propTypes = {
  clickEvent: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  functionButtonClassName: PropTypes.string.isRequired,
};

export default Slider;
