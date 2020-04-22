import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Link, Redirect } from 'react-router-dom';

const Landing = (props: any) => {
  return (
    <Fragment>
      <Link to='/login' className='btn btn-light'>
        Login
      </Link>
      <br />
      <Link to='/register' className='btn btn-light'>
        Register
      </Link>
    </Fragment>
  );
};

Landing.propTypes = {};

export default Landing;
