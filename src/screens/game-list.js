import React from 'react';
import DataAdapter from '../data/gameListDataAdapater';
import GameListItem from '../components/game-list-item';
import './game-list.css';

export default class GameList extends React.Component {
    _adapter = new DataAdapter();

    constructor(props) {
        super(props);
        this.state = {
            games: [],
        };
    }

    componentDidMount() {
        this.loadGames();
    }

    render() {
        return (
            <div className="game-list">
                {this.state.games.map((item, index) => (
                    <GameListItem key={index} item={item} />
                ))}
            </div>
        );
    }

    async loadGames() {
        let data = await this._adapter.getGames();
        this.setState({games: data});
    }
}