import React, { Fragment } from 'react';
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

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Fragment>
          <Header />
          <Container />
        </Fragment>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
