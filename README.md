# liri-node-app

Liri is an app designed to be run from the command line using Node.js.

Liri allows users to search for their favorite songs, musicians, and movies and receive useful information.

In order to ready liri for us, complete the following steps: 
1. Download this package from https://github.com/Mlipphardt/liri-node-app
2. Navigate to the downloaded folder.
3. If Node.js has not been installed, download and install it from 
   https://nodejs.org/
3. Run 'npm install' to install the required package: Axios.
4. To run Liri, put the following in the command line:
    node liri.js (option) (query)

4a)Liri offers the following four options:
1. spotify-this-song - Search for a song on Spotify and receive information.

[Example of spotify-this-song in action.](./demo-images/spotify-this-song-preview.png)

2. movie-this - Search for a movie on OMDB and receive information.

[Example of movie-this in action.](./demo-images/movie-this-preview.png)

2a. If no query is provided for movie-this, the app will default to searching for the movie "Mr. Nobody."

[Example of movie-this default in action.](./demo-images/movie-this-default-preview.png)


3. concert-this - Search for an artist and receive concert scheduling data from 
   the Bands in Town API.

[Example of concert-this in action.](./demo-images/concert-this-preview.png)

4. do-what-it-says - Searches for "I want it that way" in Spotify.

[Example of do-what-it-says in action.](./demo-images/do-what-it-says-preview.png)

Technologies used in this project:

- Node.js was used to create the command line interface.

- APIs from Bands-in-Town, OMDB, and Spotify to provide the information for the features.

- NPM package "Axios" was used to access the Bands-in-Town and OMDB APIs.

- NPM package "moment" to convert times received by the API.

