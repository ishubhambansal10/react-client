import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './style';
import './style.css';

const TextField = (props) => {
  const {
    heading, value, error, disabled, inputStyle,
  } = props;

  return (
    <div>
      <h4 style={styles.heading}>{heading}</h4>
      <input style={styles[inputStyle]} type="text" name="inputField" value={value} error={error} disabled={disabled} />
      {error && <p style={styles.errorMessage}>{error}</p>}
    </div>
  );
};

TextField.propTypes = {
  heading: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.string.isRequired,
  inputStyle: PropTypes.string.isRequired,
};

export default TextField;
