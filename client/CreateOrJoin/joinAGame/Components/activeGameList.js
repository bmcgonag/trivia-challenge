import { Games } from '../../../../imports/api/games.js';

Template.activeGameList.onCreated(function() {
    this.subscribe("games");
});

Template.activeGameList.helpers({
    activeGames: function() {
        return Games.find({ active: "Yes" });
    },
});

Template.activeGameList.events({
    "click .joinThisGame" (event) {
        event.preventDefault();

        var game_id = this._id;
        console.log("game id is:" + game_id);

        Session.set("gameId", game_id);
        var game_info = Games.findOne({ _id: game_id, active: "Yes" });
        var gameCode = game_info.gameCode;
        Session.set("gameCode", gameCode);
        validateGameCode();
    }
});
