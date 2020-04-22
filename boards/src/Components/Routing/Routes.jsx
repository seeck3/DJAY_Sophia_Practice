import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// components
import TabContainer from '../Layouts/TabContainer';

import Landing from '../Layouts/Landing';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import PrivateRoutes from './PrivateRoutes';
const Routes = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <PrivateRoutes exact path='/boards' component={TabContainer} />
    </Switch>
  );
};

Routes.propTypes = {};

export default Routes;
