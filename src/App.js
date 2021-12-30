import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavigator from './components/AppNavigator';
import Pokedex from './containers/Pokedex';
import PokemonDetails from './containers/PokemonDetails';


const App = () => {
  return (
    <Router>
      <AppNavigator />
      <Routes>
        <Route exact path="/" element={<Pokedex />} />
        <Route exact path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
      
    </Router>
  )
}

export default App;