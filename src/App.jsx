import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
// import { ChildrenDemo } from './pages';
import { Trainee } from './pages/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Trainee />
      </div>
    </ThemeProvider>
  );
}

export default App;
