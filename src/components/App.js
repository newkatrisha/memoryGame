import React from 'react';
import Board from './Board'
import CardContextProvider from '../components/CardContext';
import '../index.css';


function App() {
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <CardContextProvider>
        <Board />
      </CardContextProvider>
    </div>
  );
}

export default App;
