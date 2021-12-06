import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ApolloProvider } from '@apollo/client';
import { theme } from './theme';

import { AuthRoute, PrivateRoute } from './routes/index';
import {
  Login, Trainee, InputDemo, TextFieldDemo, ChildrenDemo, NotFound,
} from './pages/index';
import SnackbarProvider from './contexts/SnackbarProvider/SnackbarProvider';
import apolloClient from './lib/apollo-client';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <ApolloProvider client={apolloClient}>
            <div className="App">
              <Switch>
                <Route exact path="/">
                  <Redirect to="/login" />
                </Route>
                <AuthRoute exact path="/login" component={Login} />
                <PrivateRoute path="/trainee" component={Trainee} />
                <PrivateRoute exact path="/text-field-demo" component={TextFieldDemo} />
                <PrivateRoute exact path="/input-demo" component={InputDemo} />
                <PrivateRoute exact path="/children-demo" component={ChildrenDemo} />
                <PrivateRoute path="*" component={NotFound} />
              </Switch>
            </div>
          </ApolloProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
