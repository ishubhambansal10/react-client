import React from 'react';
import PropTypes from 'prop-types';

const RadioGroup = () =>{
  const {
    error, value, onChange, options,
  } = props;
  return
};

RadioGroup.defaultProps = {
  error: '',
};

RadioGroup.proptypes = {
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  defaultText: PropTypes.string,
};

export default RadioGroup;
