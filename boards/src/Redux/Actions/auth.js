import axios from 'axios';
import setAuthToken from '../setAuthToken';

import { REGISTER_USER, LOGIN_USER, LOAD_USER, LOGOUT } from './types';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: LOAD_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log('Error from Server : ', error.response.data.errors);
    // dispatch({
    //   type: AUTH_ERROR,
    // });
  }
};

// Register User
export const registerUser = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/user/register', formData, config);

    dispatch({
      type: REGISTER_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log('Error from Server : ', error.response.data.errors);
  }
};

// Login User
export const loginUser = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/auth/login', formData, config);
    dispatch({
      type: LOGIN_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log('Error from Server : ', error.response.data.errors);
  }
};

// Logout
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
