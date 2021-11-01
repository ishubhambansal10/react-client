import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
// import { ChildrenDemo } from './pages';
// import { Trainee } from './pages/index';
import Login from './pages/Login/Login';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
