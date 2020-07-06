import React from 'react';
import Board from './Board'
import '../index.css';


function App() {
  console.log('in app');
  return (
    <div className="App">
      <h1>Memory Game</h1>
        <Board />
    </div>
  );
}

export default App;
