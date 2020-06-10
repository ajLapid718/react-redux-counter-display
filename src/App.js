import React from 'react';
import logo from './logo.svg';
import './App.css';

/*

We will be making an application that displays a number value to the screen;

This is what we will be able to do as a user:

As a user...

1) I can see the most up-to-date number value on the screen;

2) I can click a button to increment the number value by 1;

3) I can click a button to decrement the number value by 1;

4) I can enter any number (amount) to increase the number value by that amount;

5) I can enter any number (amount) to decrease the number value by that amount;

*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
