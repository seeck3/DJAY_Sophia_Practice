import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Typography } from '@material-ui/core';
import { cyan } from '@material-ui/core/colors';

const Header = (props: any) => {
  return (
    <AppBar color='primary' className='main-header'>
      <Typography variant='h2' color='textPrimary'>
        Welcome to Marco's boards
      </Typography>
    </AppBar>
  );
};

Header.propTypes = {};

export default Header;
