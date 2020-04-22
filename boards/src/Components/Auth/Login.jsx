import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';

// Redux
import { connect } from 'react-redux';
import { loginUser } from '../../Redux/Actions/auth';

const Login = ({ isAuthenticated, loginUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();
  const onSubmit = async (e) => {
    e.preventDefault();
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // };
    const formData = {
      email,
      password,
    };
    try {
      loginUser(formData);
      // const user = await axios.post('/api/auth/login', payload, config);
      // console.log('user', user);
      // if (user) localStorage.setItem('token', user.data.token);
      // let path = `/boards`;
      // history.push(path);
    } catch (error) {
      console.log(error.response.data.errors);
    }
  };
  if (isAuthenticated) return <Redirect to='/boards' />;
  return (
    <div>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign Into Your Account
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/Register'>Sign Up</Link>
      </p>
    </div>
  );
};

Login.propTypes = {};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { loginUser })(Login);
