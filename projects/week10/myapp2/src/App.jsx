import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
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
          <h1 className="App-title">Welcome to Chris</h1>
        </header>

        <Hello name='Billy'/>

        <HelloList />

      </div>
    );
  }
}

export default App;
