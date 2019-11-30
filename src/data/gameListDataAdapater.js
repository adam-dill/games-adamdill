export default class DataAdapter {

    _mockResponseTime = 250;

    /** MOCK Data */
    _games = [
        {
            name: 'Box Runner',
            slug: 'box-runner',
            image: 'assets/titleimages/pummel-party.jpg',
            descriptionShort: 'Box Runner description...',
            description: 'Box Runner description long.',
            git: 'https://github.com/adam-dill/box-runner',
            project: 'projects/boxrunner/',
            width: 1000,
            height: 700,
        },
        {
            name: 'E.L.E.',
            slug: 'ele',
            image: 'assets/titleimages/retro-town.jpg',
            descriptionShort: 'E.L.E. description...E.L.E. description...E.L.E. description...E.L.E. description...',
            description: 'E.L.E. descriptionE.L.E. description long.',
            git: 'https://github.com/adam-dill/ELE',
            project: 'projects/ele/',
            width: 900,
            height: 600,
        },
        {
            name: 'Game of Life',
            slug: 'game-of-life',
            image: 'assets/titleimages/snakes-and-ladders.jpg',
            descriptionShort: 'Game of Life description...',
            description: 'Game of Life description long.',
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