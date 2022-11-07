import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getPokemons } from '../utils/localStorage';
import Card from '../components/Card';

class PokeFavorites extends React.Component {
  render() {
    const { history } = this.props;
    const meusPokemon = getPokemons();
    return (
      <>
        <Header history={ history } />
        <h1>PokeFavorites</h1>
        {meusPokemon.map(({ name, id }) => (
          <Card key={ name + id } name={ name } url={ `https://pokeapi.co/api/v2/pokemon/${id}/` } />
        ))}
      </>
    );
  }
}

PokeFavorites.propTypes = {
  history: PropTypes.objectOf({
    push: PropTypes.func,
  }).isRequired,
};

export default PokeFavorites;
