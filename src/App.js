import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavigator from './components/AppNavigator';
import Pokedex from './containers/Pokedex';
import PokemonDetails from './containers/PokemonDetails';
import { Provider } from 'react-redux'
import { persistor, store } from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react';


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
        <AppNavigator />
        <Routes>
          <Route exact path="/" element={<Pokedex />} />
          <Route exact path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </Router>
    </PersistGate>
    </Provider>
  )
}

export default App;