import React from 'react';
import Weather from './components/Weather';
import './App.css';

const App = () => {
  return (
    <div className="AppContainer">
      <h1 className="AppTitle">Clima</h1>
      <Weather />
    </div>
  );
}

export default App;