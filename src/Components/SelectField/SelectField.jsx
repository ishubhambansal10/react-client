import React from 'react';
import PropTypes from 'prop-types';
import Slider from '../Slider/Slider';


const SelectField = () =>{
  const {
    error, value, onChange, options, defaultText,
  } = props;
  return
};

SelectField.defaultProps = {
  error: '',
};

SelectField.proptypes = {
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  defaultText: PropTypes.string,
};
export default SelectField;
