require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
 
var spotify = new Spotify(keys.spotify);
console.log(spotify);
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data.tracks.items[0]); 
});

/*
Artist(s)

The song's name

A preview link of the song from Spotify

The album that the song is from */