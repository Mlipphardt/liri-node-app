require("dotenv").config();
const Spotify = require('node-spotify-api');
const axios = require('axios');
const moment = require('moment');
const keys = require("./keys.js");
 
var spotify = new Spotify(keys.spotify);

function spotifyThis(){
  spotify.search({ type: 'track', query: input }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  
      console.log("Song name: " + data.tracks.items[0].name); 
      console.log("Listen to a preview: " + data.tracks.items[0].external_urls.spotify)
      console.log("Album: " + data.tracks.items[0].album.name)
  });
};

function concertThis(){
  axios.get('https://rest.bandsintown.com/artists/' + input + '/events?app_id=codingbootcamp')
  .then(function (response) {
    // handle success
    let apiresponse = response.data
    for(let i = 0; i < apiresponse.length; i++){
      console.log("Event #" + i)
      console.log(apiresponse[i].venue.name);
      console.log("This event shall be in " + apiresponse[i].venue.city + ", " + apiresponse[i].venue.region + " in " + apiresponse[i].venue.country)
      console.log("This event will take place on " + moment(apiresponse[i].datetime).format("MM/DD/YYYY"))
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

function movieThis(){
  if(input == ""){
    input = "Mr. Nobody"
  };
  axios.get('https://www.omdbapi.com/?t=' + input + '&apikey=trilogy')
  .then(function (response ) {
    let apiresponse = response.data;
    console.log("Title " + apiresponse.Title)
    console.log("Year of Release " + apiresponse.Year)
    console.log("Content rating: " + apiresponse.Rated)
    console.log("Rotten Tomatoes rating: " + apiresponse.Ratings[1].Value)
    console.log("Country/Countries of Film: " + apiresponse.Country)
    console.log("Film language: " + apiresponse.Language)
    console.log("Plot summary: " + apiresponse.Plot)
    console.log("Actors in this film: " + apiresponse.Actors)

  })
  .catch(function (error){
    console.log(error)
  });
}

var input = process.argv.slice(3).join(" ");

var action = process.argv[2];

switch (action) {
  case "spotify-this":
    spotifyThis();
    break;

  case "concert-this":
    concertThis();
    break;

  case "movie-this":
    movieThis();
    break;
  }

/*

axios.get('https://www.omdbapi.com/?t="Forrest+Gump"&apikey=trilogy')
  .then(function (response ) {
    let apiresponse = response.data;
    console.log("Title " + apiresponse.Title)
    console.log("Year of Release " + apiresponse.Year)
    console.log("Content rating: " + apiresponse.Rated)
    console.log("Rotten Tomatoes rating: " + apiresponse.Ratings[2].Value)
    console.log("Country of Film: " + apiresponse.Country)
    console.log("Film language: " + apiresponse.Language)
    console.log("Plot summary: " + apiresponse.Plot)
    console.log("Actors in this film: " + apiresponse.Actors)

  })
  .catch(function (error){
    console.log(error)
  });



  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
  Name of the venue

Venue location

Date of the Event (use moment to format this as "MM/DD/YYYY")


Artist(s)

The song's name

A preview link of the song from Spotify

The album that the song is from */