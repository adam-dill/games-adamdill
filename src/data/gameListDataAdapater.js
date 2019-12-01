export default class DataAdapter {

    _mockResponseTime = 250;

    /** MOCK Data */
    _games = [
        {
            name: 'Box Runner',
            slug: 'box-runner',
            image: '/assets/titleimages/box-runner.jpg',
            descriptionShort: 'A simple infinite runner built in Unity.',
            description: 'A simple infinite runner built in Unity.',
            git: 'https://github.com/adam-dill/box-runner',
            project: 'projects/boxrunner/',
            width: 1000,
            height: 700,
        },
        {
            name: 'E.L.E.',
            slug: 'ele',
            image: '/assets/titleimages/ele.jpg',
            descriptionShort: 'A 2D infinite runner built in Javascript with the Phaser game engine.',
            description: 'A 2D infinite runner built in Javascript with the Phaser game engine.',
            git: 'https://github.com/adam-dill/ELE',
            project: 'projects/ele/',
            width: 900,
            height: 600,
        },
        {
            name: 'Game of Life',
            slug: 'game-of-life',
            image: '/assets/titleimages/gol.jpg',
            descriptionShort: 'Conway\'s Game Of Life recreated with React.',
            description: 'Conway\'s Game Of Life recreated with React.',
            git: 'https://github.com/adam-dill/react-game-of-life',
            project: 'projects/gameoflife/',
            width: 1000,
            height: 500,
        },
    ];
    
    async getGames() {
        return await this._wrap(this._games);
    }

    async getGameByProperty(prop, value) {
        let games = await this.getGames();
        var game;
        for (let i = 0; i < games.length; i++) {
            if (games[i][prop] === value) {
                game = games[i];
                break;
            }
        }
        return this._wrap(game);
    }

    async _wrap(data) {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), this._mockResponseTime);
        });
        return promise;
    }
}