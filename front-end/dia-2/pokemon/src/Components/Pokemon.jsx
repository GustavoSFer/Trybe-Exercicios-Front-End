import React from 'react';
import '../App.css'

class Pokemon extends React.Component {
  render() {
    const { pokemons } = this.props;
  
    console.log(pokemons)

    return (
      <div className="container">
        <section className="pokemon">
          <p>{pokemons.name}</p>
          <p>{pokemons.type}</p>
          <p>{`${pokemons.averageWeight.value} ${pokemons.averageWeight.measurementUnit}`}</p>
          <img src={ pokemons.image } alt={ pokemons.name } />
        </section>
      </div>
    );
  }
}

export default Pokemon;