// src/ScientificCalculator.js
import React, { useState } from 'react';
import './Calculator.css';

const ScientificCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      const result = Function(`"use strict"; return (${input})`)(); 
      setResult(result);
    } catch (error) {
      setResult('Error');
    }
  };

  const handleScientific = (func) => {
    try {
      const calculated = eval(func + '(' + input + ')');
      setResult(calculated);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <h3>{result}</h3>
      </div>
      <div className="buttons">
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleScientific('Math.sin')}>sin</button>
        <button onClick={() => handleScientific('Math.cos')}>cos</button>
        <button onClick={() => handleScientific('Math.tan')}>tan</button>
        <button onClick={() => handleScientific('Math.log')}>log</button>
        <button onClick={() => handleScientific('Math.sqrt')}>√</button>
        <button onClick={() => handleClick('**')}>^</button>
      </div>
    </div>
  );
};

export default ScientificCalculator;
