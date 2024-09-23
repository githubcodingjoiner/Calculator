// src/App.js
import React, { useState } from 'react';
import './App.css';
import Calculator from './Calculator';
import ScientificCalculator from './ScientificCalculator';

function App() {
  const [isScientific, setIsScientific] = useState(false);

  return (
    <div className="App">
      <h1>{isScientific ? 'Scientific Calculator' : 'Simple Calculator'}</h1>
      <button onClick={() => setIsScientific(!isScientific)}>
        Switch to {isScientific ? 'Simple' : 'Scientific'} Mode
      </button>
      {isScientific ? <ScientificCalculator /> : <Calculator />}
    </div>
  );
}

export default App;
