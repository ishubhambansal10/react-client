import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

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
        <Typography flexGrow={0.5} width={1200} marginRight={-20}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            <Button color="inherit" sx={{ fontSize: 15, width: 10, marginRight: 1.8 }}>Trainee</Button>
          </Link>
          <Link to="/text-field-demo" style={{ color: 'white', textDecoration: 'none' }}>
            <Button color="inherit" sx={{ fontSize: 15 }}>Textfield Demo</Button>
          </Link>
          <Link to="/input-demo" style={{ color: 'white', textDecoration: 'none' }}>
            <Button color="inherit" sx={{ fontSize: 15, width: 130 }}>Input Demo</Button>
          </Link>
          <Link to="/children-demo" style={{ color: 'white', textDecoration: 'none' }}>
            <Button color="inherit" sx={{ fontSize: 15 }}>Children Demo</Button>
          </Link>
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
            <Button color="inherit" sx={{ fontSize: 15 }}>Logout</Button>
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);

export default NavBar;
