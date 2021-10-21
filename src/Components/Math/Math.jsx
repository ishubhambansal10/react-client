import React from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const Math = (props) => {
  const {
    first, second, operator, children,
  } = props;

  const Result = (value1, value2, operatorvalue) => {
    if (operatorvalue === '+') {
      return value1 + value2;
    }
    if (operatorvalue === '-') {
      return value1 - value2;
    }
    if (operatorvalue === '*') {
      return value1 * value2;
    }
    if (operatorvalue === '/') {
      if (value2 === 0) {
        return 'Infinity';
      }
      return value1 / value2;
    }
    return 'Invalid Operator';
  };
  const result = Result(first, second, operator);

  return (
    <Typography>
      {children ? children({
        first, second, operator, result,
      }) : `${first} ${operator} ${second} = ${result}`}
    </Typography>
  );
};

Math.defaultProps = {
  children: null,
};
Math.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
  operator: PropTypes.string.isRequired,
  children: PropTypes.func,
};

export default Math;
