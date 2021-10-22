import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AddDialog = (props) => {
  const {
    open,
    onClick,
    onClose,
    onSubmit,
    onChange,
    onBlur,
    value,
  } = props;

  return (
    <div>
      <Button variant="outlined" onClick={onClick}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Add Trainee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter Your Trainee Details
          </DialogContentText>
          <div>
            <FormControl fullWidth sx={{ m: 1, width: '100%' }}>
              <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                // value={values.name}
                // onChange={handleChange('name')}
                startAdornment={(
                  <InputAdornment position="start">

                  </InputAdornment>
                )}
                label="Name"
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1, width: '100%' }}>
              <InputLabel htmlFor="outlined-adornment-amount">Email Address</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                // value={values.email}
                // onChange={handleChange('amount')}
                startAdornment={(
                  <InputAdornment position="start">
                    {/* <EmailIcon /> */}
                  </InputAdornment>
                )}
                label="Email Address"
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                // type={values.showPassword ? 'text' : 'password'}
                // value={values.password}
                // onChange={handleChange('password')}
                startAdornment={(
                  <InputAdornment position="start">
                    {/* <IconButton
                  aria-label="toggle password visibility"
                  // onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="start"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton> */}
                  </InputAdornment>
                )}
                label="Password"
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                // type={values.showPassword ? 'text' : 'password'}
                // value={values.password}
                // onChange={handleChange('password')}
                startAdornment={(
                  <InputAdornment position="start">
                    {/* <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="start"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton> */}
                  </InputAdornment>
                )}
                label="Confirm Password"
              />
            </FormControl>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

AddDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default AddDialog;
