import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    value, isDisabled, handleClick,
  } = props;
  return (
    <button type="button" onClick={handleClick} disabled={isDisabled}>{value}</button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
