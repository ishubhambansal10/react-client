/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, CircularProgress, Typography } from '@mui/material';

const withLoaderAndMessage = (Component) => {
  const Enhanced = (props) => {
    const { loader, dataLength, ...rest } = props;
    if (loader) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      );
    }

    console.log(dataLength);
    if (dataLength < 1) {
      return (
        <Typography sx={{ display: 'flex', justifyContent: 'center' }}>
          OOPS!, No More Trainees
        </Typography>
      );
    }
    return (
      <Component {...rest} />
    );
  };
  Enhanced.propTypes = {
    loader: PropTypes.bool.isRequired,
    dataLength: PropTypes.number.isRequired,
  };
  return Enhanced;
};

export default withLoaderAndMessage;
