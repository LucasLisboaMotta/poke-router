import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import getImgUrl from '../utils/getImgUrl';

class Card extends React.Component {
  getUrlLink = () => {
    const { url } = this.props;
    const splitURL = url.split('/');
    const pokeIndex = splitURL[splitURL.length - 2];
    return `/detail/${pokeIndex}`;
  };

  render() {
    const { name, url } = this.props;
    return (
      <Link to={ this.getUrlLink }>
        <div>
          <h2>{name}</h2>
          <img src={ getImgUrl(url) } alt={ `${name}'s card` } />
        </div>
      </Link>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
