import { REGISTER_USER, LOGIN_USER, LOAD_USER, LOGOUT } from '../Actions/types';

const initialState = {
  user: {},
  isAuthenticated: false,
  loading: true,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log('type', type);
  switch (type) {
    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case REGISTER_USER:
    case LOGIN_USER:
      if (payload.token) localStorage.setItem('token', payload.token);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return initialState;
    default:
      return state;
  }
};
