import React from 'react';
import { Link, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';

class Header extends React.Component {
  state = {
    redirect: false,
  };

  // changePage = () => {
  //   const { history } = this.props;
  //   history.push('/favorites');
  // };

  render() {
    const { redirect } = this.state;
    return (
      <header>
        <Link to="/Favorites">
          <button type="button">
            Favorites
          </button>
        </Link>
        { redirect && <Redirect to="/list" />}
        <button type="button" onClick={ () => this.setState({ redirect: true }) }>
          List
        </button>
        {/* <button onClick={ this.changePage } type="button">
          Favorites
        </button> */}
      </header>
    );
  }
}

// Header.propTypes = {
//   history: PropTypes.objectOf({
//     push: PropTypes.func,
//   }).isRequired,
// };

export default Header;
