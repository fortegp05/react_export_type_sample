import React from 'react';
import logo from './logo.svg';
import './App.css';
import { isSample, isSamples } from './Sample'

const sample = {
  id: 1,
  title: 'string;',
  descriptions: [
    {
      id: 1,
      softwareDevelopmentId: 1,
      description: 'string;'
    },
  ],
}

isSample(sample)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
