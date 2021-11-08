import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import FormControl from '@mui/material/FormControl';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const EditDialog = (props) => {
  const {
    open, value, onChange, onClose, onSubmit,
  } = props;
  return (
    <div>
      <Dialog open={open} onClose={onClose} maxWidth="70px" marginRight="10px" marginleft="10px">
        <DialogTitle>Edit Trainee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your trainee details
          </DialogContentText>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            value={value.name}
            required
          >
            <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
            <OutlinedInput
              id="outlined-adornment-name"
              type="text"
              name="name"
              onChange={onChange}
              startAdornment={(
                <InputAdornment position="start">
                  <PersonIcon fontSize="small" color="black" />
                </InputAdornment>
              )}
              label="Name"
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            value={value.email}
          >
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <OutlinedInput
              id="email"
              type="email"
              name="email"
              onChange={onChange}
              startAdornment={(
                <InputAdornment position="start">
                  <EmailIcon fontSize="small" color="black" />
                </InputAdornment>
              )}
              label="Email Address"
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onSubmit} variant="contained">Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

EditDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default EditDialog;
