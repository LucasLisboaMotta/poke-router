import React from 'react';
import PropTypes from 'prop-types';
import getImgUrl from '../utils/getImgUrl';

class Card extends React.Component {
  render() {
    const { name, url } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <img src={ getImgUrl(url) } alt={ `${name}'s card` } />
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
