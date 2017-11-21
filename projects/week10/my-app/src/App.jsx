import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import HelloMessage from './Hello';
import HelloList from './HelloList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <div id='hello'>
          <HelloMessage name="Chris"/>
        </div> */}
        <HelloList />
      </div>
    );
  }
}

export default App;
