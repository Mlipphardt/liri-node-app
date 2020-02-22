var Spotify = require('node-spotify-api');
var inquirer = require("inquirer");

 
var spotify = new Spotify({
  id: "ca84d9cab00647c4987e6a13ae4595d7",
  secret: "6ef0db5eb94944aca6996986f8c3295a"
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});