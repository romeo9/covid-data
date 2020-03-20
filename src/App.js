import React from 'react';
import './App.css';
import ExternalContainer from './views/ExternalContainer'
import MetaData from './meta/MetaData';

function App() {
  return (
    <div className="App">
      <MetaData></MetaData>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />

      {/* <header className="App-header">
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
      </header> */}
      <ExternalContainer></ExternalContainer>
    </div>
  );
}

export default App;
