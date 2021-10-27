import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './style';

const Button = (props) => {
  const {
    value, disabled, onClick, color, style,
  } = props;
  return (
    <button type={value === 'Submit' ? 'submit' : 'button'} color={color} onClick={onClick} style={(color === 'primary' && disabled === false) ? { ...styles.button, ...styles.buttonprimary, ...style } : { ...styles.button, ...style }} disabled={disabled}>{value}</button>
  );
};

Button.defaultProps = {
  color: 'default',
  disabled: false,
  style: {},
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

export default Button;
