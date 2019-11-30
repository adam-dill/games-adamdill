import React from 'react';
import { Link } from 'react-router-dom';

export default class GameListItem extends React.Component {
    render() {
        let data = this.props.item;
        let detailsUrl = '/games/' + data.slug;
        return (
            <Link to={detailsUrl} className="game-list-item">
                <div className='image-container'>
                    <img src={data.image} />
                </div>
                <div className='text-container'>
                    <h3 className='title'>{data.name}</h3>
                    <p className='descriptiong'>{data.descriptionShort}</p>
                </div>
            </Link>
        );
    }
}