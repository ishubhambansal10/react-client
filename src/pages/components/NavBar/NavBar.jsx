import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NavBar = () => (
  <Box>
    <AppBar position="static">
      <Toolbar>
        <Typography
          width="82%"
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, padding: 2, fontSize: 25 }}
        >
          Training Portal
        </Typography>
        <Typography flexGrow={0.5} width={1200} marginRight={-12}>
          <Button color="inherit" sx={{ fontSize: 15, width: 10, marginRight: 1.8 }}>Trainee</Button>
          <Button color="inherit" sx={{ fontSize: 15 }}>Textfield Demo</Button>
          <Button color="inherit" sx={{ fontSize: 15 }}>Inputfield Demo</Button>
          <Button color="inherit" sx={{ fontSize: 15 }}>Children Demo</Button>
          <Button color="inherit" sx={{ fontSize: 15 }}>Logout</Button>
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);

export default NavBar;
