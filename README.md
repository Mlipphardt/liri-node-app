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
2. movie-this - Search for a movie on OMDB and receive information.
3. concert-this - Search for an artist and receive concert scheduling data from 
   the Bands in Town API.
4. do-what-it-says - Searches for "I want it that way" in Spotify.

Example: 'node liri.js spotify-this-song Diamond Eyes' will return: 
    Diamond Eyes
    Song name: Diamond Eyes (Boom-Lay Boom-Lay Boom)
    Listen to a preview: https://open.spotify.com/track/1PLMK1ui86iHHG3FM1N7ue
    Album: The Sound of Madness
