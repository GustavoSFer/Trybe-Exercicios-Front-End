import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    console.log(pokemon)
    return (
      <section>
        <p>{ pokemon.name }</p>
        <p>{ pokemon.type }</p>
        <p>{ pokemon.averageWeight.value } { pokemon.averageWeight.measurementUnit }</p>
        <img src={ pokemon.image } alt={ pokemon.name } />
      </section>
    );
  }
}

export default Pokemon;