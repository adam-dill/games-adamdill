import React from 'react';

export default class GameDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            game: undefined
        }
    }

    componentDidMount() {
        let { match: { params } } = this.props;
        this.setState({game: params.game});
    }

    render() {
        return (
            <p>Game Display Screen {this.state.game}</p>
        );
    }
}