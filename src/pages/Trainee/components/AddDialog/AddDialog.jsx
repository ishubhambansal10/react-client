import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { isTouched } from '../../helper';
import { style } from './style';

const AddDialog = (props) => {
  const {
    open,
    onClick,
    onClose,
    onSubmitClick,
    onChange,
    onBlur,
    value,
  } = props;

  return (
    <div>
      <Button
        sx={{
          mt: '0.5rem', mb: '1rem', width: 'fit-content', float: 'right', height: '2.5rem',
        }}
        variant="outlined"
        onClick={onClick}
      >
        Add Trainee
      </Button>
      <Dialog open={open} onClose={onClose} maxWidth="70px" marginRight="10px" marginleft="10px">
        <DialogTitle>Add Trainee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter Your Trainee Details
          </DialogContentText>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            value={value.name.input}
            onBlur={onBlur}
            required
            error={(value.name.isTouched && value.error.name)}
          >
            <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
            <OutlinedInput
              id="outlined-adornment-name"
              type="text"
              name="name"
              onChange={onChange}
              startAdornment={(
                <InputAdornment position="start">
                  <PersonIcon fontSize="small" />
                </InputAdornment>
              )}
              label="Name"
            />
            <FormHelperText
              id="outlined-name-helper-text"
              error={(value.name.isTouched && value.error.name)}
            >
              {value.error.name}
            </FormHelperText>
          </FormControl>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            value={value.email.input}
            onBlur={onBlur}
            error={(value.email.isTouched && value.error.email)}
          >
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <OutlinedInput
              id="email"
              type="email"
              name="email"
              onChange={onChange}
              startAdornment={(
                <InputAdornment position="start">
                  <EmailIcon fontSize="small" />
                </InputAdornment>
              )}
              label="Email Address"
            />
            <FormHelperText
              id="outlined-email-helper-text"
              error={(value.email.isTouched && value.error.email)}
            >
              {value.error.email}
            </FormHelperText>
          </FormControl>
          <div style={style.password}>
            <FormControl
              sx={{
                m: 1,
                width: 1 / 2,
                marginleft: 0,
              }}
              variant="outlined"
              value={value.password.input}
              onBlur={onBlur}
              error={(value.password.isTouched && value.error.password)}
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type="password"
                name="password"
                onChange={onChange}
                startAdornment={(
                  <InputAdornment position="start">
                    <VisibilityOffIcon fontSize="small" />
                  </InputAdornment>
                )}
                label="Password"
              />
              <FormHelperText
                id="outlined-email-helper-text"
                error={(value.password.isTouched && value.error.password)}
              >
                {value.error.password}
              </FormHelperText>
            </FormControl>
            <FormControl
              sx={{ m: 1, width: 1 / 2, marginRight: -1 }}
              variant="outlined"
              value={value.confirmPassword.input}
              onBlur={onBlur}
              error={(value.confirmPassword.isTouched && value.error.confirmPassword)}
            >
              <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
              <OutlinedInput
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                onChange={onChange}
                startAdornment={(
                  <InputAdornment position="start">
                    <VisibilityOffIcon fontSize="small" />
                  </InputAdornment>
                )}
                label="Confirm Password"
              />
              <FormHelperText
                id="outlined-email-helper-text"
                error={(value.confirmPassword.isTouched && value.error.confirmPassword)}
              >
                {value.error.confirmPassword}
              </FormHelperText>
            </FormControl>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            onClick={onSubmitClick}
            variant="contained"
            disabled={!(!isTouched(value) && !(Object.keys(value.error).length > 0))}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

AddDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmitClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default AddDialog;
