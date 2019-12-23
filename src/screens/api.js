import React from 'react';
import ApiEntry from '../components/api-entry';

export default class Api extends React.Component {   

    _responseGetGames = `
{
    "statusCode": 200,
    "data": [
        {
            "id": "1",
            "name": "Box Runner",
            "slug": "box-runner"
        },
        {
            "id": "2",
            "name": "E.L.E.",
            "slug": "ele"
        }
    ]
}  
    `;


    _responseGetGame = `
{
    "statusCode": 200,
    "data": {
        "id": "1",
        "name": "Box Runner",
        "slug": "box-runner"
    }
}
    `;


    _bodyAddGame = `
{
    “name”:”Documentation Testing”
}
    `;

    _responseAddGame = `
{
    "statusCode": 200,
    "data": {
        "id": "3",
        "name": "Documentation Testing",
        "slug": "documentation-testing"
    }
}
    `;

    _responseGetScores = `
{
    "statusCode": 200,
    "data": [
        {
            "id": "1",
            "game_id": "2",
            "player_name": "ATD",
            "timestamp": "2019-12-13 20:56:10",
            "scores": {
                "distance": "32370"
            }
        },
        {
            "id": "2",
            "game_id": "2",
            "player_name": "John",
            "timestamp": "2019-12-21 02:30:09",
            "scores": {
                "distance": "48860"
            }
        }
    ]
}
    `;


    _bodyAddScore = `
{
    "game_id":1,
    "player_name":"Adam",
    "scores": {
        "distance":4000,
        "stars":4
    }
}
    `;


    _responseAddScore = `
{
    "statusCode": 200
}
    `;

    render() {
        return (
            <div>
                <ApiEntry id="1"
                          method="GET" 
                          url="http://leaderboards.adamdill.com/games"
                          description="List of all games."
                          exampleResponse={this._responseGetGames} />

                <ApiEntry id="2"
                          method="GET" 
                          url="http://leaderboards.adamdill.com/games/1"
                          description="Get the game by id or slug"
                          exampleResponse={this._responseGetGame} />

                <ApiEntry id="3"
                          method="POST" 
                          url="http://leaderboards.adamdill.com/games/add"
                          description="Add a game."
                          exampleBody={this._bodyAddGame}
                          exampleResponse={this._responseAddGame} />


                <ApiEntry id="4"
                          method="GET" 
                          url="http://leaderboards.adamdill.com/scores/2"
                          description="Get the scores for a game by id."
                          exampleResponse={this._responseGetScores} />


                <ApiEntry id="5"
                          method="POST" 
                          url="http://leaderboards.adamdill.com/scores/add"
                          description="Add a score to a game."
                          exampleBody={this._bodyAddScore}
                          exampleResponse={this._responseAddScore} />
            </div>
        );
    }
}