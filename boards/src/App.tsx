import React, { Fragment, useEffect } from 'react';
// Material UI Theme
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { cyan } from '@material-ui/core/colors';
// Redux
import { Provider } from 'react-redux';
import store from './store';

import logo from './logo.svg';
import './App.css';
import Container from './Components/Layouts/Container';
import Header from './Components/Layouts/Header';

import Landing from './Components/Layouts/Landing';
import Login from './Components/Auth/Login';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import setAuthToken from './Redux/setAuthToken';

import { loadUser } from './Redux/Actions/auth';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[100],
    },
    secondary: {
      main: cyan[400],
    },
    text: {
      primary: cyan[50],
      secondary: cyan[500],
    },
  },
});
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Fragment>
          <Router>
            <Header />
            <Container />
          </Router>
        </Fragment>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
