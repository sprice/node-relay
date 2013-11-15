var request = require('request');
var _ = require('underscore');

var json = 'http://judgingjs.herokuapp.com/leaderboard.json';

request.get(json, function(err, res) {
    
    console.log(res);
    console.log('colin waz here');
    
    var teams = JSON.parse(res.body);
    
    calculateMargin(teams);
});

function calculateMargin(teams) {
        var bestTeam = "1";

        var worstTeam = "1";
    var ourTeam = "1";
    for (var i = 1; i <= 50; i++) {
        if (teams[i.toString()]["points"] > teams[bestTeam]["points"]) bestTeam = i.toString();
        if (teams[i.toString()]["points"] < teams[bestTeam]["points"]) worstTeam = i.toString();

        if (teams[i.toString()]["name"] == "Cylon Raider") ourTeam = i.toString();
    }
    var pointsNeeded = (teams[bestTeam]["points"] - teams[ourTeam]["points"]);
    console.log("Cylon raiders need only " + pointsNeeded + " more points to win!");
    console.log("On the plus side, we're " + (teams[ourTeam]["points"] - teams[worstTeam]["points"]) + " ahead of the worst team!");

}
