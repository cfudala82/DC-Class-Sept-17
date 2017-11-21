import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {tealA200, grey900} from 'material-ui/styles/colors';
import MyForm from './MyForm';
import './App.css';


const theme = getMuiTheme({
  palette: {
    textColor: grey900
  },
  palette: {
    textColor: grey900
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
      <MyForm />
      </MuiThemeProvider>
    );
  }
}

export default App;
