import React from 'react';
import { Link } from 'react-router-dom';
import DataAdapter from '../data/gameListDataAdapater';
import './game-display.css';

export default class GameDisplay extends React.Component {
    _adapter = new DataAdapter();

    constructor(props) {
        super(props);
        this.state = {
            game: {}
        }
    }

    componentDidMount() {
        this.loadGameDetails();
    }

    render() {
        const data = this.state.game;
        data.image = '../' + data.image;
        data.project = '../' + data.project;
        return (
            <div>
                <Link to='/games' className="return-button button">Back to Games</Link>
                <Link to={data.project} target="_blank" className="launch-button button">Launch</Link>
                <a href={data.git} title="View on GitHub" target="_blank" rel="noopener noreferrer"><img src='../assets/vendoricons/GitHub_Logo.png' height="40" /></a>
                
                <div className="image-container">
                    <div>
                        <img src={data.image} />
                    </div>
                </div>
                <h3>{data.name}</h3>
            </div>
        );
    }

    async loadGameDetails() {
        let { match: { params } } = this.props;
        let game = await this._adapter.getGameByProperty('slug', params.game);
        this.setState({game: game});
    }
}