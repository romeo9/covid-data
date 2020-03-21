import React from 'react';
import './App.css';
import ExternalContainer from './views/ExternalContainer'
import MetaData from './meta/MetaData';

function App() {
  return (
    <div className="App">
      <MetaData></MetaData>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      <ExternalContainer></ExternalContainer>
    </div>
  );
}

export default App;
