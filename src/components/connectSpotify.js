const SpotifyWebApi = require('spotify-web-api-node');
const config = require('../config.json');

const spotifyApi = new SpotifyWebApi({
    clientId: config.spotify.clientId,
    clientSecret: config.spotify.clientSecret,
    redirectUri: config.spotify.redirectUri
});

module.exports = spotifyApi;