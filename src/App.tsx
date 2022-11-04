import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NotificationBox} from "./components/NotificationBox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <NotificationBox></NotificationBox>
    </div>
  );
}

export default App;
