//Read and set any environment variable with the .env package
require("dotenv").config();

var Spotify = require('node-spotify-api');

var axios = require('axios')

var keys = require("./key.js");

var command = process.argv[2]

var userInput = process.argv[3]

var fs = require("fs")

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

function movieThis() {
    //movie this if statement
    if (!userInput) {
        userinput = 'Mr Nobody'
    }
    var movieURL = 'http://www.omdbapi.com/?t=' + userInput + '&y=&plot=short&apikey=trilogy'
    axios
        .get(movieURL)
        .then(function (response) {
            let results = response.data
            // console.log(results)
            console.log(`Title:  ${results.Title}`)
            console.log(`Year:  ${results.Year}`)
            console.log(`${results.Ratings[0].Source}:  ${results.Ratings[0].Value}`)
            console.log(`${results.Ratings[1].Source}:  ${results.Ratings[1].Value}`)
            console.log(`Country:  ${results.Country}`)
            console.log(`Language:  ${results.Language}`)
            console.log(`Plot:  ${results.Plot}`)
            console.log(`Actors:  ${results.Actors}`)

        })
}

function doWhatItSays() {
    fs.readFile("./random.txt", "utf8", function (err, data) {
        console.log(data)
        var dataCommand = data.split(",")
        console.log(dataCommand)
        command = dataCommand[0]
        userInput = dataCommand[1]
        processCommand()
    })
}

function processCommand() {

    switch (command) {
        case 'spotify-this-song':
            spotifyThis()
            break;
        case 'movie-this':
            movieThis()
            break;
        case 'do-what-it-says':
            doWhatItSays()
            break;
        case 'concert-this':
            //code
            break;
        default:
            console.log('Please enter in one of these four commands')

    }
}
processCommand()
