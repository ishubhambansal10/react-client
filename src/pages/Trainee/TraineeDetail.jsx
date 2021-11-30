import React from 'react';
import {
  Box, Button, Typography, Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';

const getDateFormatted = (date) => moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a');

const TraineeDetail = (props) => {
  const { match: { params: { id } }, location: { state: { response } } } = props;

  let obj = {};
  response.forEach((item) => {
    if (item.originalId === id) {
      obj = { ...item };
    }
  });
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Paper elevation={3} sx={{ display: 'flex', width: '100%', height: '170px' }}>
        <Box backgroundColor="rgb(92, 92, 92)" borderRadius="4px 0 0 4px">
          <Typography mx={7} my={9} fontSize="16px" color="white" fontFamily="inherit">
            Thumbnail
          </Typography>
        </Box>
        <Box p={1.5}>
          <Typography variant="h6">{obj.name}</Typography>
          <Typography variant="subtitle1" fontSize="1.3rem" color="GrayText">{getDateFormatted(obj.createdAt)}</Typography>
          <Typography variant="subtitle2" fontSize="1.2rem">{obj.email}</Typography>
        </Box>
      </Paper>
      <Link to="/trainee" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Button variant="contained" color="inherit" sx={{ width: 100, mt: 4 }}>Back</Button>
      </Link>
    </Box>
  );
};

TraineeDetail.propTypes = {
  match: PropTypes.shape({
    exact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.shape({
      response: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

export default TraineeDetail;
