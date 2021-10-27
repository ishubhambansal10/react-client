import React from 'react';
import PropTypes from 'prop-types';

const RadioGroup = (props) => {
  const {
    error, value, onChange, options, onBlur,
  } = props;
  return (
    <>
      <h4>What you do?</h4>
      {options.map((items) => {
        const { value: selectedvalue, label } = items;
        return (
          <div value={value} onChange={onChange} onBlur={onBlur} key={selectedvalue} error={error}>
            <input type="radio" id={selectedvalue} name="sportoptions" value={selectedvalue} />
            <label htmlFor="role">{label}</label>
            <br />
          </div>
        );
      })}
    </>
  );
};

RadioGroup.defaultProps = {
  error: '',
  options: [],
};

RadioGroup.propTypes = {
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  onBlur: PropTypes.func.isRequired,
};

export default RadioGroup;
