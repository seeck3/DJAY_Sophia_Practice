import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  makeStyles,
} from '@material-ui/core';
import { cyan } from '@material-ui/core/colors';

// Redux
import { connect } from 'react-redux';
import { logout } from '../../Redux/Actions/auth';

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  toolbar: {
    width: '90%',
  },
  root: {
    flexGrow: 1,
  },
});
const Header = ({ isAuthenticated, logout }: any) => {
  const classes = useStyles();
  const logOut = async () => {
    logout();
  };
  return (
    <div className={classes.root}>
      <AppBar color='primary' className='main-header'>
        <Toolbar className={classes.toolbar}>
          {/* <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
        >
          <MenuIcon />
        </IconButton> */}
          <Typography variant='h6' className={classes.title}>
            Welcom To the Boards
          </Typography>
          {!isAuthenticated ? (
            <Button variant='outlined' color='inherit'>
              <Link to='/login'>Login</Link>
            </Button>
          ) : (
            <Button variant='outlined' color='inherit' onClick={logOut}>
              Log out
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {};

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Header);
