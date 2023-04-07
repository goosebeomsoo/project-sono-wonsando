import React from 'react';
import PropTypes from 'prop-types';

function FunctionButton({
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
      <img
        className="button-icon"
        src={process.env.PUBLIC_URL + icon}
        alt="button-icon"
      />
    </div>
  );
}

FunctionButton.propTypes = {
  clickEvent: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  functionButtonClassName: PropTypes.string.isRequired,
};

export default FunctionButton;
