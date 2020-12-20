import React from 'react';
import Pokedex from './Pokedex';
import pokemon from './pokemon';

function App() {
  return (
    <Pokedex pokemon={pokemon}/>
  )
};

export default App;