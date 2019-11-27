import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {

    render() {
        return(
            <header>
                <h1>Leaderboards</h1>
                <nav>
                    <NavLink to="/games" activeClassName="selected">Games</NavLink>
                    <NavLink to="/leaderboards" activeClassName="selected">Leaderboards</NavLink>
                    <NavLink to="/api" activeClassName="selected">API</NavLink>
                </nav>
            </header>
        );
    }
}