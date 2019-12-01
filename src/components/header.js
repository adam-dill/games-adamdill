import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default class Header extends React.Component {

    
    componentDidMount() {
        this.unlisten = this.props.history.listen( location =>  {
            const nav = document.querySelector('header nav');
            nav.classList.add('nav-hide');
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        return(
            <header>
                <h1>Games</h1>
                <nav>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/leaderboards">Leaderboards</NavLink>
                    <NavLink to="/api">API</NavLink>
                </nav>
                <button className="hamburger-menu" onClick={this.handleMenuClick}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </header>
        );
    }

    handleMenuClick() {
        const nav = document.querySelector('header nav');
        nav.classList.toggle('nav-hide');
    }
}