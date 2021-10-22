import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const TextField = (props) => {
  const {
    value, error, onChange, onBlur,
  } = props;

  return (
    <label htmlFor="name">
      <h3>Name</h3>
      <input type="text" id="name" name="name" value={value} error={error} onChange={onChange} onBlur={onBlur} />
    </label>
  );
};

TextField.defaultProps = {
  error: '',
};

TextField.propTypes = {
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default TextField;
