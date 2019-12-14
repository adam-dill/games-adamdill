import React from 'react';
import { NavLink } from 'react-router-dom';
import DataAdapter from '../data/leaderboardsDataAdapter';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './leaderboards.css';

export default class Leaderboards extends React.Component {
    _adapter = new DataAdapter();
    _loading = true;
    _loadingInterval;

    constructor(props) {
        super(props);
        this.state = {
            games: [],
            scores: [],
            currentGame:undefined,
            loadingCount:0,
        };
    }

    componentDidMount() {
        this._loadingInterval = setInterval(() => {
            let count = this.state.loadingCount+1;
            if (count > 3) {
                count = 0;
            }
            this.setState({loadingCount:count});
        }, 400);
        this.loadGames();
    }

    componentDidUpdate() {
        let { match: { params } } = this.props;
        if (this.state.currentGame !== params.game) {
            this.state.currentGame = params.game;
            this.loadScores();
        }
    }

    render() {
        if (this._loading === true) {
            return (
                <div>
                    <div className="game-list-container"><span className="loading-message">{this.getLoadingMessage()}</span></div>
                </div>
            )
        } else if (this.state.games.length > 0) {
            return (
                <div>
                    <div className="game-list-container">
                        { this.state.games.map((item, key) => <NavLink key={key} to={`/leaderboards/${item.slug}`} exact>{item.name}</NavLink>) }
                    </div>
                    <ReactTable data={this.state.scores} 
                                columns={this.getScoreColumns()}
                                defaultPageSize={10} />
                </div>
            );
        } else {
            return (
                <div>
                    <div className="game-list-container"><span className="loading-message">No games were found.</span></div>
                </div>
            )
        }
        
    }

    async loadGames() {
        let data = await this._adapter.getGames();
        clearInterval(this._loadingInterval);
        this._loading = false;
        this.setState({games: data});
    }

    async loadScores() {
        let game = await this._adapter.getGame(this.state.currentGame);
        if (game === undefined) {
            this.setState({scores: []});
            return;
        }
        let data = await this._adapter.getGameScores(game.id);
        this.setState({scores: data});
    }

    getScoreColumns() {
        let scoreColumns = [];
        this.state.scores.forEach((item) => {
            for (let prop in item.scores) {
                if (prop === "") { continue; }
                if (scoreColumns.indexOf(prop) === -1) {
                    scoreColumns.push(prop);
                }
            }
        });
        let returnValue = [
            {
                Header: 'Name',
                accessor: 'player_name',
            },
            {
                Header: 'Timestamp',
                accessor: 'timestamp',
            }
        ];
        scoreColumns.forEach((item) => {
            returnValue.push({
                id: item,
                Header: item,
                accessor: value => {
                    return value.scores[item] ? Number(value.scores[item]) : 0;
                },
            });
        });
        return returnValue;
    }

    addMockGames(arr, num) {
        if (arr === undefined) { return; }
        if (num === undefined) { num = 10; }
        
        let start = arr.length;
        let max = arr.length + num;
        for (var i = start; i < max; i++) {
            arr.push(<li key={i}>Game Name</li>);
        }
    }

    getLoadingMessage() {
        let elipses = '...'.slice(0, this.state.loadingCount);
        return `Loading games${elipses}`;
    }
}