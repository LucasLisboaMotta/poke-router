import PropTypes from 'prop-types';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
class Header extends React.Component {
  state = {
    redirect: false,
    searchInput: '',
    redirect2: false,
    id: '',
  };
  onChangeInput = ({ target }) => {
    const { searchInput } = this.state;
    console.log(searchInput);
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  onSearchButtonClick = async () => {
    const { searchInput } = this.state;
    const url = `https://pokeapi.co/api/v2/pokemon/${searchInput}`;
    const response = await fetch(url);
    const obj = await response.json();
    this.setState({ id: obj.id, redirect2: true });
  };
  render() {
    const { redirect, redirect2, id } = this.state;
    return (
      <header>
        <Link to="/Favorites">
          <button type="button">
            Favorites
          </button>
        </Link>
        { redirect && <Redirect to="/list" />}
        { redirect2 && <Redirect to={ `${id}` } />}
        <button type="button" onClick={ () => this.setState({ redirect: true }) }>
          List
        </button>
        <label htmlFor="search-input">
          Search for pokemon
          <input
            name="searchInput"
            id="search-input"
            type="text"
            onChange={ this.onChangeInput }
          />
        </label>
        <button
          type="button"
          onClick={ this.onSearchButtonClick }
        >
          Search
        </button>
        {/* <button onClick={ this.changePage } type="button">
          Favorites
        </button> */}
      </header>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

// Header.propTypes = {
//   history: PropTypes.objectOf({
//     push: PropTypes.func,
//   }).isRequired,
// };
export default Header;
