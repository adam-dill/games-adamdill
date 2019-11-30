import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {

    render() {
        return(
            <header>
                <h1>Games</h1>
                <nav>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/leaderboards">Leaderboards</NavLink>
                    <NavLink to="/api">API</NavLink>
                </nav>
            </header>
        );
    }
}