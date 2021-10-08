import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './style';
import './style.css';

const TextField = (props) => {
  const {
    heading, value, error, disabled,
  } = props;

  let inputText;

  if (disabled) {
    inputText = styles.disabledInput;
  } else if (!disabled && !error) {
    inputText = styles.validInput;
  } else {
    inputText = styles.inputWithErrors;
  }
  return (
    <div>
      <h4 style={styles.heading}>{heading}</h4>
      <input style={inputText} type="text" name="inputField" value={value} error={error} disabled={disabled} />
      {error && <p style={styles.errorMessage}>{error}</p>}

    </div>
  );
};

TextField.propTypes = {
  heading: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.string.isRequired,
};

export default TextField;
