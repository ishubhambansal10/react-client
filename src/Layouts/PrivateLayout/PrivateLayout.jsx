import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import { NavBar } from '../components/index';

const PrivateLayout = ({ children }) => (
  <>
    <NavBar />
    <Box m={2.5}>
      {children}
    </Box>
  </>
);

PrivateLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateLayout;
