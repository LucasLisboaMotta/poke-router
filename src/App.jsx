import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PokeDetail from './pages/PokeDetail';
import PokeFavorites from './pages/PokeFavorites';
import PokeList from './pages/PokeList';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/list" component={ PokeList } />
        <Route exact path="/detail/:id" component={ PokeDetail } />
        <Route exact path="/favorites" component={ PokeFavorites } />
        <Route path="*" component={ () => <div><Redirect to="/list" /></div>} />
      </Switch>
    );
  }
}

export default App;
