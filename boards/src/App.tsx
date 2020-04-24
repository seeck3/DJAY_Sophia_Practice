import React, { Fragment } from 'react';
// Material UI Theme
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { cyan, grey } from '@material-ui/core/colors';

import logo from './logo.svg';
import './App.css';
import Container from './Components/Layouts/Container';
import Header from './Components/Layouts/Header';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[100],
    },
    secondary: {
      main: grey[400],
    },
    text: {
      primary: grey[400],
      secondary: grey[50],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Header />
        <Container />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
