import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import DJBoards from '../Boards/DJ/DJBoards';
import JayLimBoards from '../Boards/JayLim/JayLimBoards';
import SophiaBoards from '../Boards/Sophia/SophiaBoards';
import TabContainer from './TabContainer';

import Landing from './Landing';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Routes from '../Routing/Routes';

const Container = (props: any) => {
  return (
    <Fragment>
      <div className='main-container'>
        <Switch>
          <Routes />
        </Switch>
        {/* <TabContainer /> */}
      </div>
    </Fragment>
  );
};

Container.propTypes = {};

export default Container;
