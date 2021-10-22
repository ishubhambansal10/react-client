import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const SelectField = (props) => {
  const {
    error, value, onChange, options, defaultText, onBlur,
  } = props;
  return (
    <label htmlFor="sport">
      <h4>Select the game you play?</h4>
      <select className="sport" id="sport" name="sport" value={value} onChange={onChange} error={error} onBlur={onBlur}>
        <option className="sport" value="">{defaultText}</option>
        {options.map((sport) => {
          const { value: selectvalue, label } = sport;
          return <option className="sport" key={selectvalue} value={selectvalue}>{label}</option>;
        })}
      </select>
    </label>
  );
};

SelectField.defaultProps = {
  error: '',
  defaultText: 'Select',
  options: [],
};

SelectField.propTypes = {
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  defaultText: PropTypes.string,
  onBlur: PropTypes.func.isRequired,
};
export default SelectField;
