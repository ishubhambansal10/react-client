import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { PrivateLayout } from '../Layouts/index';

const PrivateRoute = ({
  exact, path, component: Component,
}) => (
  !localStorage.getItem('token') ? <Route><Redirect to="./login" /></Route> : <Route exact={exact} path={path} render={() => <PrivateLayout><Component exact={exact} path={path} /></PrivateLayout>} />
);

PrivateRoute.defaultProps = {
  exact: false,
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};
export default PrivateRoute;
