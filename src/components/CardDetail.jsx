import React from 'react';
import PropTypes from 'prop-types';

class CardDetail extends React.Component {
  render() {
    const { name, sprites, types, stats } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <div>
          {types.map(({ type }) => <span key={ name + type.name }>{type.name}</span>)}
        </div>
        <img src={ sprites.front_default } alt={ `${name}'s card` } />
        <ul>
          {stats.map(({ base_stat: baseStat, stat }) => (
            <li key={ name + stat.name }>
              <strong>{`${stat.name}: `}</strong>
              <span>{baseStat}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

CardDetail.propTypes = {
  name: PropTypes.string.isRequired,

  sprites: PropTypes.objectOf({
    front_default: PropTypes.string,
  }).isRequired,

  types: PropTypes.arrayOf(PropTypes.objectOf({
    type: PropTypes.objectOf({
      name: PropTypes.string,
    }),
  })).isRequired,

  stats: PropTypes.arrayOf(PropTypes.objectOf({
    base_stat: PropTypes.number,
    stat: PropTypes.objectOf({
      name: PropTypes.string,
    }),
  })).isRequired,
};

export default CardDetail;
