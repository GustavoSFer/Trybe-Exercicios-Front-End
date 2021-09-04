import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    console.log(pokemon)
    return (
      <section className="pokemon">
        <div className="classDiv">
          <p>{ pokemon.name }</p>
          <p>{ pokemon.type }</p>
          <p>{ pokemon.averageWeight.value } { pokemon.averageWeight.measurementUnit }</p>
        </div>
        <div>
          <img src={ pokemon.image } alt={ pokemon.name } />
          </div>
      </section>
    );
  }
}

export default Pokemon;