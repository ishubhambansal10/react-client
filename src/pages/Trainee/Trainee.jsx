import React, { useState } from 'react';
import { AddDialog } from './components';

const Trainee = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {

  };
  const handleChange = () => {};
  const handleBlur = () => {};

  return (
    <AddDialog
      open={open}
      onClick={handleClickOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      onChange={handleChange}
      onBlur={handleBlur}
      value={inputs}
    />
  );
};
export default Trainee;
