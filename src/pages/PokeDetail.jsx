import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import CardDetail from '../components/CardDetail';
import { isFavorite, removePokemon, savePokemon } from '../utils/localStorage';

class PokeDetail extends React.Component {
  state = {
    pokemon: undefined,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemonResolve = await pokemon.json();
    this.setState({ pokemon: pokemonResolve });
  }

  handleChange = ({ target }) => {
    const { match } = this.props;
    const { pokemon } = this.state;
    const { id } = match.params;
    if (target.checked === true) {
      savePokemon(pokemon);
    } else {
      removePokemon(Number(id));
    }
    this.setState({});
  };

  render() {
    const { history, match } = this.props;
    const { pokemon } = this.state;
    const { id } = match.params;
    return (
      <>
        <Header history={ history } />
        <h1>PokeDetail</h1>
        <input
          type="checkbox"
          checked={ isFavorite(Number(id)) }
          onChange={ this.handleChange }
        />
        { pokemon && <CardDetail
          name={ pokemon.name }
          sprites={ pokemon.sprites }
          types={ pokemon.types }
          stats={ pokemon.stats }
        />}
      </>
    );
  }
}

PokeDetail.propTypes = {
  history: PropTypes.objectOf({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default PokeDetail;
