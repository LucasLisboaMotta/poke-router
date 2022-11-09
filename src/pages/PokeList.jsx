import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Card from '../components/Card';

class PokeList extends React.Component {
  state = {
    pokeList: [],
  };

  async componentDidMount() {
    const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
    const resolvePokemons = await pokemons.json();
    this.setState({ pokeList: resolvePokemons.results });
  }

  render() {
    const { history } = this.props;
    const { pokeList } = this.state;
    return (
      <>
        <Header history={ history } />
        <h1>PokeList</h1>
        <div>
          { pokeList.map(({ name, url }, index) => (
            <Card
              key={ index + name }
              name={ name }
              url={ url }
            />
          )) }
        </div>
      </>
    );
  }
}

PokeList.propTypes = {
  history: PropTypes.objectOf({
    push: PropTypes.func,
  }).isRequired,
};

export default PokeList;
