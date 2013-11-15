var request = require('request');
var _ = require('underscore');

var json = 'http://judgingjs.herokuapp.com/leaderboard.json';

request.get(json, function(err, res) {
    
    console.log(res);
    
    var teams = JSON.parse(res.body);
    
    calculateMargin(teams);
});

function calculateMargin(teams) {
        var bestTeam = "1";
    var ourTeam = "1";
    for (var i = 1; i <= 50; i++) {
        if (teams[i.toString()]["points"] > teams[bestTeam]["points"]) bestTeam = i.toString();
        if (teams[i.toString()]["name"] == "Cylon Raider") ourTeam = i.toString();
    }
    console.log("Cylon raiders need only " + (teams[bestTeam]["points"] - teams[ourTeam]["points"]) + " more points to win!");
}