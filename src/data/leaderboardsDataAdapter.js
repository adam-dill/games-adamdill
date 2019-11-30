export default class DataAdapter {

    /** The api url. */
    _url = "http://leaderboards.adamdill.com";


    async getGames() {
        let response = await fetch(this._url + "/games");
        let json = await response.json();
        return json.data;
    }

    async getGame(arg) {
        let response = await fetch(this._url + "/games/" + arg);
        let json = await response.json();
        return json.data;
    }

    async getGameScores(id) {
        let response = await fetch(this._url + "/scores/" + id);
        let json = await response.json();
        return json.data;
    }
}