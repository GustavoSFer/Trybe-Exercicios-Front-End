import React from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';
import '../App.css'

class Pokedex extends React.Component {
  render() {
    return(
      <div className="list-pokemons">
         { pokemons.map((item) => <Pokemon pokemons={ item } />)}
      </div>
    );
  }
}

export default Pokedex;