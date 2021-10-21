import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    value, isDisabled, onClick,
  } = props;
  return (
    <button type="button" onClick={onClick} disabled={isDisabled}>{value}</button>
  );
};

Button.defaultProps = {

};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  // style: PropTypes.objectOf.string.isRequired,
};

export default Button;
