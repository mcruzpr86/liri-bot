require("dotenv").config();
var Spotify = require('node-spotify-api');


var keys = require("./key.js");
console.log(keys)
console.log(process.argv)
console.log(process.argv[2])

var command = process.argv[2]

var userInput = process.argv[3]

function spotifyThis() {
    // If 
    if (!userInput) {
        userInput = 'The Sign, Ace of Base';
    }
    var spotify = new Spotify(keys.spotify);
    spotify.search({ type: 'track', query: userInput })

        .then(function (data) {

            //Artist
            console.log(data.tracks.items[0].album.artists[0].name);
            //The songs name
            console.log(data.tracks.items[0].name);
            // A preview link of the song from spotify
            console.log(data.tracks.items[0].preview_url);
            //The album that that the song is from
            console.log(data.tracks.items[0].album.name);


        });
}


switch (command) {
    case 'spotify-this-song':
        spotifyThis()
        break;
    case 'movie-this':
        //code
        break;
    case 'do-what-it-says':
        //code
        break;
    case 'concert-this':
        //code
        break;
    default:
        console.log('Please enter in one of these four commands')

}

    //var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"