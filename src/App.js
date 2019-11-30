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
      <div className="wrapper">
        <Header />
        <Switch>
          <Route path="/leaderboards/:game" render={({match}) => <Leaderboards match={match} />} />
          <Route path="/leaderboards"       component={Leaderboards} />
          <Route path="/api"                component={Api} />
          <Route path="/projects/:game"        render={({match}) => <GameDisplay  match={match} />} />
          <Route path="/projects"              component={GameList} />
          <Redirect from="*" to="/projects" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);