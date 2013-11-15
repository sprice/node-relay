var request = require('request');

var json = 'http://judgingjs.herokuapp.com/leaderboard.json';

request.get(json, function(err, res) {
    console.log(res);
    console.log('colin waz here');
});
