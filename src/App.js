import React from 'react';
import { withRouter } from 'react-router';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import './App.css';
import Header from './components/header';
import GameList from './screens/game-list';
import Api from './screens/api';
import GameDisplay from './screens/game-display';
import Leaderboards from './screens/leaderboards';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/leaderboards" render={({match})        => <Leaderboards match={match} />} />
          <Route path="/api"          render={({match})        => <Api          match={match} />} />
          <Route path="/games/:game"  render={({match})        => <GameDisplay  match={match} />} />
          <Route path="/games"       render={({match})        => <GameList     match={match} />} />
          <Redirect from="*" to="/games" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);