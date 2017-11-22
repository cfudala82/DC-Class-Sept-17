import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {tealA200, darkBlack} from 'material-ui/styles/colors';
import MyForm from './MyForm'
import './App.css';

const theme = getMuiTheme({
  palette: {
    primary1Color: tealA200,
    textColor: darkBlack,
    alternateTextColor: darkBlack
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <MyForm/>
      </MuiThemeProvider>
    );
  }
}

export default App;
