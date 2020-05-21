import React from 'react';
import Board from './Board'
import CardContextProvider from '../CardContext';


function App() {
  return (
    <div className="App">
      <CardContextProvider>
        <Board />
      </CardContextProvider>
    </div>
  );
}

export default App;
