import React from 'react';
import DataAdapter from '../data/leaderboardsDataAdapter';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './leaderboards.css';

export default class Leaderboards extends React.Component {
    _adapter = new DataAdapter();

    constructor(props) {
        super(props);
        this.state = {
            games: [],
            scores: [],
            currentSelection: undefined,
        };
    }

    componentDidMount() {
        this.loadGames();
    }

    render() {
        let listGames = this.state.games.map((item, key) =>  <li key={key} onClick={this.handleGameClick.bind(this,item)}>{item.name}</li> );
        
        return (
            <div>
                <ul className="game-list-container">
                    { listGames }
                </ul>
                <ReactTable data={this.state.scores} 
                            columns={this.getScoreColumns()}
                            defaultPageSize={10} />
            </div>
        );
    }

    async loadGames() {
        let data = await this._adapter.getGames();
        this.setState({games: data});
    }

    async loadScores(gameId) {
        let data = await this._adapter.getGameScores(gameId);
        this.setState({scores: data});
    }

    handleGameClick(item, e) {
        if (this.state.currentSelection !== undefined) {
            this.state.currentSelection.classList.remove('selected');
        }
        this.setState({currentSelection: e.currentTarget});
        e.currentTarget.classList.add('selected');
        this.loadScores(item.id);
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
}