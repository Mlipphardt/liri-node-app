require("dotenv").config();
const fs = require("fs");
const Spotify = require('node-spotify-api');
const axios = require('axios');
const moment = require('moment');
const keys = require("./keys.js");
 
var spotify = new Spotify(keys.spotify);

function spotifyThis(){
  console.log(input);
  if(input == ""){
    input = "The Sign"
  };
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
};


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

function doWhatItSays(){
  //Reads file for random.txt to pull commands for node
   var data = fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    
    //Separate items in random.txt
    data = data.split(",");
    action = data[0];
    input = data[1]

    if(action == "spotify-this-song"){
      spotifyThis();
    }
  });
};



switch (action) {

  case "spotify-this-song":
    spotifyThis();
    break;

  case "concert-this":
    concertThis();
    break;

  case "movie-this":
    movieThis();
    break;

  case "do-what-it-says":
    doWhatItSays();
    break;

  }

