import React from 'react';
import './App.css';
import MenuGlobal from './views/MenuGlobal';
import MetaData from './meta/MetaData';

function App() {
  
  return (
    <div className="App">
      <MetaData></MetaData>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      <link rel="stylesheet" href="https://unpkg.com/react-vis/dist/style.css"/>
      <MenuGlobal></MenuGlobal>
    </div>
  );
}

export default App;
